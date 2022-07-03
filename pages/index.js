/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import styles from '../styles/Home.module.css';

import Logo from '../assets/logo.png'

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className="text-4xl mb-10">NK VAGON ZAGREB OFFICIAL WEB SITE</h1>
            <Image
                src={Logo}
                alt="Logo"
                width={160}
                height={180}
            />
            <Link href="/home">
                <button className="mt-10 p-8 text-2xl rounded-3xl border-2 border-vagon-blue bg-vagon-blue bg-opacity-30 shadow-lg hover:shadow-2xl">CLICK HERE TO ENTER</button>
            </Link>
            
        </div>
    );
}
