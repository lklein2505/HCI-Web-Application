import Header from '../modules/header/header';
import Footer from '../modules/footer/footer';

const ContactPage = () => {

    return (
        <>
            <Header/>
            <div className="bg-[url('../assets/backgroundStripes.png')] bg-cover">
                <div className= "bg-white m-auto w-2/3">
                    <div className="text-center p-14 grid place-items-center">
                        <h1 className="text-2xl text-vagon-blue text-opacity-80">Feel free to contact us!</h1>
                        <h3 className="p-2 text-vagon-blue text-opacity-70"><q>Our support team will be on disposition!</q></h3>
                        <div className="border-2 border-vagon-blue bg-vagon-blue bg-opacity-20 md:w-2/4 w-3/4 m-5 rounded-3xl shadow-md">
                            <div className="grid grid-rows-3 py-32 px-auto">
                                <div className="m-2 flex justify-center">
                                    <p>Instagram: <button className="p-2">nk_vagon1951</button></p> 
                                </div>  
                                <div className="m-2 flex justify-center">
                                    <p>Facebook: <button className="p-2">NK Vagon Zagreb</button></p>                        
                                </div>      
                                <div className="m-2 flex justify-center">
                                    <p>E-mail: <button className="p-2">nkvagonzagreb@vagon.com</button></p>
                                </div>
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