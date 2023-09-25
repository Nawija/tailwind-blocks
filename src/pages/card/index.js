import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import A from "../../components/card/a";
import B from "../../components/card/b";

export default function CardPage() {
    return (
        <Layout>
            <BlockWrapper title="Card #1">
                <A />
            </BlockWrapper>
            <BlockWrapper title="Card #2">
                <B />
            </BlockWrapper>
        </Layout>
    );
}
export const Head = () => <Seo />;