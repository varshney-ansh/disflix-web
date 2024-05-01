import Link from 'next/link';
import styles from './footerSm.module.css'
const footerSm = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <Link href='/legal/privacy'>Terms and Privacy Notice</Link>
                <Link href='/help/about'>About</Link>
                <Link href='/help/contact'>Help</Link>
            </div>
            <div className={styles.copyright}>
                <span>Disflix © Disflix INC. All other programs and/or marks are the property of their respective owners. All rights reserved./span>
            </div>
        </div>
    )
}

export default footerSm;
