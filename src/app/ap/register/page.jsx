"use client"
// "use server"
import styles from './register.module.css';
import Image from 'next/image';
import Link from 'next/link';
import FormError from '@/components/formError/FormError';
import FooterSm from '@/components/footerSm/footerSm';
import { signUpWithCredentials } from '@/js/authActions';
import { useRef } from 'react';
import { useState } from 'react';
import Stripe from 'stripe';
// import { getServerSession } from "next-auth/next";
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const RegisterPage = () =>{
    // const session = await getServerSession(authOptions);
    // console.log("session", session)
    const form2Ref = useRef();
    const form1Ref = useRef();
    const errorRef = useRef();
    const [error, setError] = useState("");

    async function handleSignupCredentials(formData){
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        // console.log(name, email, password);
        const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
        // Create a customer
        const customer = await stripe.customers.create({
            email, name
        });

        const cus_id = customer.id;

        const res = await signUpWithCredentials({name,email,password,cus_id});
        if(res?.msg === "emailSent"){
            form1Ref.current.style.display = 'none';
            form2Ref.current.style.display = 'block';
        }
        if (res?.err) {
            setError(res?.err);
            errorRef.current.style.display = 'block';
        }
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brandLogo}>
                        <Image alt="disflix" src="/brand/blackLogo.png" height={35} width={150} priority/>
                    </div>
                    <div ref={errorRef} style={{display: 'none'}}>
                        <FormError errorMessage={error} />
                    </div>
                    
                    <form ref={form1Ref} className={styles.form} action={handleSignupCredentials}>
                        <div className={styles.heading}>
                            <h1>Create Account</h1>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="name" placeholder="First and last name"/>
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" placeholder="Your email address"/>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Atleast 6 characters" />
                        </div>
                        <div className={styles.info}>
                            <span>To verify your email, we will send you a email with a temporary code. Data rates may apply.</span>
                        </div>
                        <div className={styles.buttonSub}>
                            <button>Create your Disflix account</button>
                        </div>
                        <div className={styles.agree}>
                            <span>By creating an account, you agree to the Disflix <Link href="/legal/terms">Conditions of Use and Privacy Notice.</Link> </span>
                        </div>
                        <div className={styles.other}>
                            <span>Already have an account? <Link href='/ap/signin'>Sign in</Link> </span>
                        </div>
                    </form>
                    <form ref={form2Ref} className={`${styles.form2} ${styles.form}`} style={{display: "none"}}>
                        <div className={styles.heading}>
                            <h1>Verification required</h1>
                        </div>
                        <div className={styles.verifyPara}>
                            <span>To continue, complete this verification. We've sent you a email with verification link. click on it for further instructions.</span>
                        </div>
                        <div className={styles.buttonSub}>
                            <Link target={`_`} href={`https://mail.google.com`}>Open mail</Link>
                        </div>
                    </form>
                </div>
            </div>
            <FooterSm />
        </>
    )
}

export default RegisterPage;