import styles from './watch.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const WatchHeader = () =>{

    const router = useRouter();

    return(
        <div className={styles.container}>
            <div className={styles.backArrow}>
                <button onClick={()=> router.back()}>
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.758 3.054 C 7.416 3.147,7.160 3.395,7.061 3.729 C 6.985 3.987,6.985 4.053,7.063 4.323 C 7.125 4.534,7.225 4.638,10.853 8.270 L 14.579 12.000 10.871 15.710 C 7.994 18.589,7.145 19.460,7.083 19.600 C 6.984 19.819,6.975 20.182,7.062 20.391 C 7.144 20.587,7.381 20.831,7.580 20.924 C 7.818 21.034,8.175 21.025,8.422 20.901 C 8.576 20.824,9.545 19.876,12.745 16.671 C 16.526 12.885,16.876 12.524,16.935 12.343 C 17.017 12.094,17.017 11.906,16.935 11.657 C 16.876 11.476,16.528 11.117,12.768 7.353 C 9.951 4.532,8.609 3.214,8.483 3.147 C 8.252 3.024,7.992 2.990,7.758 3.054 " fill="currentColor" stroke="none" fillRule="evenodd"></path></svg>
                    <h2>Back</h2>
                </button>
            </div>
            <div className={styles.brandLogo}>
                <Link href={`/`}>
                    <Image src={`/brand/whiteLogo.png`} priority alt={`disflix-logo`} height={24} width={98} />
                </Link>
            </div>
        </div>
    )
}

export default WatchHeader;