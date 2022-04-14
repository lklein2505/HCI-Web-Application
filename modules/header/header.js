import React from 'react';
import Image from 'next/image';

import LogoImg from '../../assets/logo.png';
import Navbar from '../../components/navbar/navbar';

const Header = () => {
    return (
        <header className="h-4/6 relative justify-center items-center flex-col bg-gradient-to-r from-vagon-blue to-vagon-yellow">
            <div className="text-center relative">
                <Image
                    src={LogoImg}
                    width={140}
                    height={150}
                    alt="Design logo"
                />
            </div>
            <div className="text-center pt-2">
                <Navbar selected="Home" />
            </div>
        </header>
    );
};

export default Header;
