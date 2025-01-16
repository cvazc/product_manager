import express from "express"
import router from "./router"
import database from "./config/database"
import colors from "colors"

async function connectDatabase() {
    try {
        await database.authenticate()
        database.sync()
    } catch (error) {
        console.log(colors.red.bold("Error: database can not connect"))
    }
}

connectDatabase()

const server = express()

server.use(express.json())
server.use("/api/products", router)

server.get("/api", (req, res) => {
    res.json({ msg: "From API" })
})

export default server
