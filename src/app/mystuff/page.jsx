import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import styles from './mystuff.module.css';
import MovieCard from "@/components/MovieCard/MovieCard";
import { GetContentByContent } from "../../js/watchlist";
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import AnimeCard from "@/components/AnimeCard/AnimeCard";

export const generateMetadata = async({params}) => {
    return{
        title: `My Stuff | Disflix India`
    }
}


const CategoriesPage = async() => {
    let getMovie = false;
    let getAnime = false;
    const session = await getServerSession(authOptions);
    const name = session.user.name;
    const email = session.user.email;
    const content = await GetContentByContent({content: "Movie", email});
    const anime = await GetContentByContent({content: "Anime", email});

    if(content.length >= 1){
        getMovie = true;
    }
    if(anime.length >= 1){
        getAnime = true;
    }

    return (
        <div >
            <Navbar />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.searchTitle}>
                        <span>Watchlist – Movies</span>
                    </div>
                    <div className={styles.resultsDiv}>
                        {
                            getMovie ? (
                                <>
                                    {content.map((searchMovie)=>{
                                        return(
                                            <MovieCard imgUrl={searchMovie.posterUrl} key={searchMovie._id} titleId={searchMovie.titleId} />
                                        )
                                    }) }
                                </>
                            ) : (<>No Reults</>)
                        }
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.searchTitle}>
                        <span>Watchlist – Animes</span>
                    </div>
                    <div className={styles.resultsDiv}>
                        {
                            getAnime ? (
                                <>
                                    {anime.map((animeOne)=>{
                                        return(
                                            <AnimeCard imgUrl={animeOne.posterUrl} key={animeOne._id} titleId={animeOne.titleId} />
                                        )
                                    }) }
                                </>
                            ) : (<>No Reults</>)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CategoriesPage;