import React from "react";
import MenuButton from "./MenuButton";

export default function Nav({ showMenu, handleShowMenu }) {
    return (
        <>
            <aside
                className={`h-16 text-white fixed top-0 transition-all left-0 w-full z-50 bg-gradient-to-t from-blue-500 to-blue-700 flex items-center px-4 shadow-lg `}
            >
                <div className="flex items-center justify-center">
                    <MenuButton
                        showMenu={showMenu}
                        handleShowMenu={handleShowMenu}
                    />
                    <svg
                        className="mr-0.5 w-8"
                        viewBox="0 0 46 45"
                        fill="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M36.2186 0.507535C32.9408 -0.867461 29.1054 0.64744 27.6518 3.89116L24.2511 11.4804L13.8052 5.46374C9.51505 2.99267 3.93397 4.4078 1.33953 8.62452C-2.87834 15.4798 3.52006 23.7456 11.4055 21.6283L20.8388 19.0953L14.7751 32.6272C12.7519 37.142 14.8103 42.3535 19.3726 44.2673C26.8663 47.4109 34.5573 39.8495 31.3535 32.4883L26.9261 22.3156C26.3624 21.0206 26.2502 19.6691 26.5013 18.4057C29.6105 19.0887 32.0194 21.819 31.9221 25.2222L31.8702 27.0395C31.6823 33.6136 40.5629 36.0382 44.053 30.3658C45.9296 27.3157 44.9353 23.3941 41.832 21.6067L29.0942 14.2699C30.0871 13.5113 31.3071 13.0026 32.6776 12.8693L34.121 12.7288C40.8228 12.0769 42.3659 3.08627 36.2186 0.507535Z"
                            fill="url(#paint0_linear_2232_20)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_2232_20"
                                x1="45.0596"
                                y1="2.18388"
                                x2="3.66382"
                                y2="22.5002"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#FFB800" />
                                <stop offset="0.5224" stop-color="#F6DAAF" />
                                <stop offset="1" stop-color="#FF932F" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="flex flex-col items-center justify-end">
                        <p className="font-bold tracking-wide text-lg">
                            Seovileo
                        </p>
                        <p className="w-max text-[10px] -mt-2 ml-2 text-gray-200">
                            Tailwind Blocks
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
}
