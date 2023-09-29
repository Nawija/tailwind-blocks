import React, { useState } from "react";
import Nav from "./Nav";
import NavLeftBar from "./NavLeftBar";
import ShareMenu from "./ShareMenu";

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(true);
    const [shareMenu, setShareMenu] = useState(false);

    const handleShowMenu = () => setShowMenu(!showMenu);
    const handleShareMenu = () => setShareMenu(true);
    const handleShareMenuClose = () => setShareMenu(false);

    const handleCloseLeftMenu = () => {
        if (window.innerWidth <= 1024) {
            setShowMenu(false);
        }
    };

    return (
        <div className="flex">
            <Nav
                showMenu={showMenu}
                handleShowMenu={handleShowMenu}
                shareMenu={shareMenu}
                handleShareMenu={handleShareMenu}
            />
            <NavLeftBar showMenu={showMenu} />
            <ShareMenu
                shareMenu={shareMenu}
                handleShareMenuClose={handleShareMenuClose}
            />
            <div
                onClick={handleCloseLeftMenu}
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
