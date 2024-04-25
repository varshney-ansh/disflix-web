import { Schema, model, models } from 'mongoose';

const movieSchema = new Schema({
    videoUrl: {
        type: String,
        required: true
    },
    bannerImg: {
        type: String,
        required: true
    },
    bgImg:{
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    genre: Array,
    releaseYear: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    ua: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    premiumRequired: {
        type: Boolean,
    },
    posterUrl: {
        type: String,
        required: true
    },
    titleId: {
        type: String,
        required: true
    },
})

const Movie = models.movie || model('movie', movieSchema);

export default Movie;