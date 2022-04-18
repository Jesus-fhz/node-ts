import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";
import log from "../logger/index";

//Currying Function
const validate =  (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) =>  {
    
}   