import request from "supertest"
import server, { connectDatabase } from "../server"
import database from "../config/database"

describe("GET /api", () => {
    it("Should send back a JSON response", async () => {
        const response = await request(server).get("/api")

        expect(response.status).toBe(200)
        expect(response.headers["content-type"]).toMatch(/json/)
        expect(response.body.msg).toBe("From API")

        expect(response.status).not.toBe(404)
        expect(response.body.msg).not.toBe("from api")
    })
})

jest.mock("../config/database")

describe("ConnectDB", () => {
    it("Should handle database connection error", async () => {
        jest.spyOn(database, "authenticate").mockRejectedValueOnce(
            new Error("Error: database can not connect")
        )

        const consoleSpy = jest.spyOn(console, "log")
        await connectDatabase()
        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining("Error: database can not connect")
        )
    })
})
