import {DocumentDefinition } from 'mongoose';
import User, { UserDocument } from '../model/user.model'
import { omit } from 'lodash';


export const createUser =  async (input: DocumentDefinition<UserDocument>) => {
    try {
        return await User.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
}

export const findUser = async ({email, password}: {email: UserDocument["email"], password: string }) => {
    const  user = await User.findOne({email})
    if(!user) return false;
    
    const checkPassword = await user.comparePassword(password);
    if(!checkPassword) return false;

    return  omit(user.toJSON(), "password");
}

