import { registerValidator } from '../../validators/registerValidator.js';
import  express  from 'express';
import userController from '../../controllers/userController.js';
import { authValidator } from '../../validators/authValidator.js';

const router = express.Router()

router.post("/register" , registerValidator(),userController.register)
router.post("/auth" , authValidator(),userController.auth)
router.post("/activate" ,userController.activateAccount)


export default router
