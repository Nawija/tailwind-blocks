import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import { FaHome } from "react-icons/fa";
import { IoMdNavigate } from "react-icons/io";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";

export default function NavLeftBar({ showMenu }) {
    const { pathname } = useLocation();

    const linkStyle =
        "flex-sc font-medium text-sm hover:bg-blue-200/60 transition-colors rounded-lg py-2 pl-3 w-[250px] border border-transparent";
    const inActiveLink = linkStyle + " text-second";
    const activeLink = linkStyle + " text-main bg-blue-200 hover:bg-blue-200/60 border-blue-300";

    const iconStyle = "text-3xl mr-2";

    return (
        <>
            <aside
                className={`px-2 mt-16 pt-4 text-white fixed top-0 transition-all left-0 h-screen ${
                    !showMenu
                        ? "z-50 translate-x-0 bg-main"
                        : "z-50 -translate-x-full"
                }`}
            >
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
