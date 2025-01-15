import { Router } from "express"
import { body, param } from "express-validator"
import { createProduct, getProductById, getProducts } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()

router.get("/", getProducts)
router.get(
    "/:id",
    param("id").isInt().withMessage("ID not valid"),
    handleInputErrors,
    getProductById
)

router.post(
    "/",
    body("name").notEmpty().withMessage("Product name can not be empty"),

    body("price")
        .isNumeric()
        .withMessage("Price not valid")
        .notEmpty()
        .withMessage("Product price can not be empty")
        .custom((value) => value > 0)
        .withMessage("Price not valid"),
    handleInputErrors,
    createProduct
)

router.put("/", (req, res) => {
    res.json("From PUT")
})

router.patch("/", (req, res) => {
    res.json("From PATCH")
})

router.delete("/", (req, res) => {
    res.json("From DELETE")
})

export default router
