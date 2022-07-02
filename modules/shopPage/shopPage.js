/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Image from 'next/dist/client/image';
import { useState } from 'react';

import Product from '../../components/shopProducts';
import SearchIcon from '../../public/icons8-magnifier-32.png'
import { productList } from '../../const/productList';

const Products = () => {
    const [filter, setFilter] = useState("");

    const searchText = (event) => {
        setFilter(event.target.value);
    }

    let dataSearch = productList.filter(item => {
        return Object.keys(item).some(key => 
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    })

    return (
        <section className="text-center p-14 grid place-items-center">
            <h1 className="text-2xl text-vagon-blue text-opacity-80">Be part of our story with brand new products in our web shop</h1>
            <h3 className="p-2 text-vagon-blue text-opacity-70"><q>Join our crew, become yellow and blue!</q></h3>
            <div className="m-4 p-2 flex justify-center">
                <Image
                    src={SearchIcon}
                    alt="SearchIcon"
                    width={30}
                    height={30}
                />
                <input 
                    type="text"
                    placeholder="Search products..."
                    value={filter}
                    onChange={searchText.bind(this)}
                    className="border-2 border-vagon-blue rounded-2xl px-2"
                />
            </div>
            <div className="mt-6 md:grid md:grid-cols-3 md:gap-8 w-3/4">
                {dataSearch.map((el) => (
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