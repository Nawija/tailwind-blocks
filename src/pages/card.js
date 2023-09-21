import React from "react";
import Layout from "../components/layout";

import BlockWrapper from "../components/BlockWrapper";

import A from "../components/card/a";

export default function NavigationPage() {
    return (
        <Layout>
            <BlockWrapper title="#1">
                <A />
            </BlockWrapper>
        </Layout>
    );
}
