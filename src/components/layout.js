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
    const handleTimeCloseLeftMenu = () => {
        setTimeout(() => {
            setShowMenu(false);
        }, 2000);
    };
    return (
        <div className="flex">
            <Nav handleShowMenu={handleShowMenu} />
            <NavLeftBar
                handleTimeCloseLeftMenu={handleTimeCloseLeftMenu}
                showMenu={showMenu}
            />

            <div
                onClick={handleCloseLeftMenu}
                className={`w-full bg-gray-100 min-h-screen relative pt-[4.5rem] pb-3 transition-all overflow-x-hidden sm:px-4 ${
                    showMenu ? "h-screen md:ml-[258px]" : "ml-0"
                }`}
            >
                <main className="z-10">{children}</main>
                <div
                    className={`absolute top-0 left-0 w-full bg-black/80 duration-300 ${
                        !showMenu
                            ? ""
                            : "h-full anim-opacity"
                    }`}
                />
            </div>
        </div>
    );
};

export default Layout;
