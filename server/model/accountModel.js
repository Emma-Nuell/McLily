const db = require("../db.js")
const timestamp = require("../middlewares/timestamp.js")
const validator = require("validator")
const bcrypt = require("bcrypt")
const uuid = require("uuid")

class Accounts {

    static async signUp(firstName, lastName, email, phoneNo, password) {
        const id = uuid.v4()
        const created_at = await timestamp()

        if (!validator.isEmail(email)) throw Error("Invalid Email Address")
        if (!validator.isStrongPassword(password)) throw Error("Password not strong enough")
        
        const isExist = await this.userExists(email)
        if (isExist) throw Error("User Exists")
        else {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)

            let sql = `INSERT INTO userdata (id, firstname, lastname, email, phone, password, createdat) VALUES
            ("${id}", "${firstName}", "${lastName}", "${email}", "${phoneNo}", "${hash}", "${created_at}")`

            await db.execute(sql)
        }
    }

    static async login(email, password) {
        if (!email || !password) throw Error('All fields must be filled')
        if (!validator.isEmail(email)) throw Error("Invalid Email Address")
        if (!validator.isStrongPassword(password)) throw Error("Password not strong enough")

        const user = await this.userExists(email)
        if (!user) throw Error("User does not exist")
        const match = await bcrypt.compare(password, user.password)
        
        if (!match) throw Error("Incorrect Password")
        return {id: user.id, firstName: user.firstname}
    }

    static async userExists(email) {
        let sql = `SELECT * FROM userdata WHERE email ="${email}"`

        const [user] = await db.execute(sql)
        return user[0]
    }
}

module.exports = Accounts

