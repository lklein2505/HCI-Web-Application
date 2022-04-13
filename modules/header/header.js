import React from 'react';
import Image from 'next/image';

import LogoImg from '../../assets/logo.png';
import Navbar from '../../components/navbar/navbar';

const Header = () => {
    return (
        <header className="h-4/6 relative flex justify-center items-center">
            <main className="my-0 mx-auto flex flex-col min-w-sm max-w-6xl w-full">
                <section className="flex justify-between items-center">
                    <Image
                        src={LogoImg}
                        layout="fixed"
                        width={150}
                        height={150}
                        alt="Design logo"
                    />
                    <Navbar selected="Home" />
                </section>
            </main>
        </header>
    );
};

export default Header;
