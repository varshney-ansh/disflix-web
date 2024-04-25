import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    name: String,
    cus_id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    image: String,
    isSubscribed: {
        type: Boolean,
        default: false
    },
    provider: {
        type: String,
        default: 'credentials'
    },
    isAnime: {
        type: Boolean,
        default: false,
    },
    isMovie:{
        type: Boolean,
        default: true,
    }

}, { timestamps: true })


const User = models.user || model('user', userSchema);

export default User;