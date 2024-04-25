import { Schema, model, models } from 'mongoose';

const subscriptionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subscriptionId: {
        type: String,
        required: true,
    },
    plan_details: {
        name: String,
        isAnime: Boolean,
        isMovie: Boolean,
    },
    startBillingDate:{
        type: String,
        required: true,
    },
    nextBillingDate: {
        type: String,
        required: true,
    },
    product: {
        amount: Number,
        product_id: String,        
    }


}, { timestamps: true })


const subscription = models.subscription || model('subscription', subscriptionSchema);

export default subscription;