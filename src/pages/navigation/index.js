import React from "react";
import Layout from "../../components/layout";

import BlockWrapper from "../../components/BlockWrapper";

import A from "../../components/navigation/a";

export default function NavigationPage() {
    return (
        <Layout>
            <div className="wrapper2xl">
                <BlockWrapper title="Section #1">
                    <A />
                </BlockWrapper>
                <BlockWrapper title="Section #1">
                    <A />
                </BlockWrapper>
                <BlockWrapper title="Section #1">
                    <A />
                </BlockWrapper>
            </div>
        </Layout>
    );
}
