/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import TeamImage from '../../assets/teamImage.png';

export default function Team() {
    return (
        <section className="text-center p-14 grid place-items-center">
            <h1 className="text-2xl text-vagon-blue text-opacity-80">Meet our senior squad for new season</h1>
            <h3 className="p-2 text-vagon-blue text-opacity-70"><q>Our vagons are fast, from the first to the last</q></h3>
            <div className="m-2 flex justify-center border-solid border-4 border-vagon-blue rounded-3xl overflow-hidden sm:w-4/5 w-full">
                <Image 
                    src={TeamImage}
                    width={1000}
                    height={600}
                    alt="Team photo"
                 />
            </div>
            <Link href={"/team"}>
                <button className="m-6 sm:px-12 sm:py-2 px-8 py-1 border-solid border-2 border-vagon-blue rounded-3xl bg-vagon-yellow bg-opacity-60">Meet the team</button>
            </Link> 
            
        </section>        
    );
}