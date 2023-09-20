import React from "react";
import { FaCopy, FaCheck } from "react-icons/fa6";

function BlockWrapper({ children, title }) {
    return (
        <div className="relative group transition-all mb-12">
            <div className="flex flex-col w-full text-xl p-2">
                <div className="bg-main rounded-full border text-second flex-b py-2 px-4">
                    <p className="text-sm font-semibold tracking-wide">
                        {title}
                    </p>
                    <button className="bg-main p-3 rounded-full border text-second w-max ml-auto">
                        <FaCopy />
                    </button>
                </div>
            </div>
            <div className="bg-white rounded-lg border m-2">{children}</div>
        </div>
    );
}
export default BlockWrapper;
