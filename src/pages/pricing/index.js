import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import PricingComponents from "../../components/pricing";

export default function PricingPage() {
    return (
        <Layout>
            {Object.entries(PricingComponents).map(
                ([key, Component], index) => (
                    <BlockWrapper key={index} title={`Pricing #${index + 1}`}>
                        <Component />
                    </BlockWrapper>
                )
            )}
        </Layout>
    );
}
export const Head = () => <Seo />;
