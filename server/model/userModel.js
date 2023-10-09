const db = require("../db.js")

class User {
    static async getProfile(id) {
        let sql = `SELECT firstname, lastname, email FROM userdata WHERE id = '${id}'`
        const [user] = await db.execute(sql)
        return user[0]
    }
}

module.exports = User