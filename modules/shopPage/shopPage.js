/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import BlueJersey from '../../assets/blueJersey.jpg';
import YellowJersey from '../../assets/yellowJersey.jpg';
import Scarf from '../../assets/scarf1.jpg';

import Product from '../../components/shopProducts';
import { productList } from '../../const/productList';

const Products = () => {
    return (
        <section className="text-center p-14 grid place-items-center">
            <h1 className="text-2xl text-vagon-blue text-opacity-80">Be part of our story with brand new products in our web shop</h1>
            <h3 className="p-2 text-vagon-blue text-opacity-70"><q>Join our crew, become yellow and blue!</q></h3>
            <div className="mt-6 md:grid md:grid-cols-3 md:gap-8 w-3/4">
                {productList.map((el) => (
                    <Product 
                        imageSrc={el.image}
                        productName={el.name}
                        price={el.price}
                        key={el.productName}
                    />
                ))}
            </div>            
        </section>        
    );
}

export default Products;