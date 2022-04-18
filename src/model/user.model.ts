import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface UserDocument extends mongoose.Document{
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
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

export default mongoose.model("User", UserSchema);