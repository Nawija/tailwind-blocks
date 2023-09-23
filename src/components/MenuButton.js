import React from "react";
import { FiMenu, FiArrowLeft } from "react-icons/fi";

function MenuButton({ showMenu, handleShowMenu }) {
    return (
        <>
            <button
                onClick={handleShowMenu}
                aria-label="menu"
                className="text-second bg-white rounded-full mr-4 text-xl p-2 shadow-xl"
            >
                {showMenu ? <FiArrowLeft /> : <FiMenu />}
            </button>
        </>
    );
}

export default MenuButton;
