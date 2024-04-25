'use client'
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';

const LogoutPage = () =>{
    const router = useRouter();
    signOut({redirect: false, callbackUrl: "/"});
    
    useEffect(()=>{
        if (signOut) {
            router.push("/");
        }
    }, [])

    return(
        <div>Loging.. Out</div>
    )
}

export default LogoutPage;