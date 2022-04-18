import express, {Express, Request, Response,  } from "express"

import { createUserHandler, loginHandler } from "../controller/user.controller";
import {validateRequest} from "../middleware/validateRequest";
import { createUserSchema } from "../schemas/userSchema";

const userRouter = express.Router();

userRouter.get('/test', (req: Request, res: Response) => {
    res.send({hola: "Test"});
})

//Register user
userRouter.post('/createUser', validateRequest(createUserSchema), createUserHandler)

//Login
//userRouter.post('/login', validateRequest(loginUserSchema), loginHandler);

//Get user's sessions

//Logout 
export default userRouter;