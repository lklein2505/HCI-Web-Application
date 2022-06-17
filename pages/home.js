/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';

import Header from '../modules/header/header.js';
import TeamImage from '../assets/teamImage.png';
import BlueJersey from '../assets/blueJersey.jpg';
import YellowJersey from '../assets/yellowJersey.jpg';
import Scarf from '../assets/scarf1.jpg';

const Hello = () => {
    return (
        <>
            <Header />
            <div className="bg-[url('../assets/backgroundStripes.png')] w-screen h-screen">
                <div className="h-screen bg-white m-auto w-2/3">
                    <section className="text-center p-14">
                        <h1 className="text-2xl text-vagon-blue text-opacity-80">Meet our senior squad for new season</h1>
                        <h3 className="p-2 text-vagon-blue text-opacity-70"><q>Our vagons are fast, from the first to the last</q></h3>
                        <div className="m-2 flex justify-center border-solid border-4 border-vagon-blue rounded-3xl overflow-hidden">
                            <Image 
                                src={TeamImage}
                                layout="fixed"
                                alt="Team photo"
                            />
                        </div>
                        <button className="m-6 px-12 py-2 border-solid border-2 border-vagon-blue rounded-3xl bg-vagon-yellow bg-opacity-60">Meet the team</button>
                    </section>
                    <section className="text-center p-14">
                        <h1 className="text-2xl text-vagon-blue text-opacity-80">Be part of our story with brand new products in our web shop</h1>
                        <h3 className="p-2 text-vagon-blue text-opacity-70"><q>Join our crew, become yellow and blue!</q></h3>
                        <div className="mt-6 grid grid-cols-3 gap-4">
                            <div className="h-96 border-2 border-vagon-blue rounded-t-3xl overflow-hidden">
                                <div className="h-3/5 relative overflow-hidden">
                                    <Image
                                        src={BlueJersey}
                                        alt="Blue Jersey"
                                    />
                                </div>
                                <div className="h-2/5 grid rows-3 p-4 border-t-2 border-t-vagon-blue bg-vagon-blue bg-opacity-20">
                                    <p className="text-center p-2">Home jersey</p>
                                    <p className="text-center p-2">14.99€</p>
                                    <button className="p-2 border-2 border-vagon-blue rounded-3xl bg-emerald-600 text-white">BUY NOW</button>
                                </div>
                            </div>
                            <div className="h-96 border-2 border-vagon-blue rounded-t-3xl overflow-hidden">
                                <div className="h-3/5 relative overflow-hidden">
                                    <Image
                                        src={YellowJersey}
                                        alt="Yellow Jersey"
                                    />
                                </div>
                                <div className="h-2/5 grid rows-3 p-4 border-t-2 border-t-vagon-blue bg-vagon-blue bg-opacity-20">
                                    <p className="text-center p-2">Away jersey</p>
                                    <p className="text-center p-2">14.99€</p>
                                    <button className="p-2 border-2 border-vagon-blue rounded-3xl bg-emerald-600 text-white">BUY NOW</button>
                                </div>
                            </div>
                            <div className="h-96 border-2 border-vagon-blue rounded-t-3xl overflow-hidden">
                                <div className="h-3/5 relative overflow-hidden">
                                    <Image
                                        src={Scarf}
                                        alt="Scarf"
                                    />
                                </div>
                                <div className="h-2/5 grid rows-3 p-4 border-t-2 border-t-vagon-blue bg-vagon-blue bg-opacity-20">
                                    <p className="text-center p-2">Scarf</p>
                                    <p className="text-center p-2">10.99€</p>
                                    <button className="p-2 border-2 border-vagon-blue rounded-3xl bg-emerald-600 text-white">BUY NOW</button>
                                </div>
                            </div>
                        </div>
                        <button className="m-6 px-12 py-2 border-solid border-2 border-vagon-blue rounded-3xl bg-vagon-yellow bg-opacity-60">Check our shop</button>
                    </section>
                </div>
            </div>
        </>
    );   
}

export default Hello;
