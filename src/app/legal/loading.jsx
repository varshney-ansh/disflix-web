import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import styles from './loading.module.css';
import Link from "next/link";

const LoadingPage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Help</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.LeftPanel}>
                        <div className={styles.head}>
                            <h2>Legal Policies and Notices</h2>
                        </div>
                        <ul>
                            <li><Link href={`/legal/privacy`}>Privacy Policy - Global</Link></li>
                            <li><Link href={`/legal/terms`}>Terms Of Use - Global</Link></li>
                            <li><Link href={`/legal/usage`}>Disflix Usage Rules</Link></li>
                            <li><Link href={`/legal/content`}>Content Policy Guidelines</Link></li>
                            <li><Link href={`/legal/cookies`}>Eu Cookies Notice</Link></li>
                            <li><Link href={`/legal/notices`}>Legal Notices</Link></li>
                        </ul>
                    </div>
                    <div className={styles.RightPanel}>
                        <div className={styles.loading}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 130 130">
                                <path fill="#000" d="M65 127C30.758 127 3 99.241 3 65S30.758 3 65 3V0C29.102 0 0 29.102 0 65s29.102 65 65 65v-3z" />
                                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="97.5" y1="130" x2="97.5">
                                    <stop offset="0" stopColor="#000" /><stop offset=".841" stopColor="#000" stopOpacity="0" />
                                </linearGradient>
                                <path fill="url(#a)" d="M65 127c34.242 0 62-27.759 62-62S99.242 3 65 3V0c35.898 0 65 29.102 65 65s-29.102 65-65 65v-3z" />
                                <circle fill="#000" cx="65" cy="1.5" r="1.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LoadingPage;