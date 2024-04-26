import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import MovieList from '@/components/MovieList/MovieList';
import HomeCarousol from "@/components/homeCarousel/homeCarousel";
import {MovieSearchByTitleId, AllMovieSearch} from '@/js/movieFind.js';
import { AnimeSearhByGenre, AnimeSearhByYear, GetAnimeByTitleId } from '@/js/animeFind';
import styles from './anime.module.css'

export const generateMetadata = async({params}) => {
    return{
        title: `Anime | Disflix Official Site`,
        description: `Watch the best anime from disflix online and stream episodes of Bleach, Naruto, Dragon Ball Super, Attack on Titan, Hunter x Hunter, Fairy Tail, ...`
    }
}

const AnimePage = async() =>{

    const titleid1 = "6722";
    const titleid2 = "6726";
    const titleid3 = "6727";

    const animeSearch1 = await GetAnimeByTitleId(titleid1);
    const animeSearch2 = await GetAnimeByTitleId(titleid2);
    const animeSearch3 = await GetAnimeByTitleId(titleid3);

    const movies = await AllMovieSearch();

    const latestAnime = await AnimeSearhByYear('2024');
    const passedAnime = await AnimeSearhByYear('2023');
    const actionAnime = await AnimeSearhByGenre('action');
    const dramaAnime = await AnimeSearhByGenre('drama');

    return(
        <>
            <Navbar />
            <div className={styles.container} style={{ background: '#00050D' }}>
                <HomeCarousol movie1={animeSearch1} movie2={animeSearch2} movie3={animeSearch3} anime="true" />
                <div style={{marginTop: "50px"}}>
                    <MovieList anime={true} heading="New Releases" movies={latestAnime} />
                    <MovieList anime={true} heading="Released in the Past Year" movies={passedAnime}/>
                    <MovieList anime={true} heading="Action and adventure" movies={actionAnime}/>
                    <MovieList anime={true} heading="Drama Animes" movies={dramaAnime}/>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default AnimePage;