'use client'
import React, { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

type Props = {}

const Page = (props: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if ( pathname === '/u') {
            router.push('/u/dashboard');
        }
    }, [router, pathname]);


    return (
        <div
            style={{
            width: '100%',
            height: '100vh',
            display: 'flex'
            }}
        >
            <div
                style={{
                    backgroundColor: '#555555',
                    flex: '1',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h1>/u is loading...</h1>
            </div>
        </div>
    )
}

export default Page