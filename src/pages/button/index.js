import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import BlockWrapper from "../../components/BlockWrapper";
import { ButtonComponents } from "../../components/blocks";

function renderBlocks(components, titlePrefix) {
    return (
        <div className="flex flex-wrap items-center justify-center text-center mx-auto">
            {Object.entries(components).map(([key, Component], index) => (
                <div key={index} className="w-max p-2">
                    <BlockWrapper title={`${titlePrefix} #${index + 1}`}>
                        <Component />
                    </BlockWrapper>
                </div>
            ))}
        </div>
    );
}

export default function ButtonPage() {
    return <Layout>{renderBlocks(ButtonComponents, "Button")}</Layout>;
}

export const Head = () => <Seo />;
