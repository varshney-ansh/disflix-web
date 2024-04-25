"use client"
import styles from './navbar.module.css'
import Image from 'next/image';
import MiddleLinks from './middle/MiddleLinks';
import RightLinks from './right/RightLinks';
import { useState } from "react";
import NavLink from './middle/navLink/NavLink';
import Link from 'next/link';
import { SessionProvider } from 'next-auth/react'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <SessionProvider>
            <div className={styles.container}>
                <div className={styles.bars} onClick={() => setOpen((prev) => !prev)}>
                    <svg data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"></path>
                    </svg>
                </div>
                <div className={styles.brand_logo}>
                    {
                        open && <div className={styles.mobileMenu}>
                            <Link href={'/'}>
                                <svg data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"></path>
                                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"></path>
                                </svg>
                                Home
                            </Link>
                            <Link href={'/browse/anime'}>
                                <svg data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"></path>
                                </svg>
                                Anime
                            </Link>
                            <Link href={'/browse/movies'}>
                            <svg data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M19.5 6h-15v9h15V6Z"></path>
                                <path clipRule="evenodd" fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 0 0 6 21h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z"></path>
                            </svg>
                                Movies</Link>
                            <Link href={'/subscription'}>
                            <svg fill="#fff" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 220 220" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M220,98.865c0-12.728-10.355-23.083-23.083-23.083s-23.083,10.355-23.083,23.083c0,5.79,2.148,11.084,5.681,15.14 l-23.862,21.89L125.22,73.002l17.787-20.892l-32.882-38.623L77.244,52.111l16.995,19.962l-30.216,63.464l-23.527-21.544 c3.528-4.055,5.671-9.344,5.671-15.128c0-12.728-10.355-23.083-23.083-23.083C10.355,75.782,0,86.137,0,98.865 c0,11.794,8.895,21.545,20.328,22.913l7.073,84.735H192.6l7.073-84.735C211.105,120.41,220,110.659,220,98.865z"></path> </g></svg>
                             Try Premium
                            </Link>
                            <Link href={'/mystuff'}>
                            <svg data-slot="icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"></path>
                            </svg>
                                My Stuff
                            </Link>
                        </div>
                    }
                    <Link href='/'><Image src='/brand/whiteLogo.png' className={styles.brand_logo_img} alt='disflix-logo' height={24} width={107} style={{objectFit: 'contain'}} aspectratio="auto" /></Link>
                </div>
                <div className={styles.middle}>
                    <MiddleLinks />
                </div>
                <div className={styles.right}>
                    <RightLinks />
                </div>
            </div>
        </SessionProvider>
    )
}
export default Navbar;