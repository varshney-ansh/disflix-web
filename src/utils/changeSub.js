'use server'
import User from '@/js/Models';
import connectDB from '@/utils/database.js';

export async function UpdateIsSubscribe({id, sub}){
    connectDB();
    try {
        const update = await User.findByIdAndUpdate(id, { isSubscribed: sub });
        return {msg: 'success'};
        console.log(update)
    } catch (error) {
        throw new Error(error)
    }
}
