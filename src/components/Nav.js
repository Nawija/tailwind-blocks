import React from "react";
import MenuButton from "./MenuButton";
import { StaticImage } from "gatsby-plugin-image";

export default function Nav({ showMenu, handleShowMenu }) {
    return (
        <>
            <aside
                className={`h-16 text-white fixed top-0 transition-all left-0 w-full z-10 bg-gradient-to-t from-blue-500 to-blue-700 flex items-center px-4 shadow-lg`}
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
                    <div className="flex flex-col items-center justify-end">
                        <p className="font-bold tracking-wide text-lg">
                            Seovileo
                        </p>
                        <p className="w-max text-[10px] -mt-2 ml-2 text-gray-300">
                            Tailwind Blocks
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
}
