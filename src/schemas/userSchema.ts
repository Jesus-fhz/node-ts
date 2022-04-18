import { object, string, ref }  from "yup";

export const createUserSchema = object({
    body: object({
        name: string().required('Name is required'),
        password: string().required('Password is required')
                  .min(6, "Password must be at least 6 characters"),
                  //Regular Expresion for only alpha-numerics characters
                  //.matches(/^[a-zA-Z0-9]*$/,"Only alpha-numerics characters") 
        passwordConfirmation: string().oneOf(
                [ref("password"), null], 
                "Password must match")
                .required('Password confirmation is required'),
        email: string()
               .email("Must be a valid email")
               .required("Email is required") 
                  
    })            
})

export const createSessionSchema = object({
    body: object({
        
        password: string().required('Password is required')
                  .min(6, "Password must be at least 6 characters"),
                  //Regular Expresion for only alpha-numerics characters
                  //.matches(/^[a-zA-Z0-9]*$/,"Only alpha-numerics characters") 
        email: string()
               .email("Must be a valid email")
               .required("Email is required") 
                  
    })            
})

