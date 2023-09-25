import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import A from "../../components/pricing/a";
import B from "../../components/pricing/b";
import C from "../../components/pricing/c";
import D from "../../components/pricing/d";
import E from "../../components/pricing/e";

export default function PricingPage() {
    return (
        <Layout>
            <BlockWrapper title="Pricing #1">
                <A />
            </BlockWrapper>
            <BlockWrapper title="Pricing #2">
                <B />
            </BlockWrapper>
            <BlockWrapper title="Pricing #3">
                <C />
            </BlockWrapper>
            <BlockWrapper title="Pricing #4">
                <D />
            </BlockWrapper>
            <BlockWrapper title="Pricing #5">
                <E />
            </BlockWrapper>
        </Layout>
    );
}
export const Head = () => <Seo />;
