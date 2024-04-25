'use client'

import styles from './series.module.css';
import EpisodeComponent from "@/components/episodeComponent/episodeComponent";
import { useState } from 'react';
import AnimeList from '../AnimeList/AnimeList';

const TabMenu = ({movies, episodes, titleId}) => {

    const [isTab, setIsTab] = useState(false);

    return (
        <>
            <div className={styles.tabMenu}>
                <div className={styles.tabButtons}>
                    <button onClick={() => setIsTab(false) } className={ isTab ? styles.nothing : styles.active }>Episodes</button>
                    <button onClick={() => setIsTab(true) } className={ isTab ? styles.active : styles.nothing }>Related</button>
                </div>
            </div>
            <div className={ isTab ? `${styles.episodesList} ${styles.active}` : styles.episodesList }>
                { 
                    isTab ? (<AnimeList heading="Customers also watched" movies={movies} />) : (<EpisodeComponent titleId={titleId} episodes={episodes}/>)
                }
            </div>
        </>
    )
}

export default TabMenu;