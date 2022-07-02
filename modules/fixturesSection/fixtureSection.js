/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import VagonLogo from '../../assets/logo.png';
import HajdukLogo from '../../assets/hajduk.png';
import DinamoLogo from '../../assets/dinamo.png';
import LokomotivaLogo from '../../assets/lokomotiva.png';

const Fixtures = () => {
    return (
        <section className="text-center p-14 grid place-items-center">
            <h1 className="text-2xl text-vagon-blue text-opacity-80">Last fixtures</h1>
            <div className="border-2 border-vagon-blue bg-vagon-blue bg-opacity-20 w-3/4 m-5 rounded-3xl">
                <div className="grid grid-cols-5 p-5">
                    <div className="grid grid-rows-3 col-span-2">
                        <div className="m-2 flex content-center items-center justify-end px-3">
                            <p className="md:pr-3 p-0 hidden md:inline-block">NK Vagon Zagreb</p>
                            <Image 
                                src={VagonLogo}
                                width={35}
                                height={40}
                                alt="VagonLogo"
                            />
                        </div>
                        <div className="m-2 flex content-center items-center justify-end px-3">
                            <p className="md:pr-3 p-0 hidden md:inline-block">HNK Hajduk Split</p>
                            <Image 
                                src={HajdukLogo}
                                width={40}
                                height={40}
                                alt="HajdukLogo"
                            />
                        </div>
                        <div className="m-2 flex content-center items-center justify-end px-3">
                            <p className="md:pr-3 p-0 hidden md:inline-block">GNK Dinamo Zagreb</p>
                            <Image 
                                src={DinamoLogo}
                                width={35}
                                height={40}
                                alt="DinamoLogo"
                            />
                        </div>
                    </div>
                    <div className="grid grid-rows-3 col-span-1 place-items-center">
                        <div className="bg-white border-2 border-vagon-blue w-12 h-8 rounded-2xl text-center">
                            <p className="pt-0.5">0 : 3</p>
                        </div>
                        <div className="bg-white border-2 border-vagon-blue w-12 h-8 rounded-2xl text-center">
                            <p className="pt-0.5">3 : 2</p>
                        </div>
                        <div className="bg-white border-2 border-vagon-blue w-12 h-8 rounded-2xl text-center">
                            <p className="pt-0.5">2 : 2</p>
                        </div>
                    </div>
                    <div className="grid grid-rows-3 col-span-2">
                        <div className="m-2 flex content-center items-center px-3">
                            <Image 
                                src={LokomotivaLogo}
                                width={30}
                                height={40}
                                alt="LokomotivaLogo"
                            />
                            <p className="md:pl-3 p-0 hidden md:inline-block">NK Lokomotiva Zagreb</p>
                        </div>
                        <div className="m-2 flex content-center items-center px-3">
                            <Image 
                                src={VagonLogo}
                                width={35}
                                height={40}
                                alt="VagonLogo"
                            />
                            <p className="md:pl-3 p-0 hidden md:inline-block">NK Vagon Zagreb</p>
                        </div>
                        <div className="m-2 flex content-center items-center px-3">
                            <Image 
                                src={VagonLogo}
                                width={35}
                                height={40}
                                alt="VagonLogo"
                            />
                            <p className="md:pl-3 p-0 hidden md:inline-block">NK Vagon Zagreb</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link href={"/fixtures"}>
                <button className="m-4 px-12 py-2 border-solid border-2 border-vagon-blue rounded-3xl bg-vagon-yellow bg-opacity-60">See more</button>
            </Link>
        </section>
    );
}

export default Fixtures;