'use client'
import { useRouter } from 'next/navigation';
import { deleteSubscription } from '@/js/planSave';
import styles from './cancel.module.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/footer';
import Link from 'next/link';

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

const CancelSub = ({ subId, nextBillingDate }) => {
    const router = useRouter();

    async function CancelSubscription() {
        try {
            const subCancel = await stripe.subscriptions.cancel(subId);
            if (subCancel.status === 'canceled') {
                const cancelSub = await deleteSubscription(subId);
                if (cancelSub) {
                    router.push('/settings/account');
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <h2>Have you finished watching?</h2>
                    </div>
                    <div className={styles.para}>
                        <p>if you're sure you'd like to cancel your membership, finish below.</p>
                    </div>
                    <div className={styles.form}>
                        <ul>
                            <li>Cancellation will be effective at the end of your current billing period on <strong>{nextBillingDate}.</strong></li>
                            <li>Come back at any time. if you restart within 10 months, your profiles, favourites, viewing prefences and account details are still be waiting for you.</li>
                        </ul>
                        <div className={styles.btns}>
                            <button onClick={CancelSubscription}>Finish Cancellation</button>
                            <Link href={`/settings/account`}>Back</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CancelSub;