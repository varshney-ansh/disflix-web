"use client"
import styles from './sub.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import SmNavBar from '@/components/smNav/smNav';
import { useRouter } from 'next/navigation';
import { encryption } from '@/utils/cryptoPay';
import Footer from '@/components/footer/footer';

const SubscriptionPage = () => {
    const router = useRouter()
    const elite = useRef();
    const fan = useRef();
    const megaFan = useRef();
    const premium = useRef();

    const [price, setPrice] = useState("99");
    const [con, setCon] = useState("Movies (No ads) + Anime (With ads)");
    const [vid, setVid] = useState("Good");
    const [res, setRes] = useState("480p (SD)");
    const [str, setStr] = useState("1");
    const [plan, setPlan] = useState("Elite");
    const [process, setProcess] = useState(false);

    function eliteFunc(){
        elite.current.classList.add(`${styles.active}`);
        fan.current.classList.remove(`${styles.active}`)
        megaFan.current.classList.remove(`${styles.active}`)
        premium.current.classList.remove(`${styles.active}`)
        setPrice("99");
        setCon("Movies (No ads) + Anime (With ads)");
        setVid("Good");
        setRes("480p (SD)");
        setStr("1");
        setPlan("Elite");
    }

    function fanFunc(){
        elite.current.classList.remove(`${styles.active}`);
        fan.current.classList.add(`${styles.active}`)
        megaFan.current.classList.remove(`${styles.active}`)
        premium.current.classList.remove(`${styles.active}`)
        setPrice("119");
        setCon("Movies + Anime (No ads)");
        setVid("Good");
        setRes("480p (SD)");
        setStr("1");
        setPlan("Fan");
    }

    function megaFunc(){
        elite.current.classList.remove(`${styles.active}`);
        fan.current.classList.remove(`${styles.active}`)
        megaFan.current.classList.add(`${styles.active}`)
        premium.current.classList.remove(`${styles.active}`)
        setPrice("199");
        setCon("Movies (No ads) + Anime (With ads)")
        setVid("Great");
        setRes("720p (HD)");
        setStr("4");
        setPlan("Mega Fan");
    }

    function premiumFunc(){
        elite.current.classList.remove(`${styles.active}`);
        fan.current.classList.remove(`${styles.active}`);
        megaFan.current.classList.remove(`${styles.active}`);
        premium.current.classList.add(`${styles.active}`);
        setPrice("249");
        setCon("Movies + Anime (No ads)");
        setVid("Great");
        setRes("720p (HD)");
        setStr("4");
        setPlan("Premium");
    }

    const submitButton = async(event) =>{
        setProcess(true);
        const encryptPrice = await encryption(price);
        const encryptPlan = await encryption(plan);
        router.push(`/subscription/payment?s=${encryptPlan}&a=${encryptPrice}`);
    }

    return (
        <div className={styles.container}>
            <SmNavBar />
            <div className={styles.content}>
                <h1 className={styles.heading}>Choose the plan that’s right for you</h1>
                <div className={styles.buttons}>
                    {/* button start */}
                    <div className={`${styles.button} ${styles.active}`}  ref={elite} onClick={eliteFunc}>
                        <h2>Elite</h2>
                        <sub>480p</sub>
                        <div className={styles.svg}>
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" data-uia="success-svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.0183 21.0833C17.7761 
                                21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 
                                0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 
                                14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 
                                14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="#fff"></path>
                            </svg>
                        </div>
                    </div>
                    {/* button end  */}
                    {/* button start */}
                    <div className={styles.button} ref={fan} onClick={fanFunc}>
                        <h2>Fan</h2>
                        <sub>480p</sub>
                        <div className={styles.svg}>
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" data-uia="success-svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.0183 21.0833C17.7761 
                                21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 
                                0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 
                                14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 
                                14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="#fff"></path>
                            </svg>
                        </div>
                    </div>
                    {/* button end  */}
                    {/* button start */}
                    <div className={styles.button} ref={megaFan} onClick={megaFunc}>
                        <h2>Mega Fan</h2>
                        <sub>720p</sub>
                        <div className={styles.svg}>
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" data-uia="success-svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.0183 21.0833C17.7761 
                                21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 
                                0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 
                                14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 
                                14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="#fff"></path>
                            </svg>
                        </div>
                    </div>
                    {/* button end  */}
                    {/* button start */}
                    <div className={styles.button} ref={premium} onClick={premiumFunc}>
                        <h2>Premium</h2>
                        <sub>720p</sub>
                        <div className={styles.svg}>
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" data-uia="success-svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.0183 21.0833C17.7761 
                                21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 
                                0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 
                                14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 
                                14.3982L11.0705 15.0463L11.7407 14.3982Z" fill="#fff"></path>
                            </svg>
                        </div>
                    </div>
                    {/* button end  */}
                </div>
                <div className={styles.otherContent}>
                    <div className={styles.label}>
                        <h2>Monthly Price</h2>
                        <span>₹{price}</span>
                    </div>
                    <div className={styles.label}>
                        <h2>Content</h2>
                        <span>{con}</span>
                    </div>
                    <div className={styles.label}>
                        <h2>Video and sound quality</h2>
                        <span>{vid}</span>
                    </div>
                    <div className={styles.label}>
                        <h2>Resolution</h2>
                        <span>{res}</span>
                    </div>
                    <div className={styles.label}>
                        <h2>Stream devices</h2>
                        <span>{str}</span>
                    </div>
                </div>
                <p>
                    HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. 
                    Not all content is available in all resolutions. See our Terms of Use for more details.
                </p>
                <div className={`${styles.subBtn} ${(process ? `${styles.active}` : `${styles.proc}`)}`}>
                        <button onClick={submitButton} disabled={process}>
                            <span style={{display: process ? 'none' : 'block'}}>Continue</span>
                            <div className={styles.loading} style={{display: process ? 'block' : 'none'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130"><path fill="#000009" d="M65 127C30.758 127 3 99.241 3 65S30.758 3 65 3V0C29.102 0 0 29.102 0 65s29.102 65 65 65v-3z"></path><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="97.5" y1="130" x2="97.5"><stop offset="0" stopColor="#000009"></stop><stop offset=".841" stopColor="#000009" stopOpacity="0"></stop></linearGradient><path fill="url(#a)" d="M65 127c34.242 0 62-27.759 62-62S99.242 3 65 3V0c35.898 0 65 29.102 65 65s-29.102 65-65 65v-3z"></path><circle fill="#000009" cx="65" cy="1.5" r="1.5"></circle></svg>
                            </div>
                        </button>
                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default SubscriptionPage;