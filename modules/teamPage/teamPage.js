/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Players from '../../components/players';
import { playerList } from '../../const/playerList';



const Products = () => {
    return (
        <section className="text-center p-14 grid place-items-center">
            <h1 className="text-2xl text-vagon-blue text-opacity-80">Our 2022./2023. senior squad</h1>
            <h3 className="p-2 text-vagon-blue text-opacity-70"><q>Our vagons are fast, from the first to the last</q></h3>
            <div className="mt-6 md:grid md:grid-cols-3 md:gap-8 w-3/4">
                {playerList.map((el) => (
                    <Players 
                        name={el.name}
                        number={el.number}
                        role={el.role}
                        key={el.name}
                    />
                ))}
            </div>
            
        </section>        
    );
}

export default Products;