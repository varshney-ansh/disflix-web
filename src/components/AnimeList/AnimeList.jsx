"use client"
import { useRef, useState } from "react";
import AnimeCard from "@/components/AnimeCard/AnimeCard";
import styles from './AnimeList.module.css'

const AnimeList = ({heading, movies}) =>{
    const ListRef = useRef();
    const [showControls, setShowControls] = useState(false);
    const moveLeft = () =>{
        ListRef.current.scrollLeft = ListRef.current.scrollLeft - 200;
    }
    const moveRight = () =>{
        ListRef.current.scrollLeft = ListRef.current.scrollLeft + 200;
    }
    
    return(
        <div className={styles.container}>
            <h2>{heading}</h2>
            <div className={`${styles.cardContainer} `} onMouseEnter={()=> setShowControls(true)} onMouseLeave={()=> setShowControls(false)}>
                <span className={`material-symbols-outlined ${styles.Arrow} ${styles.left} ${!showControls ? styles.none : styles.active}`} onClick={()=>moveLeft()}>arrow_back_ios</span>
                <div className={styles.MovieList} ref={ListRef}>
                    {movies.map((movie)=>{
                        return(
                            <AnimeCard imgUrl={movie.posterUrl} key={movie._id} titleId={movie.titleId} />
                        )
                    })}
                </div>
                <span className={`material-symbols-outlined ${styles.Arrow} ${styles.right} ${!showControls ? styles.none : styles.active}`} onClick={()=>moveRight()}>arrow_forward_ios</span>
            </div>
        </div>
    )
}

export default AnimeList;