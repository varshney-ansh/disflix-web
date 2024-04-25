'use client'
import NavLink from "../middle/navLink/NavLink";
import Image from "next/image";
import styles from './right.module.css'
import Link from "next/link";
import SignOut from "@/js/SignOut";
import { useSession } from 'next-auth/react';
import { usePathname } from "next/navigation";

const RightLinks = () => {

    const { data: session } = useSession();
    let anime;
    const pathName = usePathname();
    if(pathName == '/browse/anime'){
        anime = true;
    }else{
        anime = false;
    }
    return (

        <div className={styles.rightlink}>
            {
                session ? (
                    <div className={styles.container}>
                        <Link href={anime ? `/explore/anime/` : `/explore`} aria-label="Search">
                            <svg data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"></path>
                            </svg>
                            <span style={{ display: 'none' }}>Explore</span>
                        </Link>
                        <Link href='/settings/account'>
                            <Image src='/icons/adult.png' className={styles.profileImg} height={32} width={32} alt="profile-png" />
                        </Link>
                    </div>
                ) : (
                    <Link href="/ap/signin" style={{width: '102px'}} className={styles.btn}>Try for free</Link>
                )
            }
        </div>
    )
}

export default RightLinks;