import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";

const User = new mongoose.Schema({
    age: Number,
    email: {
        index: true,
        required: [true, "Enter a email"],
        type: String,
    },
    gender: String,
    name: {
        index: true,
        required: [true, "Please enter a name"],
        type: String,
    },
},
    { timestamps: true },
);

export default mongoose.model<IUser & mongoose.Document>("User", User);
