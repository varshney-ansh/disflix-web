import { notFound } from 'next/navigation';
import CancelSub from '@/components/cancelSub/cancelSub';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getSubscriptionDetail } from '@/js/planSave';

const CancelSubscription = async ({ searchParams: { s } }) => {
    const session = await getServerSession(authOptions);
    const subscribeDetail = await getSubscriptionDetail(session.user.email);
    if(!subscribeDetail){
        notFound();
    }
    if(subscribeDetail){
        return(
            <CancelSub subId={s} nextBillingDate={subscribeDetail.nextBillingDate} />
        )
    }
}

export default CancelSubscription;

