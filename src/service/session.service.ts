import Session, { SessionDocument } from "../model/session.model";
import { UserDocument } from '../model/user.model'
import {LeanDocument } from 'mongoose';
import { signToken } from "../utils/jwt";
import { Omit } from "lodash";

export const createSession = async (userId: string, userAgent: string) => {
    const session  = await Session.create({user: userId, userAgent})
    return session.toJSON();  
} 


export const createAccessToken = (
    {user, session}:
    {
        user: Omit<UserDocument, "password"> | LeanDocument<Omit<UserDocument, "password">> | any
        session:  Omit<SessionDocument, "password"> | LeanDocument<Omit<UserDocument, "password">> | any
    }) => {
        const accessToken = signToken(
            {...user, session: session._id},
            { expiresIn: "900" }
        )
    return accessToken;
}