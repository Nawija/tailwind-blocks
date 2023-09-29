import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import BlockWrapper from "../../components/BlockWrapper";
import { ButtonComponents } from "../../components/blocks";

function renderBlocks(components, titlePrefix) {
    return Object.entries(components).map(([key, Component], index) => (
        <div className="flex flex-wrap text-center">
            <BlockWrapper key={index} title={`${titlePrefix} #${index + 1}`}>
                <Component />
            </BlockWrapper>
        </div>
    ));
}

export default function ButtonPage() {
    return <Layout>{renderBlocks(ButtonComponents, "Button")}</Layout>;
}

export const Head = () => <Seo />;
