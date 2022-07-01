import { useRouter } from 'next/router';
import Header from '../modules/header/header';
import Footer from '../modules/footer/footer';
import Shop from '../modules/shopSection/shopSection.js';

const ShopPage = () => {
    const router = useRouter();

    return (
        <>
            <Header/>
            <div className="bg-[url('../assets/backgroundStripes.png')] bg-cover">
                <div className= "bg-white m-auto w-2/3">
                    <Shop/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ShopPage;