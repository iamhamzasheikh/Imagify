// import express from 'express'
// // import {registerUser, loginUser} from '../Controllers/userController.js'
// import { registerUser, loginUser } from '../Controllers/userController.js'


// const userRouter = express.Router()


// userRouter.post('/login', loginUser)


// export default userRouter

import express from 'express';
import { registerUser, loginUser } from '../Controllers/userController.js';

const userRouter = express.Router();

// Route for user registration
userRouter.post('/register', registerUser);

// Route for user login
userRouter.post('/login', loginUser);

export default userRouter;
