import Link from 'next/link';
import Image from 'next/image';
import styles from './epi.module.css';

const EpisodeContainer = ({episode, titleId}) =>{
    return(
        <div className={styles.episodeContainer}>
            <div className={styles.rightDiv}>
                <Link href={`/watch/anime/${titleId}/${episode.episodeNo}`}>
                    <Image alt="episode-poster" src={episode.posterImg} sizes="(max-width: 28em) 182px, (max-width: 55em) 195px, (max-width: 80em) 324px, (max-width: 100em) 408px, (max-width: 150em) 555px, 1920px" loading="eager" aspectratio="auto" fill />
                </Link>
            </div>
            <div className={styles.leftDiv}>
                <div className={styles.episodeName}>
                    <h2>{episode.Name}</h2>
                </div>
                <div className={styles.episodeDetails}>
                    <span>{episode.releaseDate}</span>
                    <span>{episode.duration}</span>
                    <span className={styles.ua}>U/A 13+</span>
                </div>
                <div className={styles.descs}>
                    <p>{episode.desc}</p>
                </div>
            </div>
        </div>
    )
} 

export default EpisodeContainer;