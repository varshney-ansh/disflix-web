"use client"

import styles from './signin.module.css';
import Image from 'next/image';
import Link from 'next/link'
import FormError from '@/components/formError/FormError';
import FooterSm from '@/components/footerSm/footerSm';
import { signIn } from 'next-auth/react';

const LoginPage = ({searchParams: {error, callbackUrl}}) => {

    async function handleCredentialsLogin(formData){
        if(!callbackUrl){
            callbackUrl = "/";
        }
        const email = formData.get('email');
        const password = formData.get('password');

        await signIn('credentials', {email, password, callbackUrl: callbackUrl})
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brandLogo}>
                        <Image alt="disflix" src="/brand/blackLogo.png" height={35} width={150} priority/>
                    </div>
                    {(() => {
                        if (error) {
                        return <FormError errorMessage={error} />;
                        } else {
                        return null;
                        }
                    })()}
                    <form className={styles.form} action={handleCredentialsLogin}>
                        <div className={styles.heading}>
                            <h1>Sign in</h1>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" />
                            <button type="submit">Continue</button>
                        </div>
                        <div className={styles.agree}>
                            <p>By Continuing, you agree to the Disflix <Link href='/legal/terms'>Conditions of Use and Privacy Notice.</Link> </p>
                        </div>
                        <div className={styles.other}>
                            <Link className={styles.forgotPassLink} href='/ap/forgotpassword'>Forgot your password?</Link>
                        </div>
                    </form>
                    <div className={styles.createAcc}>
                        <span><h5>New to Disflix?</h5></span>
                        <Link href='/ap/register'>Create your Disflix account</Link>
                    </div>
                </div>
            </div>
            <FooterSm />
        </>
    )
}

export default LoginPage;