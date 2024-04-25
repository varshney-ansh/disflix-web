import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import styles from './billing.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getSubscriptionDetail } from '@/js/planSave';

export const generateMetadata = async({params}) => {
    return{
        title: `Billing - Disflix India`
    }
}

const AccountPage = async() =>{

    const session = await getServerSession(authOptions);
    const subscribeDetail = await getSubscriptionDetail(session.user.email);
    let isSubscribed;
    if(subscribeDetail){
        isSubscribed = true;
        console.log(subscribeDetail)
    }
    else{
        isSubscribed = false;
    }

    return(
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Account & Settings</h1>
                </div>
                <div className={styles.headSlider}>
                    <Link href={'/settings/account'}>Your account</Link>
                    <Link className={styles.active} href={'/settings/billing'}>Billing</Link>
                </div>
                <div className={styles.contents}>
                    {/* content start */}
                    <div className={styles.content}>
                        <div className={styles.head}>
                            <h4>Membership</h4>
                            { isSubscribed ? (<span>{subscribeDetail?.plan_details.name}</span>) : (<span>Not Subscribed</span>)}
                        </div>
                    </div>
                    {/* content end  */}
                    {/* content start */}
                    <div className={styles.content}>
                        <div className={styles.head}>
                            <h4>Renewal date</h4>
                            { isSubscribed ? (<span>{subscribeDetail?.nextBillingDate}</span>) : (<span>Not Applicable</span>)}
                        </div>
                    </div>
                    {/* content end  */}
                    {/* content start */}
                    <div className={styles.content}>
                        <div className={styles.head}>
                            <h4>Start date</h4>
                            { isSubscribed ? (<span>{subscribeDetail?.startBillingDate}</span>) : (<span>Not Applicable</span>)}
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