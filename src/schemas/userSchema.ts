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
            "Password must match" 
        ), 
        email: string()
               .email("Must be a valid email")
               .required("Email is required") 
                  
    })            
})

