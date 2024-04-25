import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import styles from './common.module.css';
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
    return {
        title: `Help | Disflix India`
    }
}

const ContactPage = () => {
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
                                <h1>Contact Us</h1>
                                <div>
                                    <p className={styles.last}>Last Updated: April 19, 2024</p>
                                    <section className={styles.aSection}>
                                        <p>For any inquiries or assistance regarding our services, please do not hesitate to reach out to us. Our dedicated team is available to address your questions and provide the necessary support.</p>
                                        <p>You may contact us which is given below. Our representatives will be pleased to assist you promptly.</p>
                                        <p>We value our clients and are committed to providing exceptional service. Feel free to connect with us through this preferred communication channel for Disflix.</p>
                                        <p style={{ display: 'flex', alignItems: 'center' }}><span class="material-symbols-outlined">
                                            call
                                        </span>: +91 9675461506</p>
                                        <p style={{ display: 'flex', alignItems: 'center' }}><span class="material-symbols-outlined">
                                            alternate_email
                                        </span> : support@disflix.in</p>
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

export default ContactPage;