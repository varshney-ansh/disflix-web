import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";
import styles from './help.module.css';
import Link from "next/link";

export const generateMetadata = async({params}) => {
    return{
        title: `Help | Disflix India`
    }
}

const TermsPage = () => {
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
                                <h1>Disflix Terms of Use</h1>
                                <div>
                                    <p className={styles.last}>Last Updated: April 19, 2024</p>
                                    <section className={styles.aSection}>
                                        <p>
                                            Welcome to the terms of use for Disflix. These terms are between you and
                                            the entity providing the Disflix service to you, which may be, depending
                                            on your location, Disflix.in Services LLC, Disflix Digital UK Limited or one of their
                                            affiliates ("Disflix", "we" or "us"). Visit <Link href="/legal/terms" target="_blank">www.disflix.in/ww-av-legal-home</Link> to identify the Disflix affiliate that provides the Disflix service to
                                            you and other applicable terms based on your location. Your Disflix service
                                            provider may change from time to time, with or without prior notice (unless required
                                            by applicable law). Please read these terms, along with the <Link href="/legal/privacy" target="_blank">Privacy Notice</Link>, <Link href="/legal/terms" target="_blank">Conditions of Use</Link>, and <Link href="/usage" target="_blank">Disflix Usage Rules</Link> applicable to you, and all other rules and policies related to the Disflix
                                            service (including, but not limited to, any rules or usage provisions specified on
                                            any product detail page or on any help or other informational page for the Disflix
                                            Video service) (collectively, this "Agreement"). If you are located in the UK,
                                            European Union or Brazil, the Privacy Notice, the Cookies Notice and the Interest-Based
                                            Ads Notice are not part of your Agreement. The versions of these policies and notices
                                            applicable to you are available for your review to understand how we handle your personal
                                            information. Each time you visit, browse, or use the Disflix service, you
                                            accept this Agreement on behalf of yourself and all members of your household and
                                            others who use the Service under your account.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 class={styles.sectiontitle}>1. THE SERVICE</h2>
                                        <p>
                                            Disflix (the "Service") is a personalized service that offers, recommends
                                            and helps you discover digital movies, television shows and other video content (collectively,
                                            "Digital Content") and other services as provided in this Agreement.
                                            If you are under 18 years of age, or the age of majority in your location, you may
                                            use the Service only with involvement of a parent or guardian. We personalize content
                                            and features as part of the Services, including showing you recommendations on Digital
                                            Content, features and services that might be of interest to you. We also endeavor
                                            to continuously improve the Disflix services and your experience with them.
                                        </p>
                                        <p>
                                            The quality of the display of the Disflix content may vary from device
                                            to device, and may be affected by a variety of factors, such as your location, the bandwidth available through and/or speed of your Internet connection. HD, Ultra HD and HDR availability is subject to your Internet service and
                                            device capabilities. Not all content is available in all formats, such as HD, Ultra HD or HDR and not all subscription plans allow you to receive content in all formats. The minimum connection speed for HD video quality (defined
                                            as a resolution of 720p or higher) is 3.0 Mbps per stream; however, we recommend a faster connection for improved video quality. A connection speed of at least 5.0 Mbps per stream is recommended to receive Full HD video quality
                                            (defined as a resolution of 1080p or higher). A connection speed of at least 15.0 Mbps per stream is recommended to receive Ultra HD video quality (defined as a resolution of 4K or higher). You are responsible for all Internet
                                            access charges. Please check with your Internet provider for information on possible Internet data usage charges. The time it takes to begin watching Disflix content will vary based on a number of factors, including your location,
                                            available bandwidth at the time, the content you have selected and the configuration of your Disflix ready device.
                                        </p>
                                        <p>
                                            The Disflix service and any content accessed through the service are for your personal and non-commercial use only and may not be shared with individuals beyond your household unless otherwise allowed by your subscription
                                            plan. During your Disflix membership we grant you a limited, non-exclusive, non-transferable right to access the Disflix service and Disflix content. Except for the foregoing, no right, title or interest shall be transferred to
                                            you. You agree not to use the service for public performances.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 class={styles.sectiontitle}>2. COMPATIBLE DEVICES</h2>
                                        <p>
                                            In order to stream or download Digital Content, you will need to use a personal computer,
                                            portable media player, or other device that meets the system and compatibility requirements
                                            that we establish from time to time (a "Compatible Device").
                                            Some Compatible Devices may be used only to stream Digital Content, some may be
                                            used only to download Digital Content, and some may be used to stream and download
                                            Digital Content. We may change the requirements for Compatible Devices from time to
                                            time and, in some cases, whether a device is (or remains) a Compatible Device may
                                            depend on software or systems provided or maintained by the device manufacturer or
                                            other third parties. Accordingly, devices that are Compatible Devices at one time
                                            may cease to be Compatible Devices in the future. The Disflix entity that provides
                                            you the Disflix app may be different than the Disflix entity that
                                            provides you the Service.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 class={styles.sectiontitle}>3. GEOGRAPHIC VARIABILITY</h2>
                                        <p>
                                            Due to technical and other restrictions imposed by content providers, the Service
                                            is available only in certain locations. The Digital Content (including subtitled and
                                            dubbed audio versions of Digital Content) and how we offer Digital Content to you
                                            will vary over time and by location. Disflix will use technologies to verify your geographic
                                            location. You may not use any technology or technique to obscure or disguise your
                                            location.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 class={styles.sectiontitle}>4. DIGITAL CONTENT</h2>
                                        <p>
                                            <strong>a. General.</strong>
                                            The Service may allow you to: (i) access Digital Content on a subscription basis
                                            for viewing during a limited period of time during a subscription period (for example,
                                            through standalone video subscription offering)
                                            ("Subscription Digital Content"), (ii) rent Digital Content for on-demand viewing
                                            over a limited period of time ("Rental Digital Content"), (iii) purchase Digital Content
                                            for on-demand viewing over an indefinite period of time ("Purchased Digital Content"),
                                            (iv) purchase Digital Content for pay-per-view viewing over a limited period of time
                                            ("PPV Digital Content"), and/or (v) access Digital Content on a free, ad-supported
                                            or promotional basis for viewing over a limited period of time ("Free Digital Content").
                                            Digital Content may be available as Subscription Digital Content, Rental Digital Content,
                                            Purchased Digital Content, PPV Digital Content, Free Digital Content, or any combination
                                            of those, and in each case is subject to the limited license grant below.
                                        </p>
                                        <p>
                                            <strong>b. Usage Rules.</strong>
                                            Your use of Digital Content is subject to the <Link href={'/usage'}>Disflix Usage Rules</Link> (the "Usage Rules").
                                            The Usage Rules provide important information, including the
                                            time period during which you are authorized to view different types of Digital Content
                                            (the "Viewing Period") and limitations on the number and type of Compatible Devices
                                            on which each type of Digital Content may be downloaded, streamed, and viewed.
                                        </p>
                                        <p>
                                            <strong>c. Subscriptions/Memberships. </strong>
                                            Offers and pricing for subscriptions (also referred to at times as memberships),
                                            the subscription services, the extent of available Subscription Digital Content, and
                                            the specific titles available through subscription services, may change over time
                                            and by location without notice (except as may be required by applicable law). Unless
                                            otherwise indicated, any price changes are effective as of the beginning of the next
                                            subscription period. If you do not agree to a subscription change, you may cancel
                                            your subscription per Section 4(d) below. The pricing for subscriptions or memberships
                                            may include VAT and/or other taxes. Where applicable, such taxes will be collected
                                            by the party with whom you transact for the service, which may be Disflix or a third
                                            party. We make no guarantee as to the availability of specific Subscription Digital
                                            Content or the minimum amount of Subscription Digital Content available in any subscription.
                                            Additional terms applicable to a subscription (such as the applicable cancellation
                                            and refund policy) will be indicated on the informational pages for that subscription
                                            on the primary Service website for your location, noted <Link href="/legal">here.</Link>
                                        </p>
                                        <p>
                                            Disflix is not responsible for the content contained in any third-party subscription
                                            service or the features of these services.
                                        </p>
                                        <p>
                                            <strong>d. Cancellation of Subscriptions/Memberships.</strong>
                                            You can cancel your Disflix membership at any time, and you will continue to have 
                                            access to the Disflix service through the end of your billing period. To the extent
                                            permitted by the applicable law, payments are non-refundable and we do not provide 
                                            refunds or credits for any partial membership periods or unused Disflix content. 
                                            To cancel, go to the "Account" page and follow the instructions for cancellation. 
                                            If you cancel your membership, your account will automatically close at the end of 
                                            your current billing period. To see when your account will close, click "Billing 
                                            details" on the "Account" page. If you signed up for Disflix using your account with 
                                            a third party as a Payment Method and wish to cancel your Disflix membership, you may 
                                            need to do so through such third party, for example by visiting your account with the 
                                            applicable third party and turning off auto-renew, or unsubscribing from the Disflix 
                                            service through that third party.
                                        </p>
                                        <p>
                                            <strong>e. Payment Method. </strong>
                                            To use the Disflix service you must provide one or more Payment Methods. 
                                            You authorize us to charge any Payment Method associated to your account in case 
                                            your primary Payment Method is declined or no longer available to us for payment of 
                                            your subscription fee. You remain responsible for any uncollected amounts. 
                                            If a payment is not successfully settled, due to expiration, insufficient funds, 
                                            or otherwise, and you do not cancel your account, we may suspend your access to 
                                            the service until we have successfully charged a valid Payment Method. For some Payment 
                                            Methods, the issuer may charge you certain fees, such as foreign transaction fees or 
                                            other fees relating to the processing of your Payment Method. Local tax charges may vary 
                                            depending on the Payment Method used. 
                                            Check with your Payment Method service provider for details.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 class={styles.sectiontitle}>5. SOFTWARE</h2>
                                        <p>
                                            Disflix software is developed by, or for, Disflix and may 
                                            solely be used for authorized streaming and to access Disflix 
                                            content through Disflix ready devices. This software may vary by device and medium, 
                                            and functionalities and features may also differ between devices. You acknowledge that 
                                            the use of the service may require third party software that is subject to third party 
                                            licenses. You agree that you may automatically receive updated versions of the Disflix 
                                            software and related third-party software.
                                        </p>
                                    </section>
                                    <section className={styles.aSection}>
                                        <h2 class={styles.sectiontitle}>6. MISCELLANEOUS</h2>
                                        <p>
                                            <strong>a. Passwords and Account Access. </strong>
                                            You are responsible for any activity that occurs through the Disflix account. By allowing others to access the account (which includes access to information on viewing activity for the
                                            account), you agree that such individuals are acting on your behalf and that you are bound by any changes that they may make to the account, including but not limited to changes to the subscription plan. To help maintain control
                                            over the account and to prevent any unauthorized users  from accessing the account, you should maintain control over the devices that are used to access the service and not reveal the password or details of the Payment Method associated
                                            with the account to anyone. You agree to provide and maintain accurate information relating to your account, including a valid email address so we can send you account related notices. We can terminate your account or place your
                                            account on hold in order to protect you, Disflix or our partners from identity theft or other fraudulent activity.
                                        </p>
                                        <p>
                                            <strong>b. Warranties and Limitations on Liability. </strong>
                                            The Disflix service is provided "as is" and without warranty or condition. In particular, our service may not be uninterrupted or error-free. You waive all special,
                                            indirect and consequential damages against us. These terms will not limit any non-waivable warranties or mandatory consumer protection rights that apply to you.
                                        </p>
                                        <p>
                                            <strong>c. Survival. </strong>
                                            If any provision or provisions of these Terms of Use shall be held
                                            to be invalid, illegal, or unenforceable, the validity, legality and enforceability of the remaining provisions shall remain in full force and effect.
                                        </p>
                                        <p>
                                            <strong>d. Reservation of Rights; Waiver. </strong>
                                            The Service, Software and the Digital Content embody intellectual property that is protected by law. Copyright owners of Digital Content are intended third-party beneficiaries under the Agreement. Our failure to insist upon or enforce your strict compliance with the Agreement will not constitute a waiver of any of our rights.
                                        </p>
                                        <p>
                                            <strong>e. Your legal rights. </strong>
                                            We have a legal duty to supply the Service and Digital Content in conformity with this Agreement. If there is a problem with the Service or any Digital Content, the laws of your country may give you additional rights and remedies. Such laws apply in addition to your rights under this Agreement
                                        </p>
                                        <p>
                                            <strong>f. Electronic communication. </strong>
                                            We will send you information relating to your account (e.g. payment authorizations, invoices, changes in password or Payment Method, confirmation messages, notices) in electronic form only, for example via emails to your email address provided during registration.
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

export default TermsPage;