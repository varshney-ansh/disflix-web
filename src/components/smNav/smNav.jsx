import styles from './smNav.module.css';
import Link from 'next/link';
import Image from 'next/image';

const SmNavBar = () =>{
    return(
        <div className={styles.nav}>
            <div className={styles.brandLogo}>
                <Image src={`/brand/blackLogo.png`} height={35} width={157} style={{aspectRatio: 35/157}} alt="Disflix_Logo" />
            </div>
            <div className={styles.btn}>
                <Link href={`/ap/logout`}>Sign Out</Link>
            </div>
        </div>
    )
}

export default SmNavBar;