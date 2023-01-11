import { validationResult } from 'express-validator';
import userModel from '../models/userModel.js';
import sendVerificationEmail from '../utils/mailer.js';
import jwt from 'jsonwebtoken'
class UserController {
    constructor() { }

    async register(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty())
                return res.status(400).json({ errors: errors.array() });

            const newUser = await new userModel({
                ...req.body,
                username: req.body.first_name + req.body.last_name
            }).save();
            const mailVerification = jwt.sign(
                { id: newUser._id.toString() }
                , process.env.MAIL_JWT_TOKEN
                , { expiresIn: "30m" }
            )
            const url = `${process.env.BASE_URL}/activate/${mailVerification}`
            console.log(newUser)
            sendVerificationEmail(newUser.email, newUser.first_name, url)
            res.status(201).json({ message: "new user successfully created" })
        } catch (error) {
            return res.status(500).json({ message: error.message });

        }

    }
}

export default new UserController();