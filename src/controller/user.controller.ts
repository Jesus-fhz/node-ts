import { Request, Response } from "express";
import log from "../logger/index";
import { omit } from "lodash"
import { createUser } from "../service/user.service"


export const createUserHandler = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        return res.send(omit(user.toJSON(),"password"));
    } catch (error: any) {
        log.info(error);
        return res.status(409).send(error.message);
    }
} 