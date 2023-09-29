import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import BlockWrapper from "../../components/BlockWrapper";
import { CardComponents } from "../../components/blocks";

function renderBlocks(components, titlePrefix) {
    return Object.entries(components).map(([key, Component], index) => (
        <BlockWrapper key={index} title={`${titlePrefix} #${index + 1}`}>
            <Component />
        </BlockWrapper>
    ));
}

export default function CardPage() {
    return <Layout>{renderBlocks(CardComponents, "Card")}</Layout>;
}

export const Head = () => <Seo />;
