import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import { FaHome, FaHeading } from "react-icons/fa";
import { IoMdNavigate } from "react-icons/io";
import { RiPagesFill, RiGalleryFill, RiTeamFill } from "react-icons/ri";
import { LuGalleryVertical, LuGalleryVerticalEnd } from "react-icons/lu";
import { BiSolidBookContent } from "react-icons/bi";
import { IoFootstepsSharp } from "react-icons/io5";
import { TbHandClick } from "react-icons/tb";
import { IoStatsChart } from "react-icons/io5";
import { ImPriceTags } from "react-icons/im";

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
                className={`px-2 mt-16 pt-3 pb-5 fixed text-white bg-white border h-full z-50 transition-all scrollNav ${
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
                        to={"/fullpage/"}
                        className={
                            pathname === "/fullpage/"
                                ? activeLink
                                : inActiveLink
                        }
                    >
                        <RiPagesFill className={iconStyle} />
                        <span>FullPage</span>
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
                        to={"/blog/"}
                        className={
                            pathname === "/blog/" ? activeLink : inActiveLink
                        }
                    >
                        <LuGalleryVertical className={iconStyle} />
                        <span>Blog</span>
                    </Link>

                    <Link
                        to={"/content/"}
                        className={
                            pathname === "/content/" ? activeLink : inActiveLink
                        }
                    >
                        <BiSolidBookContent className={iconStyle} />
                        <span>Content</span>
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
                        to={"/team/"}
                        className={
                            pathname === "/team/" ? activeLink : inActiveLink
                        }
                    >
                        <RiTeamFill className={iconStyle} />
                        <span>Team</span>
                    </Link>
                    <Link
                        to={"/step/"}
                        className={
                            pathname === "/step/" ? activeLink : inActiveLink
                        }
                    >
                        <IoFootstepsSharp className={iconStyle} />
                        <span>Step</span>
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
                        to={"/statictic/"}
                        className={
                            pathname === "/statictic/"
                                ? activeLink
                                : inActiveLink
                        }
                    >
                        <IoStatsChart className={iconStyle} />
                        <span>Statistics</span>
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
                </nav>
            </aside>
        </>
    );
}
