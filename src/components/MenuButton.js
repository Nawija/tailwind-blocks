import React from "react";
import { FiMenu } from "react-icons/fi";
import { BiArrowToLeft } from "react-icons/bi";
import NavLeftBar from "./NavLeftBar";

function MenuButton({ showMenu, handleShowMenu }) {
    return (
        <>
            <button
                onClick={handleShowMenu}
                className="text-second bg-white rounded-full mr-4 text-xl p-2"
            >
                {showMenu ? <FiMenu /> : <BiArrowToLeft />}
            </button>
            <NavLeftBar showMenu={showMenu} />
        </>
    );
}

export default MenuButton;
