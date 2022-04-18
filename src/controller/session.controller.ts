
import { Request, Response } from "express";
import {  findUser } from "../service/user.service"
import { createSession, createAccessToken } from "../service/session.service";
import { signToken } from "../utils/jwt";
import config from "../config/defualt";

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
        expiresIn: config.refreshToken,
    });
    // send refresh and access token
    res.send({accessToken,createRefresh})
}