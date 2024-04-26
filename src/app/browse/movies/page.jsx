import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/footer';
import MovieList from '@/components/MovieList/MovieList';
import HomeCarousol from "@/components/homeCarousel/homeCarousel";
import {MovieSearchByTitleId, AllMovieSearch} from '@/js/movieFind';
import { MovieSearhByGenre, MovieSearhByYear } from '@/js/movieFind';

export const generateMetadata = async({params}) => {
    return{
        title: `Movies | Disflix Official Site`,
        description: `Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience. Stream now on disflix.in`
    }
}

const MoviesPage = async() => {
    const titleid1 = "8163838";
    const titleid2 = "8163836";
    const titleid3 = "8163849";

    const movieSearch1 = await MovieSearchByTitleId(titleid1);
    const movieSearch2 = await MovieSearchByTitleId(titleid2);
    const movieSearch3 = await MovieSearchByTitleId(titleid3);

    const movies = await AllMovieSearch();

    const actionMovies = await MovieSearhByGenre('suspense');
    const comdyMovies = await MovieSearhByGenre('thriller, action');
    const horrorMovies = await MovieSearhByGenre('horror');
    const sciMovies = await MovieSearhByYear('2023');

    const releaseMovies = await MovieSearhByYear('2024');

    return (
        <>
            <Navbar />
            <div className={styles.container} style={{ background: '#00050D' }}>
                <HomeCarousol movie1={movieSearch1} movie2={movieSearch2} movie3={movieSearch3}/>
                <div style={{marginTop: "50px"}}>
                    <MovieList heading="New Releases" movies={releaseMovies} />
                    <MovieList heading="Released in Past Year" movies={sciMovies}/>
                    <MovieList heading="Suspenseful Movies" movies={actionMovies} />
                    <MovieList heading="Action Thriller" movies={comdyMovies}/>
                    <MovieList heading="Horror Movies" movies={horrorMovies}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MoviesPage;