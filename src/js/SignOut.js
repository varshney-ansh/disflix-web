'use client'
import styles from '../components/navbar/right/right.module.css';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const SignOut = () => {
    const router = useRouter();
    return (
        <button onClick={()=>{
            signOut();
            router.push("/");
        }} className={styles.btn}>
            Logout
        </button>
    )
}

export default SignOut;