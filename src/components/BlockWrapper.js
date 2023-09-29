import React, { useState, useRef } from "react";
import { FaCopy, FaCheck } from "react-icons/fa6";

function BlockWrapper({ children, title }) {
    const [copyBtn, setCopyBtn] = useState(false);
    const childrenElementRef = useRef(null);

    function handleCopyBtn() {
        if (childrenElementRef.current) {
            const htmlToCopy = childrenElementRef.current.innerHTML;
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
                        className="bg-main px-3 py-2 font-medium rounded-full border text-second w-max ml-auto"
                    >
                        {copyBtn ? (
                            <div className="flex-c text-green-500">
                                <p className="text-sm mr-2 w-10 anim-pading-left">
                                    Copied
                                </p>
                                <FaCheck />
                            </div>
                        ) : (
                            <div className="flex-c">
                                <p className="text-sm mr-2 w-10">Copy</p>
                                <FaCopy />
                            </div>
                        )}
                    </button>
                </div>
            </div>
            <div
                ref={childrenElementRef}
                className="bg-white rounded-lg border m-2"
            >
                {children}
            </div>
        </div>
    );
}
export default BlockWrapper;
