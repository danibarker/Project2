//  Create a server
const express = require("express")
require("./db/mongoose")
const cors = require("cors")

const adminRouter = require("./routers/admin")
const tmdbRouter = require("./routers/tmdb")
const app = express()

const port = process.env.PORT || 3001

app.use(cors())

app.use(express.json())

app.use("/admin", adminRouter)
app.use("/tmdb", tmdbRouter)

app.listen(port, () => {
    console.log("Server is actually listening on PORT:", port)
    
})

