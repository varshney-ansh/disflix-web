"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './NavLink.module.css'

const NavLink = ({item}) =>{

    const pathName = usePathname();

    return(
            <Link href={item.path} key={item.title} className={`${styles.container} ${pathName === item.path && styles.active}`}>{item.title}</Link>
    )
}

export default NavLink;