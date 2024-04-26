import PaymentComponent from "@/components/paymentComponent/PaymentComponent";
import SmNavBar from '@/components/smNav/smNav';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import styles from './pay.module.css';
import { decryption } from "@/utils/cryptoPay";
import { notFound } from 'next/navigation';
import Footer from "@/components/footer/footer";

export const generateMetadata = async({params}) => {
    return{
        title: `Payment | Disflix India`
    }
}

const PaymentPage = async({searchParams: {s,a}}) =>{
    const decryptPrice = await decryption(a);
    const decryptPlan = await decryption(s);
    if (decryptPlan?.error) {
        notFound();
    }
    if (decryptPrice?.error) {
        notFound();
    }

    const session = await getServerSession(authOptions);
    const name = session.user.name;
    const email = session.user.email;
    const cus_id = session.user.cus_id;

    return(
        <>
            <SmNavBar />
            <PaymentComponent email={email} name={name} price={a} plan={s} cus_id={cus_id} />
            <Footer />
        </>
        
    )
}

export default PaymentPage;