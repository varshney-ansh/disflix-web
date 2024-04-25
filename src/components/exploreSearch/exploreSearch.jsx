"use client"
import styles from './search.module.css'
import { useRouter } from 'next/navigation';

const ExploreSearch = () => {
    const router = useRouter();

    return (
        <input className={styles.input} name="query" onChange={(e)=> router.push(`/explore?phrase=${e.target.value.toLowerCase()}`)} type="text" placeholder="Search" required/>
    )
}

export default ExploreSearch;