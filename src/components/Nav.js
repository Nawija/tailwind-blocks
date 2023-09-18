import React, { useState } from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import { FiMenu } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { IoMdNavigate } from "react-icons/io";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { StaticImage } from "gatsby-plugin-image";

export default function Nav() {
    const { pathname } = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const inActiveLink =
        "flex-sc font-medium text-sm hover:bg-white/20 transition-colors rounded-lg py-2 pl-3 pr-10";
    const activeLink =
        inActiveLink + " text-main bg-gray-100 hover:bg-white/80";

    const iconStyle = "text-3xl mr-2";

    return (
        <>
            <button
                onClick={handleShowMenu}
                className="fixed lg:hidden right-0 rounded-full bg-gray-800 top-8 z-50 text-white text-2xl p-2"
            >
                <FiMenu />
            </button>
            <aside
                className={`px-2 pt-6 text-white lg:relative fixed top-0 transition-all left-0 h-full ${
                    showMenu
                        ? "z-50 translate-x-0 bg-gray-800"
                        : "-z-10 lg:z-50 -translate-x-full lg:translate-x-0"
                }`}
            >
                <div className="flex-sc mb-10">
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
                <nav className="flex items-stretch flex-col gap-2 w-max">
                    <Link
                        to="/"
                        className={pathname === "/" ? activeLink : inActiveLink}
                    >
                        <FaHome className={iconStyle} />
                        <span>Home</span>
                    </Link>
                    <Link
                        to={"/navigation/"}
                        className={
                            pathname === "/navigation/"
                                ? activeLink
                                : inActiveLink
                        }
                    >
                        <IoMdNavigate className={iconStyle} />
                        <span>Navigation</span>
                    </Link>
                    <Link
                        to={"/blog/"}
                        className={
                            pathname === "/blog/" ? activeLink : inActiveLink
                        }
                    >
                        <BsFillFileEarmarkPostFill className={iconStyle} />
                        <span>Blog</span>
                    </Link>
                </nav>
            </aside>
        </>
    );
}
