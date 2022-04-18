import { Request, Response } from "express";
import log from "../logger/index";
import { omit } from "lodash"
import { createUser, findUser } from "../service/user.service"
import { createSession, createAccessToken } from "../service/session.service";
import { signToken } from "../utils/jwt";
import config from "config";


export const createUserHandler = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        return res.send(omit(user.toJSON(),"password"));
    } catch (error: any) {
        log.info(error);
        return res.status(409).send(error.message);
    }
} 

export const loginHandler = async (req: Request, res: Response) => {
    //validate email and password
    const user = await findUser(req.body);
    if(!user)return res.status(401).send("Invalid username or password");
    
    //Create a session 
    const session = await createSession(user._id, req.get('user-agent') || '')    

    //create access token
    const accessToken = createAccessToken({user,session}) 

    //create refresh token
    const createRefresh = signToken( session,{
        expiresIn: config.get('privatekey'),
    });
    // senmd refresh and access token
}