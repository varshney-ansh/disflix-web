import Navbar from "@/components/navbar/Navbar";
import styles from './not.module.css';
import Image from "next/image";
import Footer from "@/components/footer/footer";
import Link from "next/link";

const NotFoundPage = () =>{
    return(
        <>
            <div className={styles.container}>
                <Image src='/icons/404-ani.png' width={130} height={140} />
                <div className={styles.content}>
                    <div>
                        <h2>It's not here.</h2>
                        <p>There is nothing at the web address you've entered. Let's find you a great video to watch instead.</p>
                    </div>
                    <Link href={`/`}>Go to disflix home</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFoundPage;