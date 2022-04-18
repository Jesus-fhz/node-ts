import express, {Express, Request, Response,  } from "express"


const userRouter = express.Router();

userRouter.get('/test', (req: Request, res: Response) => {
    res.send({hola: "Test"});
})

//Register user

//Login

//Get user's sessions

//Logout 
export default userRouter;