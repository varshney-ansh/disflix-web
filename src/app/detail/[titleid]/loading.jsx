import styles from './loading.module.css'

const LoadingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loading}>
                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130">
                    <path fill="#FFF" d="M65 127C30.758 127 3 99.241 3 65S30.758 3 65 3V0C29.102 0 0 29.102 0 65s29.102 65 65 65v-3z" />
                    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="97.5" y1="130" x2="97.5">
                        <stop offset="0" stopColor="#fff" /><stop offset=".841" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                    <path fill="url(#a)" d="M65 127c34.242 0 62-27.759 62-62S99.242 3 65 3V0c35.898 0 65 29.102 65 65s-29.102 65-65 65v-3z" />
                    <circle fill="#FFF" cx="65" cy="1.5" r="1.5" />
                </svg>
            </div>
        </div>
    )
}
export default LoadingPage;