import React, { useState } from "react";
import Nav from "./Nav";
import NavLeftBar from "./NavLeftBar";

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(true);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleCloseLeftMenu = () => {
        setShowMenu(setShowMenu(false));
    };

    return (
        <div className="flex overflow-x-hidden">
            <Nav handleShowMenu={handleShowMenu} />
            <NavLeftBar
                showMenu={showMenu}
            />

            <div
                onClick={handleCloseLeftMenu}
                className={`w-full bg-gray-100 min-h-screen relative pt-[4.5rem] pb-3 transition-all overflow-x-hidden sm:px-4 ${
                    showMenu ? "h-screen md:ml-[258px]" : "ml-0"
                }`}
            >
                <main className="z-10 anim-opacity">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
