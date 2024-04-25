'use server'
import connectDB from '@/utils/database.js';
import watchlist from './watchlistModel';
import { revalidatePath } from 'next/cache'

export async function SaveToWatchlist({titleId, content, posterUrl, name, email}){
    try {
        connectDB();
        const alreadyExist = await watchlist.find({titleId: titleId, email: email, content})
        if (alreadyExist.length < 1) {
            const newSave = new watchlist({name, email, titleId, content, posterUrl});
            const res = await newSave.save();

            if(res){
                revalidatePath('/mystuff');
                return {msg: 'Success'}
            }
        }
        
        if (alreadyExist.lenght > 1) {
            return {msg: 'Success'}
        }

    } catch (error) {
        throw new Error(error);
    }
}

export async function GetStatusWatch({titleId, email, content}){
    try {
        connectDB();
        const alreadyExist = await watchlist.find({titleId, email, content})
        return alreadyExist;
        
    } catch (error) {
        throw new Error(error);
    }
}

export async function RemoveMovieFromList({titleId, email, content}){
    try {
        connectDB();
        const res = await watchlist.deleteOne({titleId, email, content});
        if(res){
            revalidatePath('/mystuff');
            return {msg: "Success"};
        }       
    } catch (error) {
        throw new Error(error);
    }
}

export async function GetContentByContent({content, email}){
    try {
        connectDB();
        const res = await watchlist.find({content, email});
        return res;
    } catch (error) {
        throw new Error(error);
    }
}