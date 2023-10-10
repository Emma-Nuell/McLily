const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()
const accountroute = require("./routes/accountroute.js")
const userRoute = require("./routes/userRoute.js")

const app = express();
const PORT = process.env.PORT || 3000

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(
    cors({
        origin: ["http://127.0.0.1:5501",
        "https://mclily-stores.onrender.com"],
        credentials: true,
    })
)
app.use("/accounts", accountroute)
app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})