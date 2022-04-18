import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";
import log from "../logger/index";
import { rest } from "lodash";

//Currying Function
export const validateRequest =  (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) =>  {
    try {
        await schema.validate({
            body:req.body,
            query: req.query,
            params: req.params
            //AbortEarly to show all messages, instead of returning on the first error found
        }, {abortEarly: false});
        return next();
    } catch (error: any) {
        log.error(error)
        return res.status(400).send(error.errors);
    }
}   