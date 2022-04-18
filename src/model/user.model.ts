import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface UserDocument extends mongoose.Document{
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(comparePassword: string): Promise<boolean>;
}
// Mongoose used to define this before mongoose 6. For backward's compatibility, we will now just define it ourselves.
export interface HookNextFunction {
    (error?: Error): any
  }
const UserSchema = new mongoose.Schema(
    {
        email:{ type: String, required: true, unique: true},
        name: {type: String, required: true },
        password: {type: String, require: true},
        createdAt: Date,
        updatedAt: Date,
    },
    {
        timestamps: true
    }
);


UserSchema.pre("save", async function(next: HookNextFunction){
    let user = this as UserDocument;
    //Only hash password it its new or has been modified
    if(!user.isModified("password")) return next();

    //Creating new ramdon salt
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hashSync(user.password, salt);
    user.password = hash;
    return next();    
});

UserSchema.methods.comparePassword = async function(comparePassword: string){
    const user = this as UserDocument;
    return  await  bcrypt.compare(comparePassword, user.password).catch((error) => false);

}

export default mongoose.model<UserDocument>("User", UserSchema);
