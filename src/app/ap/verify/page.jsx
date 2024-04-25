import { verifyWithCredentials } from "@/js/authActions";
import styles from './sub.module.css';
import Image from "next/image";
import Link from "next/link";

const VerifyPage = async({ searchParams: {token}}) =>{
    let succeed;
    const res = await verifyWithCredentials(token);
    if(res?.msg == 'Success'){
        succeed = true;
    }

    return(
        <div className={styles.container}>
            <div className={styles.div}>
                <div className={styles.brand}>
                    <Image src={`/brand/blackLogo.png`} height={35} width={157} style={{aspectRatio: 35/157}} alt="Disflix_Logo" />
                </div>
                <div className={styles.loading}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z"/></svg>
                </div>
                <div className={styles.p}>
                    {
                        succeed ? (<p>Your email address has successfull been verified. Thank you for joining disflix.</p>) : (<p>Something Went Wrong</p>)
                    }
                </div>
                <div className={styles.content}>
                    <Link href={`/`}>Go to disflix home</Link>
                </div>
            </div>
        </div>
    )
}

export default VerifyPage;