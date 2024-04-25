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
                                <h1>Disflix Privacy Notice</h1>
                                <div>
                                    <p className={styles.last}>Last Updated: April 19, 2024</p>
                                    <section className={styles.aSection}>
                                        <p>
                                            This Privacy Statement explains how we collect, use, and disclose your personal information when you use the
                                            "Disflix service” to access “Disflix content” as those terms are defined in the Disflix Terms of Use
                                            (disflix.in/terms). It also explains what privacy rights you have and how to exercise them. Certain
                                            functionalities or apps that are part of the Disflix service may also provide you with contextual privacy
                                            information or choices, in addition to the information and choices described in this Privacy Statement.
                                            Please note that this Privacy Statement may be easier to navigate when viewed on your web browser.
                                        </p>
                                        <p>
                                            <strong>Contacting Us </strong>
                                        </p>
                                        <p>
                                            For questions about this Privacy Statement, our use of your personal information, or how to exercise
                                            your privacy rights, please contact our Data Protection Officer/Privacy Office at privacy@disflix.in.
                                            For general questions about the Disflix service, your account, or how to contact customer service, please
                                            visit disflix.in/help.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>1. Our Collection, Use, and Disclosure of Personal Information</h2>
                                        <p>
                                            <strong>The Categories of Personal Information We Collect</strong>
                                            <br />
                                            We collect the following categories of personal information about you:
                                        </p>
                                        <p>
                                            <strong>a. Personal details: </strong>
                                            When you create your Disflix account, we collect your contact information (such as your email address)
                                            and authentication information for your login (such as a password). Depending on how you subsequently set
                                            up your account and method of payment, and which features you use, we also collect one or more of the
                                            following: first and last name, phone number, postal address, and other identifiers you provide to us.
                                            If you subscribe to an ad supported subscription plan, we also collect gender and date of birth.
                                        </p>
                                        <p>
                                            <strong>b. Payment details: </strong>
                                            We collect your payment details, and other information to process your payments, including your payment history, billing address, and gift cards you have redeemed.
                                        </p>
                                        <p>
                                            <strong>c. Disflix account/profile information: </strong>
                                            We collect information that is associated with your Disflix account and/or
                                            Disflix profiles on your account (such as profile name and icon, Disflix game 
                                            handle, ratings and feedback you provide for Disflix content), “My List” 
                                            (watch list of titles), “continue watching” information, account/profile 
                                            settings, and choices in connection with your use of the Disflix service.
                                        </p>
                                        <p>
                                            <strong>d. Advertising information: </strong>
                                            If you subscribe to an ad supported subscription plan, we collect information 
                                            about the ads on Disflix (“Advertisements,” as defined in the Disflix Terms of Use) that you view or 
                                            interact with, device information (such as resettable device identifiers), IP addresses, and information
                                             provided by Advertising Companies (such as information about your likely interests they have collected or 
                                             inferred from your visits to other websites and apps). We use this information to display Advertisements to 
                                             you in the Disflix service (including behavioral advertisements in accordance with your preferences). 
                                        </p>
                                        <p>
                                            <strong>e. Communication: </strong>
                                            If you communicate with Disflix (such as contacting customer support via online chat or voice call), engage in 
                                            our surveys or feedback requests (such as when you cancel), we collect the contents of such communications. 
                                            We also collect details of communications that we send you (such as via email, push notifications, text message, 
                                            or within the Disflix service), and information about your interaction and engagement with these communications.
                                        </p>
                                        <p>
                                            <strong>Who We Disclose Personal Information To</strong>
                                            <br />
                                            We may disclose your personal information to the following parties:
                                        </p>
                                        <p>
                                            <strong>a. the Disflix family of companies: </strong>
                                            We share your personal information among the Disflix family of companies (see disflix.in/legal/corpinfo) as needed for the following purposes: to provide our service; to administer and operate our business; to research, analyze, and improve our services; to enable Partner integrations and promotions; to send marketing and informational messages; to operate our ad supported subscription plan; for safety, security, and fraud prevention; and to comply with law and enforce our Terms of Use.  
                                        </p>
                                        <p>
                                            <strong>b. Advertising Companies: </strong>
                                            If you subscribe to an ad supported subscription plan, we may share certain personal information with Advertising Companies (see definition above) in order to select Advertisements shown on Disflix, to facilitate interaction with Advertisements, and to measure and improve effectiveness of Advertisements. These companies may process your personal information for the following purposes: to operate our ad supported subscription plan. 
                                        </p>
                                        <p>
                                            <strong>c. Promotional collaborations: </strong>
                                            We may collaborate with third parties to offer promotions. To fulfill these types of promotions, we and the third parties may use your personal information for the following purposes: to enable Partner integrations and promotions; and to send marketing and informational messages
                                        </p>
                                        <p>
                                            <strong>d. Safety, security and fraud prevention: </strong>
                                            Netflix and its Service Providers may disclose your personal information to third parties where we reasonably believe disclosure is needed for the purpose of: safety, security, and fraud prevention.
                                        </p>
                                        <p>
                                            <strong>How We Use Your Personal Information</strong>
                                            <br />
                                            We use your personal information to provide, maintain, improve, and promote the Disflix service, and to communicate with you. This involves using the categories of personal information listed above for the following purposes:
                                        </p>
                                        <p>
                                            <strong>a. To provide our service</strong> including all features and functionalities, websites and apps, user interfaces, and content and software associated with the Disflix service. This includes personalized recommendations for 
                                            Disflix content that we think will be of interest to you. This may also include personalizing the features and functionalities of the service (such as the way in which the recommendations are presented to you), and localizing 
                                            Disflix content relevant to your geography in compliance with our content partners’ licensing terms. We use the following categories of personal information for this purpose: personal details, Disflix account/profile information, usage 
                                            information, device and network information, and communications.
                                        </p>
                                        <p>
                                            <strong>b. To operate our ad supported subscription plan </strong> including to provide, analyze, administer, enhance, optimize, select, and deliver Advertisements. We use the following categories of personal information for this purpose: personal details, Disflix account/profile information, usage information, advertising information, and device and network information. 
                                        </p>
                                        <p>
                                            We use your personal information to present you with Advertisements. Some of our Advertisements may be behavioral advertisements 
                                            (“behavioral advertisements” are those that are selected based on information about your use and/or interactions with unaffiliated third party services). 
                                            Within our ad supported subscriptions plan, behavioral advertisements may be based on information regarding your use and/or interactions with unaffiliated 
                                            third party services provided to us by Advertising Companies (see definition above). Please see the section “Advertising Choices” below to learn about your choices.
                                        </p>
                                        <p>
                                            <strong>c. For safety, security, and fraud prevention </strong> including to secure our systems, protect our business, and to investigate, prevent, and detect prohibited or illegal activities and other security/technical issues. We use the following categories of personal information for this purpose: personal details, payment details, Disflix account/profile information, usage information, advertising information, device and network information, and communications.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>2. Cookies and Internet Advertising</h2>
                                        <p>
                                            <strong>a. Use of Cookies: </strong>
                                            We, our Service Providers, Disflix Marketing Providers, and Advertising Companies use cookies, other similar technologies (such as pixel tags), and resettable device identifiers for various reasons. This section explains the types of technologies used, what they do, and your corresponding choices. 
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 className={styles.sectiontitle}>3. Other Important Privacy Disclosures</h2>
                                        <p>
                                            <strong>a. Security: </strong>
                                            We use reasonable administrative, logical, physical, and managerial measures to safeguard your personal information against loss, theft, and unauthorized access, use and modification. These measures are designed to provide a level of security appropriate to the risks of processing your personal information
                                        </p>
                                        <p>
                                            <strong>b. Other Websites, Platforms and Applications: </strong>
                                            The Disflix service may use, be provided through  features operated by third party platforms (such as the display of social media content, or the provision of voice controls), or contain links to sites operated by third parties. In addition, you may encounter third party applications that interact with the Disflix service. These third parties have their own privacy policies. 
                                            For example, you may be able to access the Disflix service through platforms such as smart TVs, mobile devices, set top boxes, gaming systems, and other internet-connected devices. These platforms have separate privacy statements, notices, and terms of use, which we recommend you review. 
                                            We may provide support for the Disflix service (such as an online support forum for Disflix customer support, or a particular Disflix game). Information that you post or make available on such sites and forums are publicly available (unless otherwise noted on the site or forum).
                                        </p>
                                        <p>
                                            <strong>c. Kids: </strong>
                                            You must be at least 18 years of age or older (or the age of majority in your country of residence) to subscribe to the Disflix service. Kids under this age may only use the service with the involvement, supervision, and approval of a parent or legal guardian. To assist parents or legal guardians, we have various parental controls available and you can learn more here: disflix.in/legal/terms
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