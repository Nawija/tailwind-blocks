import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import A from "../../components/hero/a";
import B from "../../components/hero/b";

export default function HeroPage() {
    return (
        <Layout>
            <BlockWrapper title="Hero #1">
                <A />
            </BlockWrapper>
            <BlockWrapper title="Hero #2">
                <B />
            </BlockWrapper>
        </Layout>
    );
}
export const Head = () => <Seo />;
