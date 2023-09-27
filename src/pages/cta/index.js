import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import CtaComponents from "../../components/cta";

export default function CtaPage() {
    return (
        <Layout>
            {Object.entries(CtaComponents).map(([key, Component], index) => (
                <BlockWrapper key={index} title={`CTA #${index + 1}`}>
                    <Component />
                </BlockWrapper>
            ))}
        </Layout>
    );
}
export const Head = () => <Seo />;
