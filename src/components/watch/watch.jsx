"use client"

import dynamic from 'next/dynamic';
import styles from './watch.module.css';
import WatchHeader from '@/components/watchHeader/watchHeader';
import Footer from '@/components/footer/footer';
const VideoPlayer = dynamic(() => import('@/components/VideoPlayer/VideoPlayer'), { ssr: false });

const WatchComponent = ({url,img, ads}) =>{
      return(
        <>
            <WatchHeader />
            <div className={styles.container}>
                <div className={styles.videoPlayerContainer}>
                    <VideoPlayer VideoUrl={url} posterImg={img} ads={ads}/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WatchComponent;