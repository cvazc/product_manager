import { exit } from "node:process"
import database from "../config/database"
import colors from "colors"

const clearDatabase = async () => {
    try {
        await database.sync({ force: true })
        console.log(colors.green.bold("Test data flushed!"))
        exit(0)
    } catch (error) {
        console.log(error)
        exit(1)
    }
}

if (process.argv[2] === "--clear") {
    clearDatabase()
}
