/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import AuthContext from '../../stores/authContext';

import LogoImg from '../../assets/logo.png';
import Navbar from '../../components/navbar/navbar';
import Hamburger from '../../public/icons8-menu.svg';
import BurgerNavigation from '../../components/burgerNav';

const Header = () => {
    const { user, login, logout } = useContext(AuthContext)

    const [isClicked, setIsClicked] = useState(false);
    const router = useRouter();

    return (
        <header className="h-4/6 relative justify-center items-center flex-col bg-gradient-to-r from-vagon-yellow via-slate-200 to-vagon-blue">
            <div className="text-center relative">
                <Image
                    src={LogoImg}
                    width={135}
                    height={150}
                    alt="Design logo"
                />
            </div>
            <div className="flex justify-center m-4 md:hidden">
                <BurgerNavigation isOpen={isClicked} />
                <Image
                    onClick={() => setIsClicked(!isClicked)}
                    className={`transform scale-90 cursor-pointer z-50 transition-all ease-linear duration-700 ${
                        isClicked ? 'transform rotate-90' : ''
                    }`}
                    src={Hamburger}
                    layout="fixed"
                    width={30}
                    height={30}
                    alt="Menu"
                />
            </div>
            <div className="flex justify-between">
                <div className="w-24 ml-10"></div>
                <div className="text-center">
                    <Navbar selected={router.pathname} />
                </div>
                {!user && <div className="hidden md:inline-block cursor-pointer w-24 mr-10 pt-3 border-b-2 font-normal rounded-t-3xl text-base text-center text-black hover:text-vagon-blue hover:text-opacity-60 hover:bg-neutral-200 border-l-2 bg-white">
                    <button onClick={login}>Log In</button>                    
                </div>}
                {user && <div className="hidden md:inline-block cursor-pointer w-24 mr-10 pt-3 border-b-2 font-normal rounded-t-3xl text-base text-center text-black hover:text-vagon-blue hover:text-opacity-60 hover:bg-neutral-200 border-l-2 bg-white">
                    <button onClick={logout}>Log Out</button>                    
                </div>}
            </div>
        </header>
    );
};

export default Header;
