"use client";
import styles from "./forgot.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import FormError from "@/components/formError/FormError";
import FooterSm from "@/components/footerSm/footerSm";
import { useState } from "react";
import { forgotPasswordWithCredentails } from "@/js/authActions";

const ForgotPass = () => {
  const form1Ref = useRef();
  const form2Ref = useRef();
  const errorRef = useRef();

  const [error, setError] = useState("");

  const nextForm = (e) => {
    e?.preventDefault();
    form1Ref.current.style.display = "none";
    form2Ref.current.style.display = "block";
  };

  async function handleForgotPassword(formData) {
    const email = formData.get("email");
    const res = await forgotPasswordWithCredentails({ email });
    if (res?.err) {
      setError(res?.err);
      errorRef.current.style.display = "block";
    }
    if(res?.msg === "emailSent"){
        form1Ref.current.style.display = 'none';
        form2Ref.current.style.display = 'block';
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brandLogo}>
            <Image alt="disflix" src="/brand/blackLogo.png" height={35} width={150} priority/>
          </div>
          <div ref={errorRef} style={{ display: "none" }}>
            <FormError errorMessage={error} />
          </div>
          <form
            ref={form1Ref}
            className={`${styles.form1} ${styles.active} ${styles.form}`}
            action={handleForgotPassword}
          >
            <div className={styles.heading}>
              <h1>Password assistance</h1>
            </div>
            <div className={styles.info}>
              <span>
                Enter the email address associated with your Disflix account.
              </span>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email adddress</label>
              <input type="email" name="email" />
              <button type="submit">Continue</button>
            </div>
          </form>
          <form
            ref={form2Ref}
            className={`${styles.form2} ${styles.form}`}
            style={{ display: "none" }}
          >
            <div className={styles.heading}>
              <h1>Verification required</h1>
            </div>
            <div className={styles.verifyPara}>
              <span>
                To continue, complete this verification. We've sent you a email
                with verification link. click on it to continue.
              </span>
            </div>
            <div className={styles.buttonSub}>
              <Link target={`_`} href={`https://mail.google.com`}>Open mail</Link>
            </div>
          </form>
        </div>
      </div>
      <FooterSm />
    </>
  );
};

export default ForgotPass;
