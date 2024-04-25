'use server'
import User from "@/js/Models";
import bcrypt from 'bcryptjs';
import connectDB from '@/utils/database.js';
import { generateToken, verifyToken } from "./token";
import sendEmail from "./sendEmail";


const BASE_URL = process.env.NEXTAUTH_URL;

export async function signUpWithCredentials(data){
    connectDB();

    try {
        const user = await User.findOne({email: data.email})
        if(user){
            return {err: "Email Already Exists"}
        }
        if(data.password){
            data.password = await bcrypt.hash(data.password, 12);
        }

        const token = generateToken({user: data});

        await sendEmail({
            to: data.email,
            url: `${BASE_URL}/ap/verify?token=${token}`,
            text: 'VERIFY EMAIL',
        })
        return {msg: "emailSent"}
    } catch (error) {
        throw new Error(error);
    }
}

export async function verifyWithCredentials(token){
    connectDB();

    try {
        const { user } = verifyToken(token)
        const userExist = await User.findOne({email: user.email});
        if(userExist) return {msg: 'Success'}

        const newUser = new User(user);
        await newUser.save();
        

    } catch (error) {
        throw new Error(error);
    }
}

export async function forgotPasswordWithCredentails({email}){
    connectDB();
    try {
        const user = await User.findOne({email})
        if (!user) {
            return {err: "Email address not found"}
        }
        if(user?.provider !== 'credentials'){
            return {err: `This account is signed in with ${user?.provider}. You can't use this function!`}
        }

        const token = generateToken({userId: user._id})

        await sendEmail({
            to: email,
            url: `${BASE_URL}/ap/reset-password?token=${token}`,
            text: 'RESET PASSWORD',

        })

        return {msg: 'emailSent'}

    } catch (error) {
        return {err: error}
    }
}

export async function resetPasswordWithCredentials({token , password}){
    try {
        const { userId } = verifyToken(token);
        const newPass = await bcrypt.hash(password, 12);
        await User.findByIdAndUpdate(userId, { password: newPass });
        return {msg: 'success'};
    } catch (error) {
        return {err: error}
    }
}