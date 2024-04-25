import styles from './sub.module.css';
import Image from 'next/image';

const LoadingPage = () =>{
    return (
        <>
            <div className={styles.container}>
                <div className={styles.div}>
                    <div className={styles.brand}>
                        <Image src={`/brand/blackLogo.png`} height={35} width={157} style={{aspectRatio: 35/157}} alt="Disflix_Logo" />
                    </div>
                    <div className={styles.p}>
                        <p>We are capturing payment and activating your plan. Please do not close this window. this may take few seconds. Thank you for your patience.</p>
                    </div>
                    <div className={styles.loading}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130">
                            <path fill="#000" d="M65 127C30.758 127 3 99.241 3 65S30.758 3 65 3V0C29.102 0 0 29.102 0 65s29.102 65 65 65v-3z" />
                            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="97.5" y1="130" x2="97.5">
                                <stop offset="0" stopColor="#000" /><stop offset=".841" stopColor="#fff" stopOpacity="0" />
                            </linearGradient>
                            <path fill="url(#a)" d="M65 127c34.242 0 62-27.759 62-62S99.242 3 65 3V0c35.898 0 65 29.102 65 65s-29.102 65-65 65v-3z" />
                            <circle fill="#000" cx="65" cy="1.5" r="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingPage;