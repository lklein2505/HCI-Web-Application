/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import BlueJersey from '../../assets/blueJersey.jpg';
import YellowJersey from '../../assets/yellowJersey.jpg';
import Scarf from '../../assets/scarf1.jpg';

import Product from '../../components/shopSection';

const products = [
    {
        imageSrc: BlueJersey,
        productName: 'Blue Jersey',
        price: '14.99€',
    },
    {
        imageSrc: YellowJersey,
        productName: 'Yellow Jersey',
        price: '14.99€',
    },
    {
        imageSrc: Scarf,
        productName: 'Scarf',
        price: '10.99€',
    },
];

const Products = () => {

    const router = useRouter();

    return (
        <section className="text-center p-14 grid place-items-center">
            <h1 className="text-2xl text-vagon-blue text-opacity-80">Be part of our story with brand new products in our web shop</h1>
            <h3 className="p-2 text-vagon-blue text-opacity-70"><q>Join our crew, become yellow and blue!</q></h3>
            <div className="mt-6 md:grid md:grid-cols-3 md:gap-8 w-3/4">
                {products.map((el) => (
                    <Product 
                        imageSrc={el.imageSrc}
                        productName={el.productName}
                        price={el.price}
                        key={el.productName}
                    />
                ))}
            </div>
            <Link href={"/shop"}>
                <button className="m-6 px-12 py-2 border-solid border-2 border-vagon-blue rounded-3xl bg-vagon-yellow bg-opacity-60">Check out our shop</button>
            </Link>
            
        </section>        
    );
}

export default Products;