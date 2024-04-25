import { useStripe, useElements } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { AddressElement } from '@stripe/react-stripe-js';
import { PaymentElement, CardCvcElement } from '@stripe/react-stripe-js';
import styles from './pay.module.css';
import FormError from '@/components/formError/FormError';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const PaymentForm = ({ email, name, plan, price, cus_id }) => {
    const stripe = useStripe();
    const router = useRouter();
    const elements = useElements();
    const errorRef = useRef();
    const [error, setError] = useState("");
    const [processing, setProcessing] = useState(false);

    const createSubscription = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const addressElement = elements.getElement('address');
        const { complete, value } = await addressElement.getValue();
        if (complete) {
            try {
                const paymentMethod = await stripe.createPaymentMethod({
                    type: 'card',
                    card: elements.getElement('card'),
                    billing_details: value,
                });

                const res = await fetch('/api/payment', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        cus_id,
                        address: value.address,
                        paymentMethod: paymentMethod.paymentMethod.id,
                        a: price,
                        s: plan,
                    }),
                });

                if (!res.ok) {
                    return console.log(res)
                }

                const data = await res.json();
                const confirm = await stripe.confirmCardPayment(`${data.clientSecret}`, {
                    payment_method: {
                        card: elements.getElement('card'),
                        billing_details: value,
                    },
                });

                if (confirm.error) {
                    setError("Payment unsuccessful");
                    setProcessing(false);
                    errorRef.current.style.display = "block";
                };

                if (confirm.paymentIntent.status === "succeeded") {                    
                    router.push(`/subscription/complete/${data.subscriptionId}`)
                    setProcessing(false);
                }

            } catch (error) {
                setError("Payment Unsuccessful");
                console.log(error)
                setProcessing(false);
                errorRef.current.style.display = "block";
            }
        }

    }

    return (
        <div className={styles.container}>
            <div ref={errorRef} style={{ display: "none" }}>
                <FormError errorMessage={error} />
            </div>
            <div className={styles.content}>
                <div className={styles.h2}>
                    <h2>Set up your credit or debit card</h2>
                </div>
                <div className={styles.cardLogo}>
                    <Image alt="cards_logo" src={`/icons/cardLogos.jpg`} width={160} height={40} />
                </div>
            </div>
            <div className={styles.billing_form}>
                <form >
                    <AddressElement options={{ mode: 'billing' }} /> <br />
                    <CardElement />
                    <div className={styles.p}>
                        <p>
                            By continuing you agree to our Terms of Use, Privacy Statement, and that you are over 18.
                            Disflix will automatically continue your membership and charge the membership fee to your payment method until you cancel.
                            You may cancel at any time to avoid future charges.
                        </p>
                    </div>
                    <div className={`${styles.subBtn} ${(processing ? `${styles.active}` : `${styles.proc}`)}`}>
                        <button onClick={createSubscription}>
                            <span style={{display: processing ? 'none' : 'block'}}>Continue</span>
                            <div className={styles.loading} style={{display: processing ? 'block' : 'none'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130"><path fill="#000009" d="M65 127C30.758 127 3 99.241 3 65S30.758 3 65 3V0C29.102 0 0 29.102 0 65s29.102 65 65 65v-3z"></path><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="97.5" y1="130" x2="97.5"><stop offset="0" stopColor="#000009"></stop><stop offset=".841" stopColor="#000009" stopOpacity="0"></stop></linearGradient><path fill="url(#a)" d="M65 127c34.242 0 62-27.759 62-62S99.242 3 65 3V0c35.898 0 65 29.102 65 65s-29.102 65-65 65v-3z"></path><circle fill="#000009" cx="65" cy="1.5" r="1.5"></circle></svg>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default PaymentForm;