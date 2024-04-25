import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import styles from './help.module.css';
import Link from "next/link";

export const generateMetadata = async({params}) => {
    return{
        title: `Help | Disflix India`
    }
}

const UsagePage = () => {
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
                                <h1>Disflix Usage Rules</h1>
                                <div>
                                    <p className={styles.last}>Last Updated: April 19, 2024</p>
                                    <section className={styles.aSection}>
                                        <p>
                                            As described in the Disflix Terms of Use, due to limitations imposed on us by our content suppliers, 
                                            the videos we make available to you on Disflix are subject to restrictions on viewing (for example, 
                                            through streaming or download) and on the length of time we make them available to you. The specific restrictions 
                                            applicable to each of your videos depends on whether you access a video through a purchase, rental, paid 
                                            subscription or promotional trial, or for free. These restrictions may change over time as we add new features, devices 
                                            and content to our service. The following are restrictions for accessing Disflix through your web browser and 
                                            compatible Internet-connected TVs, Blu-ray players, set-top boxes, Fire tablets and other compatible devices.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Purchased Videos</h2>
                                        <p>
                                            <strong>1. Ways to Watch: </strong> When you purchase a video for on-demand viewing, we'll make it available to you to stream and, in most cases, download as follows:
                                        </p>
                                        <p>
                                            <strong>a. Streaming:</strong> You may stream purchased videos online through your web browser and compatible Internet-connected TVs, Blu-ray players, set-top-boxes, Fire tablets, 
                                            and other compatible devices. For a list of devices compatible with our service, visit the Compatible Devices page on the website you are using to access Disflix at the following links,
                                            disflix.in (device compatibility may vary by location). You may stream up to three videos at the same time using the Disflix account. You may stream the same video to no more than One devices at a time.
                                        </p>
                                        <p>
                                            <strong>2. Viewing Period: </strong> 
                                            Indefinite -- you may watch and re-watch your purchased videos as often as you want and as long as you want (subject to the limitations described in the Disflix Terms of Use).
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Disflix Subscriptions</h2>
                                        <p>
                                            <strong>Streaming: </strong> Videos available through a paid disflix subscription or promotional trial are available for online streaming. You can stream these titles online through your web browser, and Internet-connected TVs, Blu-ray players, set-top-boxes, Fire tablets and other compatible devices. For a list of devices compatible with our service, visit the Compatible Devices page on the website you are using to access Disflix at the following links, disflix.in (device compatibility may vary by location). You can stream up to three titles at the same time using the disflix account. You can stream the same title to no more than one devices at a time.
                                        </p>
                                        <p>
                                            <strong>Viewing Period:</strong> You may stream and re-stream any video designated as included with Disflix  on its detail page. For downloaded videos, you'll typically have 30 days to begin watching the video after you download it and once you start watching it, you'll typically have 48 hours to finish watching it. After your disflix membership or promotional trial expires or is cancelled, you cannot watch any video available through your disflix Video subscription unless you've rented or purchased that title.
                                        </p>
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

export default UsagePage;