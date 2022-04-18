import express, {Express, Request, Response,  } from "express"

import { createUserHandler } from "../controller/user.controller";

const userRouter = express.Router();

userRouter.get('/test', (req: Request, res: Response) => {
    res.send({hola: "Test"});
})

userRouter.post('/createUser', validateRequest(createUserSchema), createUserHandler)
//Register user

//Login

//Get user's sessions

//Logout 
export default userRouter;