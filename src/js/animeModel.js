import { Schema, model, models } from 'mongoose';

const animeSchema = new Schema({
    title: String,
    desc: String,
    genre: Array,
    bgImg: String,
    ua: String,
    rating: String,
    releaseYear: String,
    season: String,
    posterImg: String,
    episodes: Array,
    titleId: String
})


const Anime = models.anime || model('anime', animeSchema);

export default Anime;