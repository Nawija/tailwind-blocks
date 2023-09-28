import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const styleBtn =
    "border border-white p-2 m-2 rounded-xl hover:bg-white/90 hover:text-blue-700 font-medium transition-colors ";

function ShareMenu({ shareMenu, handleShareMenuClose }) {
    const [addClassAnim, setAddClassAnim] = useState(false);

    const handleClick = () => {
        setAddClassAnim(true);
        setTimeout(() => {
            handleShareMenuClose();
        }, 1000);
    };
    return (
        shareMenu && (
            <div
                className={`bg-blue-500 fixed right-0 top-0 -translate-x-1/2  -translate-y-1/2 p-12 w-96 h-96 z-[99] slide-bl text-white rounded-lg rounded-tr-none flex items-center justify-center flex-col shadow-2xl${
                    !addClassAnim ? "slide-tr" : ""
                }`}
            >
                <button
                    onClick={handleClick}
                    className={`absolute right-4 top-4`}
                >
                    <IoCloseOutline className="text-white text-3xl" />
                </button>
                <h2 className="mb-12 font-medium text-xl">Udostepnij nas:</h2>
                <div className="flex items-stretch justify-center flex-col text-center">
                    <button className={styleBtn}>Facebook</button>
                    <button className={styleBtn}>Instagram</button>
                    <button className={styleBtn}>Tweeter</button>
                </div>
            </div>
        )
    );
}

export default ShareMenu;
