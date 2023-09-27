import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import HeroComponents from "../../components/hero";

export default function HeroPage() {
    return (
        <Layout>
            {Object.entries(HeroComponents).map(([key, Component], index) => (
                <BlockWrapper key={index} title={`Hero #${index + 1}`}>
                    <Component />
                </BlockWrapper>
            ))}
        </Layout>
    );
}
export const Head = () => <Seo />;
