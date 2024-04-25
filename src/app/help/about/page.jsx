import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import styles from './common.module.css';
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
    return {
        title: `Help | Disflix India`
    }
}

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Help</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.LeftPanel}>
                        <div className={styles.head}>
                            <h2>Legal Policies and Notices</h2>
                        </div>
                        <ul>
                            <li><Link href={`/legal/privacy`}>Privacy Policy - Global</Link></li>
                            <li><Link href={`/legal/terms`}>Terms Of Use - Global</Link></li>
                            <li><Link href={`/legal/usage`}>Disflix Usage Rules</Link></li>
                            <li><Link href={`/legal/content`}>Content Policy Guidelines</Link></li>
                            <li><Link href={`/legal/cookies`}>Eu Cookies Notice</Link></li>
                            <li><Link href={`/legal/notices`}>Legal Notices</Link></li>
                        </ul>
                    </div>
                    <div className={styles.RightPanel}>
                        <article role="article">
                            <div className={styles.conHead}>
                                <h1>About Us</h1>
                                <div>
                                    <p className={styles.last}>Last Updated: April 19, 2024</p>
                                    <section className={styles.aSection}>
                                        <p>
                                            Disflix is an online vedio streaming platform owned by Disflix, Inc. Disflix offers over 100,000 hours of TV content and movies across 9 languages, and every
                                            major sport covered live. Highly evolved video streaming technology and a high attention to quality of experience across devices and platforms, make Disflix
                                            the most complete video destination for Over The Top (OTT) video consumers. 
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2>A video experience like no other</h2><br />
                                        <p>
                                            <strong>Seamless video playback: </strong> Our adaptive video streaming technology ensures that the best possible video quality is played back automatically based on the available
                                            bandwidth, therefore making it a great video experience on both mobile networks as well as WiFi internet connections. Our video is optimized to play on mobile networks with
                                            inconsistent throughput so that our users don't have to compromise on their experience on the low end, and play HD quality video on the top end of bandwidth availability.
                                            Additionally, our users can manually select the quality of video that suits their taste.
                                        </p>
                                        <p>
                                            <strong>Smart Search: </strong> Content search on Disflix has been optimized to reduce complexity and delay in accessing content. Accurate search results, with lightning fast autocomplete
                                            suggestions navigate users to video with minimal navigation friction and ease of use.
                                        </p>
                                        <p>
                                            <strong>Friendly User Interface: </strong> Content organization on Disflix is a result of a thoughtful user experience approach and strong design principles that ensure that the user
                                            is not overwhelmed with the breadth of content available. Using a mix of algorithms and human curation, users at any stage of their interaction with Disflix will
                                            discover content and see their experience evolve with their interaction patterns over time.
                                        </p>
                                        <p><strong>Access: </strong> Disflix services can be accessed at <Link href={'/'}>www.disflix.in</Link></p>
                                    </section>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage;