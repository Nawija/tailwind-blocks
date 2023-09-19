import React from "react";
import { FiMenu } from "react-icons/fi";

function MenuButton({ handleShowMenu }) {
    return (
        <>
            <button
                onClick={handleShowMenu}
                className="text-second bg-white rounded-full mr-4 text-xl p-2"
            >
                <FiMenu />
            </button>
        </>
    );
}

export default MenuButton;
