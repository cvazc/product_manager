import { Router } from "express"
import { body, param } from "express-validator"
import {
    createProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updateAvailability,
    updateProduct,
} from "./handlers/product"
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

router.put(
    "/:id",
    param("id").isInt().withMessage("ID not valid"),
    body("name").notEmpty().withMessage("Product name can not be empty"),
    body("price")
        .isNumeric()
        .withMessage("Price not valid")
        .notEmpty()
        .withMessage("Product price can not be empty")
        .custom((value) => value > 0)
        .withMessage("Price not valid"),
    body("availability")
        .isBoolean()
        .withMessage("Availability value not valid"),
    handleInputErrors,
    updateProduct
)

router.patch(
    "/:id",
    param("id").isInt().withMessage("ID not valid"),
    handleInputErrors,
    updateAvailability
)

router.delete(
    "/:id",
    param("id").isInt().withMessage("ID not valid"),
    handleInputErrors,
    deleteProduct
)

export default router
