import Link from 'next/link';
import styles from './footer.module.css'
import Image from 'next/image';
const Footer = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.disflixLogo}>
                <Image src={'/brand/whiteLogo.png'} height={24} width={107.79} alt='disflix_logo'/>
            </div>
            <div className={styles.contents}>
                <div className={styles.links}>
                    <Link className={styles.linkName} href={'/legal/privacy'}>Terms and Privacy Notice</Link>
                    <Link className={styles.linkName} href={'/help/about'}>About</Link>
                    <Link className={styles.linkName} href={'/help/contact'}>Help</Link>
                </div>
                <div className={styles.copyright}>
                    <span>© 2024-2025, Disflix, Inc. or its affiliates</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;