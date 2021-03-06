import React from 'react';
import Image from 'next/image';
import Link from 'next/dist/client/link';

import LogoImg from '../../assets/logo.png';
import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import Mail from '../../assets/email.png';

const Footer = () => {
    return (
        <footer className="h-4/6 relative justify-center items-center flex-col bg-gradient-to-r from-vagon-yellow via-slate-200 to-vagon-blue">
            <div className="p-8 grid grid-cols-3 gap-3">
                <div className="">
                    <div className="">
                        <h1 className="hidden md:block text-xl text-right">Sitemap</h1>
                    </div>
                    <div className="hidden md:grid grid-col-2 p-2 justify-end">
                        <div className="w-4/5"></div>
                        <div className="w-1/5 grid rows-6">
                            <Link href="/home">
                                <button>Home</button>
                            </Link>
                            <Link href="/team">
                                <button>Team</button>
                            </Link>
                            <Link href="/shop">
                                <button>Shop</button>
                            </Link>
                            <Link href="/fixtures">
                                <button>Fixtures</button>
                            </Link>
                            <Link href="/contact">
                                <button>Contact</button>
                            </Link>
                            <Link href="/blog">
                                <button>Blog</button>
                            </Link>
                        </div>
                    </div>                 
                </div>
                <div className="text-center relative">
                    <Image
                        src={LogoImg}
                        width={135}
                        height={150}
                        alt="Design logo"
                    />
                    <p className="pt-2">Copyright ?? 2022 Luka Klein - FESB</p>
                </div>
                <div className="hidden md:grid grid-rows-3 content-center">
                    <div className="m-2 flex content-center">
                        <Image 
                            src={Instagram}
                            width={48}
                            height={30}
                            alt="Instagram Logo"
                        />
                        <button className="p-2">nk_vagon1951</button>
                    </div>  
                    <div className="m-2 flex content-center">
                        <Image 
                            src={Facebook}
                            width={48}
                            height={30}
                            alt="Facebook Logo"
                        />
                        <button className="p-2">NK Vagon Zagreb</button>
                    </div>      
                    <div className="m-2 flex content-center">
                        <Image 
                            src={Mail}
                            width={48}
                            height={30}
                            alt="Mail Logo"
                        />
                        <button className="p-2">nkvagonzagreb@vagon.com</button>
                    </div>                        
                </div>
            </div>

        </footer>
    );
};

export default Footer;