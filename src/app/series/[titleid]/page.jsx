import Navbar from "@/components/navbar/Navbar";
import styles from './series.module.css';
import Image from 'next/image';
import Link from 'next/link';
import TabMenu from '@/components/tabMenu/tabMenu';
import { AnimeSearhByGenre, GetAnimeByTitleId } from '@/js/animeFind';
import { notFound } from 'next/navigation';
import Footer from "@/components/footer/footer";
import SWatchBtn from '@/components/sWatchBtn/sWatchBtn';
import WatchListBtn from "@/components/watchlistBtn/watchlistBtn";
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { GetStatusWatch } from "@/js/watchlist";


export const generateMetadata = async ({ params }) => {
    const { titleid } = params;
    // fetching from api 
    const anime = await GetAnimeByTitleId(titleid);
    if (anime == null) {
        return null;
    }

    if (anime !== null) {
        return {
            title: `Watch ${anime.title} Anime | Disflix India`,
            description: anime.desc
        }
    }
}

const SeriesPage = async ({ params }) => {
    const { titleid } = params;
    const anime = await GetAnimeByTitleId(titleid);

    if (anime === null) {
        notFound();
    }

    if (anime !== null) {
        const movies = await AnimeSearhByGenre(anime.genre);
        const session = await getServerSession(authOptions);
        let name, email;
        let watchShow;
        let status = false;

        if (session == null) {
            watchShow = false;
        }

        if (session != null) {
            name = session.user.name;
            email = session.user.email;
            watchShow = true;
        }

        const alreadyAdded = await GetStatusWatch({ titleId: anime.titleId, email, content: "Anime" });
        if (alreadyAdded.length > 0) {
            status = true;
        }
        return (
            <>
                <Navbar />
                <div className={styles.container}>
                    <div className={styles.contents}>
                        <div className={styles.contentImg}>
                            <div className={styles.backgroundImage}>
                                <Image src={anime.bgImg} alt="disflix-movie-bg" loading="eager" fill style={{ aspectRatio: 16 / 9 }} sizes={`(max-width: 28em) 450px, (max-width: 55em) 900px, (max-width: 80em) 1300px, (max-width: 100em) 1600px, (max-width: 150em) 2400px, 1920px`} />
                                <div className={styles.darkbottom}></div>
                            </div>
                            <div className={styles.bgDark}></div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.heading}>
                                <span>{anime.title}</span>
                            </div>
                            <div className={styles.para}>
                                <span>Season {anime.season}</span> <br /> <br />
                                <span>{anime.desc}</span>
                            </div>
                            <div className={styles.info}>
                                <span>{anime.releaseYear}</span>
                                <div className={styles.button}>
                                    <span>X-RAY</span>
                                    <span>{anime.ua}</span>
                                </div>
                            </div>
                            <div className={styles.tags}>
                                <span>{anime.genre[0]}</span>
                                <div className={styles.dot}>.</div>
                                <span>{anime.genre[1]}</span>
                                <div className={styles.dot}>.</div>
                                <span>{anime.genre[2]}</span>
                            </div>
                            <div className={styles.included}>
                                <div className={styles.checkMark}>
                                    <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.120 2.039 C 8.641 2.287,6.414 3.362,4.761 5.107 C 1.806 8.228,1.158 12.819,3.137 16.623 C 3.620 17.552,4.164 18.288,4.938 19.061 C 5.930 20.051,7.038 20.789,8.272 21.278 C 11.634 22.610,15.313 22.080,18.200 19.845 C 18.637 19.507,19.507 18.637,19.845 18.200 C 21.256 16.378,22.000 14.236,22.000 12.000 C 22.000 7.432,18.842 3.387,14.430 2.303 C 13.446 2.062,12.028 1.948,11.120 2.039 M17.092 8.191 C 17.410 8.341,17.660 8.592,17.816 8.920 C 17.926 9.151,17.940 9.221,17.940 9.541 C 17.940 9.869,17.928 9.927,17.805 10.181 C 17.679 10.443,17.480 10.651,14.545 13.588 C 11.578 16.558,11.406 16.723,11.140 16.848 C 10.888 16.967,10.824 16.980,10.500 16.980 C 10.176 16.980,10.112 16.967,9.860 16.848 C 9.604 16.726,9.466 16.600,8.193 15.328 C 6.915 14.051,6.794 13.918,6.672 13.660 C 6.554 13.408,6.540 13.344,6.540 13.020 C 6.540 12.700,6.554 12.631,6.664 12.400 C 6.821 12.070,7.070 11.821,7.400 11.664 C 7.631 11.554,7.700 11.540,8.020 11.540 C 8.343 11.540,8.408 11.554,8.654 11.670 C 8.891 11.782,9.036 11.907,9.714 12.578 L 10.500 13.356 13.020 10.843 C 15.629 8.240,15.687 8.188,16.110 8.081 C 16.380 8.013,16.817 8.061,17.092 8.191 " fill="currentColor" stroke="none" fillRule="evenodd">
                                        </path>
                                    </svg>
                                </div>
                                <div className={styles.entitled}>
                                    <span>Included with Elite</span>
                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <div className={styles.btnContainer}>
                                    <div>
                                        <Link href={`/watch/anime/${titleid}/1`} className={styles.play}>
                                            <div className={styles.icon}>
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.643 3.069 C 6.546 3.103,6.392 3.206,6.300 3.298 C 5.973 3.624,6.000 2.855,6.000 12.000 C 6.000 21.144,5.974 20.376,6.299 20.701 C 6.568 20.970,6.964 21.065,7.308 20.944 C 7.580 20.848,20.606 12.815,20.748 12.656 C 21.074 12.289,21.074 11.710,20.748 11.345 C 20.607 11.188,7.572 3.150,7.305 3.055 C 7.107 2.985,6.867 2.990,6.643 3.069 " fill="currentColor" stroke="none" fillRule="evenodd"></path></svg>
                                            </div>
                                            <span>Play</span>
                                        </Link>
                                    </div>
                                </div>
                                {
                                    watchShow ? (
                                        <div className={styles.smBtnContainer}>
                                            {status ? (
                                                <SWatchBtn movie={anime} name={name} email={email} content="Anime" />
                                            ) : (<WatchListBtn movie={anime} name={name} email={email} content="Anime" />)}
                                            <div className={styles.like}>
                                                <div className={styles.iconn}>
                                                    <svg className={styles.iconsa} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.423 2.041 C 16.823 2.136,16.237 2.369,15.725 2.716 C 14.735 3.389,14.086 4.536,14.013 5.743 L 13.989 6.145 11.344 7.588 C 9.182 8.768,8.688 9.022,8.636 8.985 C 8.600 8.960,8.483 8.873,8.376 8.791 C 8.098 8.579,7.556 8.306,7.175 8.186 C 5.790 7.752,4.219 8.136,3.197 9.157 C 2.770 9.585,2.518 9.962,2.302 10.500 C 2.075 11.062,2.020 11.355,2.020 12.000 C 2.020 12.645,2.075 12.938,2.302 13.500 C 2.775 14.677,3.750 15.535,4.995 15.871 C 5.330 15.962,5.460 15.975,6.000 15.977 C 6.564 15.978,6.656 15.968,7.020 15.864 C 7.598 15.699,8.163 15.407,8.551 15.074 L 8.682 14.961 11.335 16.288 L 13.989 17.614 14.012 18.137 C 14.051 19.039,14.337 19.818,14.876 20.488 C 16.372 22.351,19.110 22.511,20.806 20.836 C 21.761 19.893,22.182 18.525,21.917 17.227 C 21.755 16.431,21.399 15.760,20.841 15.197 C 20.485 14.837,20.163 14.613,19.663 14.376 C 19.100 14.110,18.697 14.024,18.000 14.024 C 17.270 14.024,16.885 14.111,16.255 14.419 C 15.639 14.720,15.229 15.055,14.771 15.634 L 14.696 15.728 12.246 14.503 C 10.230 13.495,9.799 13.265,9.817 13.209 C 9.940 12.809,9.976 12.533,9.977 12.000 C 9.978 11.520,9.962 11.359,9.886 11.067 C 9.835 10.872,9.799 10.709,9.807 10.703 C 9.814 10.697,10.894 10.106,12.208 9.391 L 14.595 8.090 14.731 8.295 C 15.165 8.948,15.952 9.535,16.746 9.797 C 18.744 10.456,20.945 9.428,21.712 7.477 C 21.928 6.927,21.980 6.637,21.979 5.980 C 21.979 5.439,21.968 5.341,21.864 4.980 C 21.651 4.243,21.340 3.700,20.841 3.197 C 20.113 2.462,19.179 2.055,18.140 2.020 C 17.876 2.011,17.554 2.021,17.423 2.041 M18.383 4.043 C 19.185 4.190,19.839 4.872,19.967 5.695 C 20.153 6.894,19.209 8.000,18.000 8.000 C 17.032 8.000,16.183 7.268,16.033 6.305 C 15.933 5.663,16.132 5.061,16.596 4.596 C 17.085 4.108,17.698 3.918,18.383 4.043 M6.383 10.043 C 7.185 10.190,7.839 10.872,7.967 11.695 C 8.153 12.894,7.209 14.000,6.000 14.000 C 5.032 14.000,4.183 13.268,4.033 12.305 C 3.933 11.663,4.132 11.061,4.596 10.596 C 5.085 10.108,5.698 9.918,6.383 10.043 M18.383 16.043 C 19.185 16.190,19.839 16.872,19.967 17.695 C 20.153 18.894,19.209 20.000,18.000 20.000 C 17.032 20.000,16.183 19.268,16.033 18.305 C 15.933 17.663,16.132 17.061,16.596 16.596 C 17.085 16.108,17.698 15.918,18.383 16.043 " fill="currentColor" stroke="none" fillRule="evenodd"></path></svg>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <TabMenu movies={movies} episodes={anime.episodes} titleId={titleid} />
                </div>
                <Footer />
            </>
        )
    }
}

export default SeriesPage;