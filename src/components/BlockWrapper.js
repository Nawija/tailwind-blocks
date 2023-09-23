import React, { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa6";

function BlockWrapper({ children, title }) {
    const [copyBtn, setCopyBtn] = useState(false);

    function handleCopyBtn() {
        const childrenElement = document.getElementById("children-element");

        if (childrenElement) {
            const htmlToCopy = childrenElement.innerHTML;
            navigator.clipboard.writeText(htmlToCopy).then(() => {
                setCopyBtn(true);
                setTimeout(() => {
                    setCopyBtn(false);
                }, 1000);
            });
        }
    }
    return (
        <div className="relative transition-all pb-10 wrapper2xl">
            <div className="flex flex-col w-full text-xl p-2">
                <div className="bg-main rounded-full border text-second flex-b py-2 px-4">
                    <p className="text-sm font-semibold tracking-wide mr-3">
                        {title}
                    </p>

                    <button
                        onClick={handleCopyBtn}
                        className="bg-main p-3 rounded-full border text-second w-max ml-auto"
                    >
                        {copyBtn ? (
                            <FaCheck className="text-green-500" />
                        ) : (
                            <FaCopy />
                        )}
                    </button>
                </div>
            </div>
            <div
                id="children-element"
                className="bg-white rounded-lg border m-2"
            >
                {children}
            </div>
        </div>
    );
}
export default BlockWrapper;
