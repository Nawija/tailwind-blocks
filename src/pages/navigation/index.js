import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import A from "../../components/navigation/a";
import B from "../../components/navigation/b";
import C from "../../components/navigation/c";
import D from "../../components/navigation/d";

export default function NavigationPage() {
    return (
        <Layout>
            <BlockWrapper title="Nav #1">
                <A />
            </BlockWrapper>
            <BlockWrapper title="Nav #2">
                <B />
            </BlockWrapper>
            <BlockWrapper title="Nav #3">
                <C />
            </BlockWrapper>
            <BlockWrapper title="Nav #4">
                <D />
            </BlockWrapper>
        </Layout>
    );
}
export const Head = () => <Seo />;