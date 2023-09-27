import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import { FaHome, FaHeading } from "react-icons/fa";
import { IoMdNavigate } from "react-icons/io";
import { RiGalleryFill } from "react-icons/ri";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import { TbHandClick } from "react-icons/tb";
import { ImPriceTags } from "react-icons/im";
import { SiHiveBlockchain } from "react-icons/si";
import { BiSolidBookContent } from "react-icons/bi";
import { BsFillMenuButtonFill } from "react-icons/bs";

export default function NavLeftBar({ showMenu }) {
    const { pathname } = useLocation();

    const linkStyle =
        "flex-sc font-medium text-sm hover:bg-blue-200/60 transition-colors rounded-lg p-2 w-[250px] border border-transparent";

    const inActiveLink = linkStyle + " text-second";
    const activeLink =
        linkStyle +
        " text-main bg-blue-200 hover:bg-blue-200/60 border-blue-300";

    const iconStyle = "text-3xl mr-2";

    return (
        <>
            <aside
                className={`px-2 mt-16 pt-3 pb-5 fixed text-white bg-white border h-screen z-50 transition-all scrollNav ${
                    showMenu ? "ml-[0px]" : "-ml-[300px]"
                }`}
            >
                <nav className="flex items-stretch flex-col gap-2">
                    <Link
                        to="/"
                        className={pathname === "/" ? activeLink : inActiveLink}
                    >
                        <FaHome className={iconStyle} />
                        <span>Home</span>
                    </Link>

                    <Link
                        to={"/card/"}
                        className={
                            pathname === "/card/" ? activeLink : inActiveLink
                        }
                    >
                        <SiHiveBlockchain className={iconStyle} />
                        <span>Card</span>
                    </Link>

                    <Link
                        to={"/navigation/"}
                        stateShowMenu={false}
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
                        to={"/hero/"}
                        className={
                            pathname === "/hero/" ? activeLink : inActiveLink
                        }
                    >
                        <FaHeading className={iconStyle} />
                        <span>Hero</span>
                    </Link>
                    <Link
                        to={"/gallery/"}
                        className={
                            pathname === "/gallery/" ? activeLink : inActiveLink
                        }
                    >
                        <RiGalleryFill className={iconStyle} />
                        <span>Gallery</span>
                    </Link>
                    <Link
                        to={"/pricing/"}
                        className={
                            pathname === "/pricing/" ? activeLink : inActiveLink
                        }
                    >
                        <ImPriceTags className={iconStyle} />
                        <span>Pricing</span>
                    </Link>

                    <Link
                        to={"/footer/"}
                        className={
                            pathname === "/footer/" ? activeLink : inActiveLink
                        }
                    >
                        <LuGalleryVerticalEnd className={iconStyle} />
                        <span>Footer</span>
                    </Link>
                    <Link
                        to={"/blog/"}
                        className={
                            pathname === "/blog/" ? activeLink : inActiveLink
                        }
                    >
                        <BiSolidBookContent className={iconStyle} />
                        <span>Blog</span>
                    </Link>

                    <Link
                        to={"/cta/"}
                        className={
                            pathname === "/cta/" ? activeLink : inActiveLink
                        }
                    >
                        <TbHandClick className={iconStyle} />
                        <span>CTA</span>
                    </Link>
                    <Link
                        to={"/button/"}
                        className={
                            pathname === "/button/" ? activeLink : inActiveLink
                        }
                    >
                        <BsFillMenuButtonFill className={iconStyle} />
                        <span>Button</span>
                    </Link>
                </nav>
            </aside>
        </>
    );
}
