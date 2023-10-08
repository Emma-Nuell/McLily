const accounts = require("../model/accountModel.js")
const jwt = require("jsonwebtoken")

const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {expiresIn: "24h"})
}

exports.signUp = async (req, res) => {
    const { firstName, lastName, email, phoneNo, password } = req.body
    
    try {
        const user = await accounts.signUp(firstName, lastName, email, phoneNo, password)
        res.status(200).json({message: "Account Created"})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await accounts.login(email, password)
        const token = createToken(user.id)
        res.status(200).json({ user, token, message: "User logged in" })
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

// module.exports = signUp, login