import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { SaveSubscriptionDetail, SerachSubscriptionByEmail, UpdateSubscriptionDetail } from '@/js/planSave';
import { UpdateIsSubscribe } from '@/utils/changeSub';
import { notFound } from 'next/navigation';
import { redirect } from 'next/navigation';
import styles from './sub.module.css';
import Image from 'next/image';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const SubscriptionCompletePage = async ({ params }) => {
    let redirectPath;
    try {
        const { sub_id } = params;
        console.log({ sub_id });
        const subscription = await stripe.subscriptions.retrieve(sub_id);
        const session = await getServerSession(authOptions);
        const name = session.user.name;
        const email = session.user.email;
        const cus_id = session.user.cus_id;
        const data = subscription.items.data;
        const productId = data[0].plan.product;
        const amount = data[0].plan.amount / 100;
        const product = await stripe.products.retrieve(productId);
        const productName = product.name;
        const startDateObj = new Date(subscription.current_period_start * 1000);
        const endDateObj = new Date(subscription.current_period_end * 1000);

        const startDate = `${startDateObj.getDate()} ${startDateObj.toLocaleString('default', { month: 'long' })}, ${startDateObj.getFullYear()}`
        console.log(startDate)
        const endDate = `${endDateObj.getDate()} ${endDateObj.toLocaleString('default', { month: 'long' })}, ${endDateObj.getFullYear()}`
        console.log(endDate)

        const subData = {
            name: name,
            email: email,
            subscriptionId: sub_id,
            plan_details: {
                name: productName,
                isAnime: true,
                isMovie: true,
            },
            startBillingDate: startDate,
            nextBillingDate: endDate,
            product: {
                amount: amount,
                product_id: productId,
            }
        }

        const subSearch = await SerachSubscriptionByEmail(email);
        if (subSearch?.msg === 'success') {
            const updateSub = await UpdateSubscriptionDetail({ data: subData, id: subSearch.id });
            if (updateSub) {
                redirectPath = `/settings/account`;
            }
        }
        else {
            const save = await SaveSubscriptionDetail(subData);
            if (save) {
                redirectPath = `/settings/account`;
            }
        }
    } catch (error) {
        redirectPath = `/subscription`;
    } finally {
        //Clear resources
        if (redirectPath) {
            redirect(redirectPath)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.div}>
                    <div className={styles.brand}>
                        <Image src={`/brand/blackLogo.png`} height={35} width={157} style={{aspectRatio: 35/157}} alt="Disflix_Logo" />
                    </div>
                    <div className={styles.p}>
                        <p>We are capturing payment and activating your plan. Please do not close this window. this may take few seconds. Thank you for your patience.</p>
                    </div>
                    <div className={styles.loading}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130">
                            <path fill="#000" d="M65 127C30.758 127 3 99.241 3 65S30.758 3 65 3V0C29.102 0 0 29.102 0 65s29.102 65 65 65v-3z" />
                            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="97.5" y1="130" x2="97.5">
                                <stop offset="0" stopColor="#000" /><stop offset=".841" stopColor="#fff" stopOpacity="0" />
                            </linearGradient>
                            <path fill="url(#a)" d="M65 127c34.242 0 62-27.759 62-62S99.242 3 65 3V0c35.898 0 65 29.102 65 65s-29.102 65-65 65v-3z" />
                            <circle fill="#000" cx="65" cy="1.5" r="1.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SubscriptionCompletePage;