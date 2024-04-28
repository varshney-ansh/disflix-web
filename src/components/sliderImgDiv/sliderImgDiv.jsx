import styles from './slider.module.css';
import Image from 'next/image';
import Link from 'next/link';

const SliderImgDiv = ({movie, anime}) => {
    return (
        <div className={styles.sliderImageDiv}>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image className={styles.imgDetail} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={`${movie.logo}`} fill style={{objectFit: 'contain'}} loading="lazy" alt={`${movie.title}-logo`} aspectratio="auto"/>
                </div>
                <div className={styles.ua}>
                    <span>{movie.ua}</span>
                    <span>{movie.genre[0]}</span>
                    <span>{movie.genre[1]}</span>
                    <span>{movie.genre[2]}</span>
                </div>
                <div className={styles.icons}>
                    <div className={styles.playContainer}>
                        <Link href={anime ? `/watch/anime/${movie.titleId}/1` : `/watch/movie/${movie.titleId}`} className={styles.playbtnm}>
                            <span className={styles.playBtn}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.643 3.069 C 6.546 3.103,6.392 3.206,6.300 3.298 C 5.973 3.624,6.000 2.855,6.000 12.000 C 6.000 21.144,5.974 20.376,6.299 20.701 C 6.568 20.970,6.964 21.065,7.308 20.944 C 7.580 20.848,20.606 12.815,20.748 12.656 C 21.074 12.289,21.074 11.710,20.748 11.345 C 20.607 11.188,7.572 3.150,7.305 3.055 C 7.107 2.985,6.867 2.990,6.643 3.069 " fill="currentColor" stroke="none" fillRule="evenodd"></path></svg>
                            </span>
                            <i>Play</i>
                        </Link>
                    </div>
                    <div className={styles.other}>
                        <div className={styles.watchlistCon}>
                            <button aria-label="Add to Watchlist">
                                <div>
                                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><title>Add</title><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.664 2.063 C 11.436 2.146,11.257 2.297,11.131 2.511 L 11.020 2.700 11.009 6.850 L 10.999 11.000 6.924 11.000 C 2.491 11.000,2.677 10.991,2.374 11.222 C 2.301 11.277,2.192 11.408,2.131 11.511 C 2.036 11.672,2.020 11.744,2.020 12.000 C 2.020 12.256,2.036 12.328,2.131 12.489 C 2.192 12.592,2.301 12.723,2.374 12.778 C 2.677 13.009,2.491 13.000,6.925 13.000 L 11.000 13.000 11.000 17.070 C 11.000 19.750,11.015 21.191,11.042 21.289 C 11.103 21.509,11.315 21.762,11.531 21.874 C 11.932 22.080,12.390 22.012,12.700 21.702 C 13.018 21.385,13.000 21.656,13.000 17.073 L 13.000 13.000 17.073 13.000 C 21.654 13.000,21.385 13.017,21.701 12.701 C 22.092 12.310,22.092 11.690,21.701 11.299 C 21.385 10.983,21.654 11.000,17.073 11.000 L 13.000 11.000 13.000 6.927 C 13.000 2.346,13.017 2.615,12.701 2.299 C 12.429 2.027,12.018 1.933,11.664 2.063 " fill="currentColor" stroke="none" fillRule="evenodd"></path></svg></svg>
                                </div>
                            </button>
                        </div>
                        <div className={styles.detCon}>
                            <Link href={anime ? `/series/${movie.titleId}` : `/detail/${movie.titleId}`} className={styles.detConn}>
                                <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Image className={styles.sliderImage} src={`${movie.bannerImg}`} fill quality={100} sizes="(max-width: 28em) 400px, (max-width: 55em) 815px, (max-width: 80em) 1300px, (max-width: 100em) 1650px, (max-width: 150em) 2260px, 2260px" alt={`${movie.title}-bg`} />
            <div className={styles.bgDark}></div>
        </div>
    )
}


export default SliderImgDiv;