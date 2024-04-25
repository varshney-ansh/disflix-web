"use client"

import { useState } from "react";
import NavLink from "./navLink/NavLink";
import styles from './middle.module.css'

const middleLinks = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Anime",
        path: "/browse/anime"
    },
    {
        title: "Movies",
        path: "/browse/movies"
    },
    {
        title: "Try Premium",
        path: "/subscription"
    },
    {
        title: "My Stuff",
        path: "/mystuff"
    },
]

const MiddleLinks = () =>{
    
    const [open,setOpen] = useState(false);

    return(
        <div className={styles.container}>
            {middleLinks.map((middleLink=>(
                <NavLink item={middleLink} key={middleLink.title}/>
            )))}
        </div>
        
    )
}
export default MiddleLinks;