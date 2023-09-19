import React from "react";

import Nav from "./Nav";

const Layout = ({ children }) => {
    return (
        <div className="flex">
            <Nav />
            <main
                className={`w-full min-h-screen relative mt-16 bg-gray-100 md:px-8 max-w-screen-2xl mx-auto`}
            >
                {children}
            </main>
        </div>
    );
};

export default Layout;
