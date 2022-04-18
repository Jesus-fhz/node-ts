import jwt from "jsonwebtoken"
import config from "../config/defualt"

const privateKey = config.privateKey as string;
export const signToken = (object: Object, options?: jwt.SignOptions | undefined) =>{
    //signing token
    return jwt.sign(object, privateKey, options);
}