import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import BlockWrapper from "../../components/BlockWrapper";
import { ShareButtonComponents } from "../../components/blocks";

function renderBlocks(components, titlePrefix) {
    return Object.entries(components).map(([key, Component], index) => (
        <div className="w-full flex items-start justify-start ml-auto text-center">
            <div className="flex flex-wrap w-full ml-auto text-center">
                <BlockWrapper
                    key={index}
                    title={`${titlePrefix} #${index + 1}`}
                >
                    <Component />
                </BlockWrapper>
            </div>
        </div>
    ));
}

export default function ButtonPage() {
    return (
        <Layout>{renderBlocks(ShareButtonComponents, "Share Buttons")}</Layout>
    );
}

export const Head = () => <Seo />;
