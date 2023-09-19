import React, { useState } from "react";
import Nav from "./Nav";
import NavLeftBar from "./NavLeftBar";

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(true);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="flex">
            <Nav handleShowMenu={handleShowMenu} />
            <NavLeftBar showMenu={showMenu} />
            <main
                className={`w-full min-h-screen relative mt-16 transition-all bg-gray-100 overflow-x-hidden lg:px-4 ${
                    showMenu ? "-ml-[258px] lg:ml-[258px]" : "ml-0"
                }`}
            >
                {children}
            </main>
        </div>
    );
};

export default Layout;
