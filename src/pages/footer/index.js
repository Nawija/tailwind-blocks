import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import A from "../../components/footer/a";
import B from "../../components/footer/b";

export default function FooterPage() {
    return (
        <Layout>
            <BlockWrapper title="Footer #1">
                <A />
            </BlockWrapper>
            <BlockWrapper title="Footer #2">
                <B />
            </BlockWrapper>
        </Layout>
    );
}
export const Head = () => <Seo />;
