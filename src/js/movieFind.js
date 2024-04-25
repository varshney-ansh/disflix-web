'use server'
import Movie from '@/js/MovieModel';
import connectDB from '@/utils/database.js';

export async function MovieSearchByTitleId(titleId){
    connectDB();
    try {
        const movie = Movie.findOne({titleId: titleId})
        if (!movie) {
            return {msg: "SearchFailedByTitle"}
        }
        return movie;
    } catch (error) {
        throw new Error(error)
    }
}

export async function AllMovieSearch(){
    connectDB();
    try {
        const movie = Movie.find({});
        if (!movie) {
            return {msg: "Something went wrong"}
        }
        return movie;
    } catch (error) {
        throw new Error(error)
    }
}

export async function MovieSearhByGenre(query){
    connectDB();
    try{
        const agg = [
            {
              $search: {
                index: "default",
                text: {
                    query: query,
                    path: "genre",
                    "fuzzy": {
                        "maxEdits": 1
                    }
                }
              }
            },
            {
                "$limit": 8
            }
        ];

        const res = await Movie.aggregate(agg);
        return res;
    }
    catch(error){
        console.log(error)
    }
}

export async function MovieSearhByQuery(query){
    connectDB();
    try{
        const agg = [
            {
              $search: {
                index: "default",
                text: {
                    query: query,
                    path: {
                        wildcard: "*"
                    },
                    "fuzzy": {
                        "maxEdits": 1
                    }
                }
              }
            }
        ];

        const res = await Movie.aggregate(agg);
        return res;
    }
    catch(error){
        console.log(error)
    }
}

export async function MovieSearhByYear(query){
    connectDB();
    try{
        const agg = [
            {
              $search: {
                index: "default",
                text: {
                    query: query,
                    path: "releaseYear",
                    "fuzzy": {
                        "maxEdits": 1
                    }
                }
              }
            },
            {
                "$limit": 8
            }
        ];

        const res = await Movie.aggregate(agg);
        return res;
    }
    catch(error){
        console.log(error)
    }
}
