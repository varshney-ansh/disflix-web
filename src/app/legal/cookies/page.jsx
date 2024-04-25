import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import styles from './help.module.css';
import Link from "next/link";

export const generateMetadata = async({params}) => {
    return{
        title: `Help | Disflix India`
    }
}

const PrivacyPage = () => {
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
                                <h1>EU Cookies Notice</h1>
                                <div>
                                    <p className={styles.last}>Last Updated: April 19, 2024</p>
                                    <section className={styles.aSection}>
                                        <p>
                                            We use cookies and similar tools (collectively, "cookies") for the purposes described below.
                                        </p>
                                        <p>
                                            Operational Cookies : We use cookies to provide our services, for example:
                                        </p>
                                        <ul>
                                            <li>Recognising you when you sign-in to use our services.</li>
                                            <li>Recognising if you are a Prime member and providing other customised features and services.</li>
                                            <li>Displaying features, products, and services which might be of interest to you, including ads on our services if they are for products and services available on Disflix.</li>
                                            <li>Preventing fraudulent activity.</li>
                                            <li>Improving security.</li>
                                            <li>Keeping track of your preferences such as currency and language.</li>
                                        </ul>
                                        <p>
                                            We also use cookies to understand how customers use our services so we can make improvements. For example, we use cookies to conduct research and diagnostics to improve Disflix’s content, products, and services, and to measure and understand the performance of our services.
                                        </p>
                                        <p>
                                            <strong>Advertising Cookies: </strong> We also use cookies to serve certain types of ads, including for products and services not available on Disflix and for certain ads relevant to your interests.
                                        </p>
                                        <p>
                                            Additional Information
                                        </p>
                                        <p>
                                            Operational cookies will remain on your browser for 13 months from your last visit to our services, except for cookies used to remember your privacy settings (such as Advertising Preferences), which may remain on your browser for up to 5 years. Other cookies remain on your browser for 13 months after you provide us with your consent to use these cookies.
                                        </p>
                                        <p>
                                            Alternatively, the settings on your browser will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie, how to disable and remove cookies, and when cookies will expire.
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

export default PrivacyPage;