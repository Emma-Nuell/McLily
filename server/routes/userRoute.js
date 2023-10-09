const express = require("express")
const router = express.Router()
const user = require("../controllers/userController.js")
const requireAuth = require("../middlewares/requireAuth.js")

router.use(requireAuth)
router.get("/profile", user.getProfile)

module.exports = router