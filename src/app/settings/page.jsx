import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/footer';
import styles from './account.module.css';
import Link from 'next/link';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getSubscriptionDetail } from '@/js/planSave';

export const generateMetadata = async({params}) => {
    return{
        title: `Account Settings - Disflix India`
    }
}

const AccountPage = async () => {

    const session = await getServerSession(authOptions);
    const subscribeDetail = await getSubscriptionDetail(session.user.email);
    let isSubscribed;
    if(subscribeDetail){
        isSubscribed = true;
    }
    else{
        isSubscribed = false;
    }

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Account & Settings</h1>
                </div>
                <div className={styles.headSlider}>
                    <Link className={styles.active} href={'/settings/account'}>Your account</Link>
                    <Link href={'/settings/billing'}>Billing</Link>
                </div>
                <div className={styles.contents}>
                    {/* content start */}
                    <div className={styles.content}>
                        <div className={styles.head}>
                            <h4>Your name</h4>
                            <span className={styles.name}>{session.user?.name}</span>
                        </div>
                    </div>
                    {/* content end  */}
                    {/* content start */}
                    <div className={styles.content}>
                        <div className={styles.head}>
                            <h4>Your email</h4>
                            <span>{session.user?.email}</span>
                        </div>
                    </div>
                    {/* content end  */}
                    {/* content start */}
                    <div className={styles.content}>
                        {
                            isSubscribed ? (
                                <>
                                    <div className={styles.head}>
                                        <h4>{subscribeDetail?.plan_details.name}</h4>
                                        <span>Next billing date : {subscribeDetail?.nextBillingDate}</span>
                                        {/* <span>Please go to the Disflix website to view plans or to subscribe membership.</span> */}
                                    </div>
                                    <div className={styles.changeBtn}>
                                        <Link href={`/subscription/cancel?s=${subscribeDetail?.subscriptionId}`}>
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                                <title>External</title>
                                                <g fill="none" fillRule="evenodd" strokeLinecap="round" stroke="currentColor" strokeWidth="2">
                                                    <path d="M11.828 12.314l7.779-7.778"></path>
                                                    <path strokeLinejoin="round" d="M14.657 3.828h5.657v5.657M19 14v5H5V5h5"></path>
                                                </g>
                                            </svg>
                                            <span>Cancel</span>
                                            {/* <span>Subscribe</span> */}
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.head}>
                                        <h4>Membership</h4>
                                        {/* <span>Next billing date : 26 February 2024</span> */}
                                        <span>Please go to the Disflix website to view plans or to subscribe membership.</span>
                                    </div>
                                    <div className={styles.changeBtn}>
                                        <Link href={`/subscription`}>
                                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                                <title>External</title>
                                                <g fill="none" fillRule="evenodd" strokeLinecap="round" stroke="currentColor" strokeWidth="2">
                                                    <path d="M11.828 12.314l7.779-7.778"></path>
                                                    <path strokeLinejoin="round" d="M14.657 3.828h5.657v5.657M19 14v5H5V5h5"></path>
                                                </g>
                                            </svg>
                                            {/* <span>Cancel</span> */}
                                            <span>Subscribe</span>
                                        </Link>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    {/* content end  */}
                    {/* content start */}
                    <div className={styles.content}>
                        <div className={styles.head}>
                            <h4>Change Password</h4>
                            <span>Please go to password assistance to change your password.</span>
                        </div>
                        <div className={styles.changeBtn}>
                            <Link href={`/ap/forgotpassword`}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <title>External</title>
                                    <g fill="none" fillRule="evenodd" strokeLinecap="round" stroke="currentColor" strokeWidth="2">
                                        <path d="M11.828 12.314l7.779-7.778"></path>
                                        <path strokeLinejoin="round" d="M14.657 3.828h5.657v5.657M19 14v5H5V5h5"></path>
                                    </g>
                                </svg>
                                <span>Change</span>
                            </Link>
                        </div>
                    </div>
                    {/* content end  */}
                    {/* content start */}
                    <div className={styles.content}>
                        <div className={styles.head}>
                            <h4>Sign Out</h4>
                            <span>Please go to our Sign out page to sign out from your account.</span>
                        </div>
                        <div className={styles.changeBtn}>
                            <Link href={`/ap/logout`}>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <title>External</title>
                                    <g fill="none" fillRule="evenodd" strokeLinecap="round" stroke="currentColor" strokeWidth="2">
                                        <path d="M11.828 12.314l7.779-7.778"></path>
                                        <path strokeLinejoin="round" d="M14.657 3.828h5.657v5.657M19 14v5H5V5h5"></path>
                                    </g>
                                </svg>
                                <span>Sign Out</span>
                            </Link>
                        </div>
                    </div>
                    {/* content end  */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AccountPage;