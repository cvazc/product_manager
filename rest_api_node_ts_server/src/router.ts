import { Router } from "express"
import { body } from "express-validator"
import { createProduct, getProducts } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()

router.get("/", getProducts)

router.post(
    "/",
    body("name")
        .notEmpty()
        .withMessage("El nombre de producto no puede ser vacio"),

    body("price")
        .isNumeric()
        .withMessage("Valor no válido")
        .notEmpty()
        .withMessage("El precio de producto no puede ser vacio")
        .custom((value) => value > 0)
        .withMessage("Precio no válido"),
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
