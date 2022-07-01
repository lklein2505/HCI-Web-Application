import { useRouter } from 'next/router';
import Header from '../modules/header/header';
import Footer from '../modules/footer/footer';
import Team from '../modules/teamPage/teamPage';

const TeamPage = () => {
    const router = useRouter();

    return (
        <>
            <Header/>
            <div className="bg-[url('../assets/backgroundStripes.png')] bg-cover">
                <div className= "bg-white m-auto w-2/3">
                    <Team/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default TeamPage;