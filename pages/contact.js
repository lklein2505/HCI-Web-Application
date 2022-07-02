import Header from '../modules/header/header';
import Footer from '../modules/footer/footer';

import Image from 'next/dist/client/image';

import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import Mail from '../assets/email.png';

const ContactPage = () => {

    return (
        <>
            <Header/>
            <div className="bg-[url('../assets/backgroundStripes.png')] bg-cover">
                <div className= "bg-white m-auto w-2/3">
                    <div className="text-center p-14 grid place-items-center">
                        <h1 className="text-2xl text-vagon-blue text-opacity-80">Feel free to contact us!</h1>
                        <h3 className="p-2 text-vagon-blue text-opacity-70"><q>Our support team will be on disposition!</q></h3>
                        <div className="hidden md:grid grid-rows-3 content-center py-32 px-auto">
                            <div className="m-2 flex content-center">
                                <p>Instagram: <button className="p-2">nk_vagon1951</button></p> 
                            </div>  
                            <div className="m-2 flex content-center">
                                <p>Facebook: <button className="p-2">NK Vagon Zagreb</button></p>                        
                            </div>      
                            <div className="m-2 flex content-center">
                                <p>E-mail: <button className="p-2">nkvagonzagreb@vagon.com</button></p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ContactPage;