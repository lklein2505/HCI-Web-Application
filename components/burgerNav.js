import { navigationItems } from "../const/navbarList";
import Navbar from "./navbar/navbar";

const BurgerNavigation = ({ isOpen }) => {
    return (
       <main className={`${ !isOpen ? "translate-y-full" : "translate-x-0"} 
            top-50 transform translate fixed m-0 p-0 bg-vagon-yellow bg-opacity-90 md:hidden w-screen transition duration-500 ease-in-out flex-col justify-center items-center h-screen z-40`}
        >
            {navigationItems.map((e) => (
                <li
                    key={e}
                    className="text-center mt-14 list-none p-0"
                >
                    {e}
                </li>
            ))}
       </main> 
    );
}

export default BurgerNavigation;