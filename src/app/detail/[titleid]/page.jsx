import { MovieSearchByTitleId, MovieSearhByGenre} from '@/js/movieFind.js';
import { notFound } from 'next/navigation';
import DetailComponent from '../../../components/detail/detail';

export const generateMetadata = async({params}) => {
    const {titleid} = params;
    // fetching from api 
    const movie = await MovieSearchByTitleId(titleid);
    if(movie == null){
        return null;
    }

    if(movie !== null){
        return{
            title: `Watch ${movie.title} | Disflix India`,
            description: movie.desc
        }
    }
}

const WatchPageSingle = async({params}) => {

    const {titleid} = params;
    const movieSearch = await MovieSearchByTitleId(titleid);

    if(movieSearch === null){
        notFound();
    }

    if(movieSearch !== null){
        const movies = await MovieSearhByGenre(`${movieSearch.genre}`);
        return (
            <DetailComponent movie={movieSearch} movies={movies} />            
        )
    }
    
}

export default WatchPageSingle;