import React from "react";
import Layout from "../components/layout";

import BlockWrapper from "../components/BlockWrapper";

import A from "../components/pricing/a";

export default function PricingPage() {
    return (
        <Layout>
            <BlockWrapper title="Pricing #1">
                <A />
            </BlockWrapper>
        </Layout>
    );
}
