import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import styles from './help.module.css';
import Link from "next/link";

export const generateMetadata = async({params}) => {
    return{
        title: `Help | Disflix India`
    }
}

const NoticesPage = () => {
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
                                <h1>Disflix Legal Notices</h1>
                                <div>
                                    <p className={styles.last}>Last Updated: April 19, 2024</p>
                                    <section className={styles.aSection}>
                                        <p>
                                            The Disflix service, including all content provided on the Disflix service, is protected by copyright, trademark, trade secret or other intellectual property laws
                                            and treaties
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Copyrights</h2>
                                        <p>
                                            The copyrights in the content on our service are owned by many great producers and production companies, including Disflix. If you believe your or someone
                                            else’s copyrights are being infringed upon through the Disflix service, let us know by completing the Copyright Infringement Claims form (www.disflix.in/copyrights).
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Trademarks</h2>
                                        <p>
                                            Disflix and the D Logo are trademarks of Disflix,Inc.
                                            Unless you have our permission, do not use the Disflix marks as your own or in any manner that implies sponsorship or endorsement by Disflix.
                                            A product branded with the Disflix name or logo is a reflection of Disflix. Unless you are one of our licensees, we don’t allow others to make, sell, or give away
                                            anything with our name or logo on it.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Third Party Notices</h2>
                                        <p>
                                            Disflix applications, software development kits (SDKs) and other Disflix products may contain software available under open source or free software licenses
                                            (“Open Source Software”). The Disflix Terms of Use do not alter any rights or obligations you may have under those Open Source Software licenses. Additional
                                            information about Open Source Software, including required acknowledgements, license terms and notices, can be found below.
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

export default NoticesPage;