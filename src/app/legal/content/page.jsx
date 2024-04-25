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
                                <h1>Content Policy Guidelines</h1>
                                <div>
                                    <p className={styles.last}>Last Updated: April 19, 2024</p>
                                    <section className={styles.aSection}>
                                        <p>
                                            All videos and other content (such as cover image and product descriptions) must adhere to these content policy guidelines, which may change over time. We reserve the right to make judgments about whether content is appropriate. In an effort to provide the best customer experience, we may choose not to offer any content or otherwise restrict its availability.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Offensive Content</h2>
                                        <p>
                                            We reserve the right to determine the appropriateness of all content submitted for publication on the service. Titles containing persistent or graphic sexually explicit or violent acts, gratuitous nudity, and/or erotic themes ("adult content") are not eligible for inclusion in the Disflix catalog. Titles containing adult content may not be amended or edited from their original form to circumvent this restriction.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Sexually Explicit Content</h2>
                                        <ul>
                                            <li>Content containing depictions of pornography or explicit depictions of sexual acts or nudity.</li>
                                            <li>Content that glorifies illegal sexual acts.</li>
                                            <li>Content primarily intended to sexually stimulate.</li>
                                        </ul>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Violent or Graphic Content</h2>
                                        <ul>
                                            <li>Content that contains graphic depictions of extreme gore, decapitations, unsettling content, and/or excessive violence intended to shock the customer.</li>
                                        </ul>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Dangerous or Unlawful Content</h2>
                                        <ul>
                                            <li>Content that promotes, endorses, or incites the viewer to engage in dangerous or harmful acts.</li>
                                            <li>Content that promotes organized crime, terrorism, or other illegal activities.</li>
                                            <li>Content that glorifies or promotes illegal acts of animal abuse or torture.</li>
                                            <li>Content that provides advice on how to begin or be involved in an illegal lifestyle.</li>
                                            <li>Content that gives guidance on how create or build dangerous materials.</li>
                                            <li>Content that glorifies or promotes illegal or controlled drug use.</li>
                                        </ul>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Hateful Content</h2>
                                        <ul>
                                            <li>Content that contains derogatory comments, hate speech, or threats specifically targeting any group or individuals.</li>
                                            <li>Content that promotes hate speech, incites racial or gender hatred, or promotes groups or organizations that support such beliefs.</li>
                                        </ul>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Harassment and Cyberbullying</h2>
                                        <ul>
                                            <li>Content containing abusive, debasing, and/or humiliating language.</li>
                                            <li>Content that promotes or facilitates stalking or intimidation.</li>
                                            <li>Malicious or harassing video content including, but not limited, to video obtained without consent.</li>
                                        </ul>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Illegal and Infringing Content</h2>
                                        <p>
                                            We take violations of laws and proprietary rights very seriously. It is the licensor’s responsibility to ensure that content doesn't violate applicable laws or copyright, trademark, privacy, publicity, or other rights (including with respect to components of content such as the background music or items displayed within the content). Just because content is freely available does not mean a licensor is free to copy and sell it.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Copyright</h2>
                                        <ul>
                                            <li>Content that you did not create and do not have a license to distribute, including the entire work or components therein such as music or illustrations.</li>
                                        </ul>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Trademarks</h2>
                                        <ul>
                                            <li>Content that contains trademarks that you have not obtained the rights to use.</li>
                                        </ul>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Violations of Privacy or Defamation</h2>
                                        <ul>
                                            <li>Content containing another’s personal information.</li>
                                            <li>Content that contains untrue statements about an individual that are intended to harm their reputation.</li>
                                        </ul>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Public Domain Content</h2>
                                        <p>We do not accept public domain content or content which is undifferentiated or barely differentiated from one or more other titles.</p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Poor Customer Experience</h2>
                                        <p>We don't accept videos that contain external links, tracking tags, functionality which is unsupported by Disflix, or which otherwise provide a poor customer experience. We reserve the right to accept or reject any videos because they provide a disappointing experience at our discretion.</p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>Country or Region-Specific Restrictions</h2>
                                        <p>Some countries in which we distribute content may have more restrictive standards than other countries for what qualifies as "Offensive Content,"" or "Illegal and Infringing Content." This may include limitations on the display of tobacco branding and drug use; content containing offensive, illegal, or infringing depictions may be subject to publication restrictions in certain territories.</p>
                                        <p>We may restrict any title from sale in any country or region where the sale or distribution of that content would violate that country's or region's laws, cultural norms, or sensitivities or for any other reason at our discretion.</p>
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