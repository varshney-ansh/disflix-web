import { Schema, model, models } from 'mongoose';

const watchlistSchema = new Schema({
    name: String,
    email: String,
    content: String,
    titleId: String,
    posterUrl: String,
})


const watchlist = models.watchlist || model('watchlist', watchlistSchema);

export default watchlist;