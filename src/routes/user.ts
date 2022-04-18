import express, { Request, Response,  } from "express"

import { createUserHandler } from "../controller/user.controller";
import { loginHandler } from "../controller/session.controller"
import {validateRequest} from "../middleware/validateRequest";
import { createUserSchema, createSessionSchema } from "../schemas/userSchema";

const userRouter = express.Router();

userRouter.get('/test', (req: Request, res: Response) => {
    res.send({hola: "Test"});
})

//Register user
userRouter.post('/createUser', validateRequest(createUserSchema), createUserHandler)

//Login
userRouter.post('/login', validateRequest(createSessionSchema), loginHandler);

//Get user's sessions

//Logout 
export default userRouter;