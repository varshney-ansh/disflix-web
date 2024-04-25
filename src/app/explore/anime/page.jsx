import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import styles from './explore.module.css';
import MovieCard from "@/components/MovieCard/MovieCard";
import { SubmitHandler } from '@/js/getsearch';
import { AnimeSearchQuery, AnimeSearhByGenre } from '@/js/animeFind';
import ExploreAnime from "@/components/exploreAnime/exploreAnime";

export const generateMetadata = async({params}) => {
    return{
        title: `Search Animes | Disflix India`
    }
}

const ExplorePage = async ({searchParams: {phrase}}) => {
    const movieSearch = await AnimeSearhByGenre("action");
    let isSearch = false;
    let animeSearch = [];
    
    if(phrase === undefined){
        phrase = '';
    }

    if(phrase !== ''){
        animeSearch = await AnimeSearchQuery(phrase);
        isSearch = true;
    }
    
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.searchInput}>
                    <form action={SubmitHandler}>
                        <span className={styles.searchIcon}>
                        </span>
                        <ExploreAnime />
                    </form>
                </div>
                <div className={styles.head}>
                    <span>{isSearch ? `Results for "${phrase}".` : ``}</span>
                </div>
                <div className={styles.content}>
                    <div className={styles.searchTitle}>
                        <span>More videos</span>
                    </div>
                    <div className={styles.resultsDiv}>
                        { isSearch ? (
                            <>
                                {animeSearch?.map((movie)=>{
                                    return(
                                        <MovieCard imgUrl={movie.posterUrl} key={movie._id} titleId={movie.titleId} anime={true}/>
                                    )
                                })}
                            </>
                        ) : (
                            <>
                                {movieSearch.map((searchMovie)=>{
                                    return(
                                        <MovieCard anime={true} imgUrl={searchMovie.posterUrl} key={searchMovie._id} titleId={searchMovie.titleId} />
                                    )
                                }) }
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />

        </>

    )
}

export default ExplorePage;