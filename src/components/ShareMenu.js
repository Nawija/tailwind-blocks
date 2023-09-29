import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const styleBtn =
    "flex items-center justify-start border border-white p-2 m-2 rounded-xl hover:bg-white/90 hover:text-blue-700 font-medium transition-colors ";

function ShareMenu({ shareMenu, handleShareMenuClose }) {
    const [addClassAnim, setAddClassAnim] = useState(false);

    const handleCloseMenu = () => {
        setAddClassAnim(true);
        setTimeout(() => {
            handleShareMenuClose();
            setAddClassAnim(false);
        }, 200);
    };

    const handleClick = (platform) => {
        let shareUrl = "";
        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                )}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    window.location.href
                )}`;
                break;
            default:
                break;
        }
        window.open(shareUrl, "_blank");

        handleCloseMenu();
    };

    return (
        shareMenu && (
            <div
                className={`bg-blue-600/90 fixed right-0 top-20 -translate-x-1/2  -translate-y-1/2 p-12 w-80 h-96 z-[99] slide-bl text-white rounded-lg rounded-tr-none flex items-center justify-center flex-col shadow-2xl ${
                    addClassAnim ? "slide-tr" : ""
                }`}
            >
                <button
                    onClick={handleCloseMenu}
                    className={`absolute right-4 top-4`}
                >
                    <IoCloseOutline className="text-white text-3xl" />
                </button>
                <h2 className="mb-12 font-medium text-xl">Social Media:</h2>
                <div className="flex items-stretch justify-center flex-col text-center">
                    <button
                        onClick={() => handleClick("facebook")}
                        className={styleBtn}
                    >
                        <FaFacebookF className="mr-2" />
                        Facebook
                    </button>
                    <button
                        onClick={() => handleClick("twitter")}
                        className={styleBtn}
                    >
                        <FaXTwitter className="mr-2" />
                        X-Twitter
                    </button>
                </div>
            </div>
        )
    );
}

export default ShareMenu;
