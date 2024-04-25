"use client"
import PaymentForm from '@/components/paymentForm/paymentForm';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentComponent = ({ email, name, price, plan, cus_id }) => {
    return (
        <>
            <Elements stripe={stripePromise}>
                <PaymentForm email={email} name={name} price={price} plan={plan} cus_id={cus_id}/>
            </Elements>
        </>
    )
}

export default PaymentComponent;