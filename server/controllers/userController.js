const User = require("../model/userModel.js")

exports.getProfile = async (req, res) => {
    try {
        const user_id = req.user_id
        const user = await User.getProfile(user_id)
        res.status(200).json(user)
    }
    catch(error) {
      res.status(400).json({error: error.message})
    }
}