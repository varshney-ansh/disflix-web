import Image from 'next/image';
import styles from './anime.module.css'
import Link from 'next/link';


const AnimeCard = ({imgUrl, titleId}) => {
    return (
        <div className={styles.container}>
            <div className={styles.poster}>
                <Link href={`/series/${titleId}`}>
                    <Image src={imgUrl} alt="poster" width={260} height={154} priority aspectratio="auto" style={{objectFit: 'contain'}} sizes="(max-width: 28em) 260px, (max-width: 55em) 260px, (max-width: 80em) 390px, (max-width: 100em) 390px, (max-width: 150em) 540px, 540px" />
                </Link>
            </div>
            <div className={styles.imgDiv}>
                <Link href={`/series/${titleId}`}>
                    <Image src={imgUrl} alt="poster" width={260} height={154} priority aspectratio="auto" style={{objectFit: 'contain'}} sizes="(max-width: 28em) 260px, (max-width: 55em) 260px, (max-width: 80em) 390px, (max-width: 100em) 390px, (max-width: 150em) 540px, 540px" />
                </Link>
            </div>

        </div>
    )
}

export default AnimeCard;