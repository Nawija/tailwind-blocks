import React from "react";
import Layout from "../components/layout";

import BlockWrapper from "../components/BlockWrapper";

import A from "../components/hero/a";

export default function HeroPage() {
    return (
        <Layout>
            <BlockWrapper title="Hero #1">
                <A />
            </BlockWrapper>
        </Layout>
    );
}
