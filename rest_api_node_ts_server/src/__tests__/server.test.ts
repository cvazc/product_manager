import { connectDatabase } from "../server"
import database from "../config/database"

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
