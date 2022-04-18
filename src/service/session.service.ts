import Session, {SessionDocument} from "../model/session.model";

export const createSession = async (userId: string, userAgent: string) => {
    const session  = await Session.create({user: userId, userAgent})
    return session.toJSON();  
} 
