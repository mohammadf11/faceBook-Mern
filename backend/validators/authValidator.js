import { body } from "express-validator"


export const authValidator = () => {
    return [
        body("email").not().isEmpty().isEmail().withMessage("Invalid email address"),
        body("password").not().isEmpty().withMessage("Invalid credentials")
    ];
}