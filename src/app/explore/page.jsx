import { MovieSearhByQuery, MovieSearhByGenre } from '@/js/movieFind';
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import styles from './explore.module.css';
import MovieCard from "@/components/MovieCard/MovieCard";
import ExploreSearch from "@/components/exploreSearch/exploreSearch";
import { SubmitHandler } from '@/js/getsearch';

export const generateMetadata = async({params}) => {
    return{
        title: `Search Movies | Disflix India`
    }
}

const ExplorePage = async ({searchParams: {phrase}}) => {
    const movieSearch = await MovieSearhByGenre("action");
    let isSearch = false;
    let search = [];
    
    if(phrase === undefined){
        phrase = '';
    }

    if(phrase !== ''){
        search = await MovieSearhByQuery(phrase);
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
                        <ExploreSearch />
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
                                {search?.map((movie)=>{
                                    return(
                                        <MovieCard imgUrl={movie.posterUrl} key={movie._id} titleId={movie.titleId} />
                                    )
                                })}
                            </>
                        ) : (
                            <>
                                {movieSearch.map((searchMovie)=>{
                                    return(
                                        <MovieCard imgUrl={searchMovie.posterUrl} key={searchMovie._id} titleId={searchMovie.titleId} />
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