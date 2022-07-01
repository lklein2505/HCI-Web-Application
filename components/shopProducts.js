import Image from 'next/image';

const Product = ({ imageSrc, productName, price }) => (
    <div className="md:h-96 h-64 border-2 border-vagon-blue rounded-t-3xl overflow-hidden md:m-0 m-5">
        <div className="md:h-3/5 h-2/5 relative overflow-hidden">
            <Image
                src={imageSrc}
                alt="Shop article"
            />
        </div>
        <div className="md:h-2/5 h-3/5 grid rows-3 p-2 border-t-2 border-t-vagon-blue bg-vagon-blue bg-opacity-20">
            <p className="text-center p-1">{productName}</p>
            <p className="text-center p-1">{price}</p>
            <button className="p-1 border-2 border-vagon-blue rounded-3xl bg-emerald-600 text-white text-sm">ADD TO THE CART</button>
        </div>
    </div>
);

export default Product;