'use server'
import Anime from '@/js/animeModel';
import connectDB from '@/utils/database.js';

export async function GetAnimeByTitleId(titleId){
    try {
        const anime = Anime.findOne({titleId: titleId})
        if (!anime) {
            return {msg: "SearchFailedByTitle"}
        }
        return anime;
    } catch (error) {
        throw new Error(error)
    }
}

export async function AnimeSearchQuery(query){
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

        const res = await Anime.aggregate(agg);
        return res;
    }
    catch(error){
        console.log(error)
    }
}

export async function AnimeSearhByGenre(query){
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

        const res = await Anime.aggregate(agg);
        return res;
    }
    catch(error){
        console.log(error)
    }
}

export async function AnimeSearhByYear(query){
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

        const res = await Anime.aggregate(agg);
        return res;
    }
    catch(error){
        console.log(error)
    }
}