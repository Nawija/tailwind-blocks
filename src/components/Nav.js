import React from "react";
import MenuButton from "./MenuButton";
import { StaticImage } from "gatsby-plugin-image";

export default function Nav({ showMenu, handleShowMenu }) {
    return (
        <>
            <aside
                className={`h-16 text-white fixed top-0 transition-all left-0 w-full z-[999] bg-blue-500 flex items-center px-4 shadow-lg`}
            >
                <div className="flex-sc">
                    <MenuButton
                        showMenu={showMenu}
                        handleShowMenu={handleShowMenu}
                    />
                    <StaticImage
                        quality={100}
                        placeholder="blurred"
                        src="../images/favicon.png"
                        className="mr-1 w-10"
                    />
                    <div>
                        <p className="font-bold tracking-wide text-lg">
                            Seovileo
                        </p>
                        <p className="w-max text-[10px] -mt-1.5 text-gray-300">
                            Tailwind Blocks
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
}
