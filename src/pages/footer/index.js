import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import BlockWrapper from "../../components/BlockWrapper";
import { FooterComponents } from "../../components/blocks";

function renderBlocks(components, titlePrefix) {
    return Object.entries(components).map(([key, Component], index) => (
        <BlockWrapper key={index} title={`${titlePrefix} #${index + 1}`}>
            <Component />
        </BlockWrapper>
    ));
}

export default function FooterPage() {
    return <Layout>{renderBlocks(FooterComponents, "Footer")}</Layout>;
}

export const Head = () => <Seo />;
