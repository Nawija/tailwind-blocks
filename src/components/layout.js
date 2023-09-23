import React, { useState } from "react";
import Nav from "./Nav";
import NavLeftBar from "./NavLeftBar";

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(true);
    const [wrapperWidth, setWrapperWidth] = useState("100%");

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleCloseLeftMenu = () => {
        setShowMenu(setShowMenu(false));
    };

    function updateWrapperWidth(newWidth) {
        setWrapperWidth(newWidth);
    }

    return (
        <div className="flex">
            <Nav
                showMenu={showMenu}
                handleShowMenu={handleShowMenu}
                updateWrapperWidth={updateWrapperWidth}
            />
            <NavLeftBar showMenu={showMenu} />

            <div
                onClick={handleCloseLeftMenu}
                style={{ maxWidth: wrapperWidth }}
                className={`w-full bg-gray-100 min-h-screen relative pt-[4.5rem] pb-3 transition-all sm:px-4 ${
                    showMenu ? "h-screen md:ml-[258px]" : "ml-0"
                }`}
            >
                <main className="anim-opacity">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
