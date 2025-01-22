import express from "express"
import router from "./router"
import database from "./config/database"
import colors from "colors"
import swaggerUi from "swagger-ui-express"
import swaggerSpec, {swaggerUiOption} from "./config/swagger"

export async function connectDatabase() {
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

server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOption))

export default server
