'use client'
import { RemoveMovieFromList } from '../../js/watchlist'
import WatchListBtn from '../watchlistBtn/watchlistBtn';
import styles from './swatch.module.css'
import { useState } from 'react';

const SWatchBtn = ({email, movie, content, name}) => {

    const [success, setSuccess] = useState(false);

    async function WatchListButton(){
        const res = await RemoveMovieFromList({email, titleId: movie.titleId, content});
        if(res?.msg){
            setSuccess(true);
        }
    }

    return (
        success ? (
            <WatchListBtn movie={movie} name={name} email={email} content={content} />
        ) : (
            <div className={styles.watchList} onClick={WatchListButton}>
                <div className={styles.iconn}>
                    <span className="material-symbols-outlined">
                        done
                    </span>
                </div>
            </div>
        )

    )
}

export default SWatchBtn;