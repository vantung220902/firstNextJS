import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link'
function User() {
    const router = useRouter();
   const handleClick = () => {
       router.push('/login');
    }
    return (
        <div>
            <Head>
                <title>User Details</title>
            </Head>
            <Link href="/admin/post">
            <a>Go to the Post</a>
            </Link>
            <h1>User Page {router.query.id}</h1>
            <button onClick={handleClick} type="button">Go to Admin</button>
        </div>
    )
}

export default User
