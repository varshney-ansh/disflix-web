'use client'
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import FormError from '@/components/formError/FormError';
import FooterSm from '@/components/footerSm/footerSm';
import bcrypt from 'bcryptjs';
import { resetPasswordWithCredentials } from '@/js/authActions';
import { useState } from "react";
import { useRef } from "react";

const ResetPasswordPage = ({searchParams: { token }}) =>{

    const [error, setError] = useState("");
    const errorRef = useRef();
    const form1Ref = useRef();
    const form2Ref = useRef();

    async function handleResetPassword(formData){
        const password = formData.get('newPassword');
        const res = await resetPasswordWithCredentials({token, password});
        if (res?.err) {
            setError(res?.err);
            errorRef.current.style.display = "block";
        }

        if(res?.msg === 'success'){
            form1Ref.current.style.display = "none";
            form2Ref.current.style.display = "block";
        }

    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brandLogo}>
                        <Image alt="disflix" src="/brand/blackLogo.png" height={35} width={150} priority/>
                    </div>
                    <div ref={errorRef} style={{display: 'none'}}>
                        <FormError errorMessage={error} />
                    </div>
                    
                    <form ref={form1Ref} className={styles.form} action={handleResetPassword}>
                        <div className={styles.heading}>
                            <h1>Password assistance</h1>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">New Password</label>
                            <input type="password" name="newPassword" placeholder="Atleast 6 characters" />
                        </div>
                        <div className={styles.buttonSub}>
                            <button>Continue</button>
                        </div>
                    </form>
                    <form ref={form2Ref} className={`${styles.form2} ${styles.form}`} style={{display: "none"}}>
                        <div className={styles.heading}>
                            <h1>Password assistance</h1>
                        </div>
                        <div className={styles.verifyPara}>
                            <span>You are all set! Your password has been reset.</span><br />
                            <span>You can now signin into your account with new password. keep exploring disflix!</span>
                        </div>
                        <div className={styles.buttonSub}>
                            <Link href={`/ap/signin`}>Login now</Link>
                        </div>
                    </form>
                </div>
            </div>
            <FooterSm />
        </>
    )
}

export default ResetPasswordPage;