import React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";

import BlockWrapper from "../components/BlockWrapper";
import A from "../components/card/a";

export default function CardPage() {
    return (
        <Layout>
            <BlockWrapper title="Card #1">
                <A />
            </BlockWrapper>
        </Layout>
    );
}
export const Head = () => <Seo />;