import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import A from "../../components/cta/a";
import B from "../../components/cta/b";
import C from "../../components/cta/c";

export default function HeroPage() {
    return (
        <Layout>
            <BlockWrapper title="CTA #1">
                <A />
            </BlockWrapper>
            <BlockWrapper title="CTA #2">
                <B />
            </BlockWrapper>
            <BlockWrapper title="CTA #2">
                <C />
            </BlockWrapper>
        </Layout>
    );
}
export const Head = () => <Seo />;
