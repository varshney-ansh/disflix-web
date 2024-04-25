import styles from './FormError.module.css'

const FormError = ({errorMessage}) => {
    return (
        <div className={styles.container}>
            <div className={styles.svgerror}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#c40000">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
                </svg>
            </div>
            <div className={styles.content}>
                <h4>There was a problem</h4>
                <span>{errorMessage}</span>
            </div>
        </div>
    )
}

export default FormError;