/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';

import Header from '../modules/header/header.js';
import Footer from '../modules/footer/footer.js';
import Team from '../modules/teamSection/teamSection.js';
import Shop from '../modules/shopSection/shopSection.js';
import Fixtures from '../modules/fixturesSection/fixtureSection.js';

const Hello = () => {
    return (
        <>
            <Header />
            <div className="bg-[url('../assets/backgroundStripes.png')] bg-cover">
                <div className= "bg-white m-auto w-2/3">
                    <Team />
                    <Shop />
                    <Fixtures />           
                </div>              
            </div>
            <Footer />
        </>
    );   
}

export default Hello;
