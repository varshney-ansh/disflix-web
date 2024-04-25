'use server'
import connectDB from '@/utils/database.js';
import subscription from '@/utils/subModel';

export async function SaveSubscriptionDetail(data){
    connectDB();
    try {
        const newSub = new subscription(data);
        await newSub.save();
        if(newSub){
            return {msg: "successSave"}
        }
    } catch (error) {
        throw new Error(error)
    }
}

export async function UpdateSubscriptionDetail({data, id}){
    connectDB();
    try {
        const update = await subscription.findByIdAndUpdate({_id: id}, data, { useFindAndModify: false });
        if(update){
            return {msg: "successUpdate"}
        }
    } catch (error) {
        throw new Error(error)
    }
}

export async function SerachSubscriptionByEmail(email){
    connectDB();
    try {
        const emailSearch = await subscription.findOne({email: email})
        if(emailSearch){
            return {msg: "success", id: emailSearch._id};
        }
    } catch (error) {
        throw new Error(error);
    }
}

export async function getSubscriptionDetail(email){
    connectDB();
    try {
        const detail = await subscription.findOne({email: email})
        return detail;
    } catch (error) {
        throw new Error(error)
    }
}

export async function deleteSubscription(subId){
    connectDB();
    try {
        const deleteSub = await subscription.deleteOne({subscriptionId: subId})
        return deleteSub;
    } catch (error) {
        throw new Error(error)
    }
}