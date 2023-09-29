import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import BlockWrapper from "../../components/BlockWrapper";
import { ShareButtonComponents } from "../../components/blocks";

function renderBlocks(components, titlePrefix) {
    return (
        <div className="flex flex-wrap items-stretch justify-center">
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

export default function ShareButtonPage() {
    return (
        <Layout>{renderBlocks(ShareButtonComponents, "Share Buttons")}</Layout>
    );
}

export const Head = () => <Seo />;
