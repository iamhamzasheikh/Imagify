import express from 'express'
// import {registerUser, loginUser} from '../Controllers/userController.js'
import { registerUser, loginUser } from '../Controllers/userController.js'


const userRouter = express.Router()


userRouter.post('/login', loginUser)


export default userRouter