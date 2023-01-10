import { validationResult } from 'express-validator';
import userModel from '../models/userModel.js';
class UserController {
    constructor() { }

    async register(req, res) {
        try {
            const errors = validationResult(req);
            // if (!errors.isEmpty())
            //     return res.status(400).json({ errors: errors.array() });

            const newUser = await new userModel({
                ...req.body,
                username: req.body.first_name + req.body.last_name
            }).save();
            return res.status(200).json('ok');

        } catch (error) {

        }

    }
}

export default new UserController();