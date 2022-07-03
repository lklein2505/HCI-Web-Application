import { useState } from "react";
import Link from "next/dist/client/link";
import { useContext } from 'react';
import AuthContext from '../stores/authContext';

import { navigationItems } from "../const/navbarList";

const BurgerNavigation = ({ isOpen }) => {
    const { user, login, logout } = useContext(AuthContext)
    

    return (
       <main className={`${ !isOpen ? "translate-y-full" : "translate-x-0"} 
            top-50 transform translate fixed m-0 p-0 bg-vagon-yellow bg-opacity-90 md:hidden w-screen transition duration-500 ease-in-out flex-col justify-center items-center h-screen z-40`}
        >
            {navigationItems.map((e) => (
                <li
                    key={e}
                    className="text-center mt-12 list-none p-0"
                >
                    <Link href={"/" + e.toLowerCase()}>{e}</Link>                   
                </li>
            ))}
            {!user && <div className="text-center mt-14 list-none p-0">
                <button onClick={login}>Log In</button>                    
            </div>}
            {user && <div className="text-center mt-14 list-none p-0">
                <button onClick={logout}>Log Out</button>                    
            </div>}
       </main> 
    );
}

export default BurgerNavigation;