import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import A from "../../components/button/a";
import B from "../../components/button/b";
import C from "../../components/button/c";
import D from "../../components/button/d";
import E from "../../components/button/e";
import F from "../../components/button/f";

export default function HeroPage() {
    return (
        <Layout>
            <div className="text-center flex items-start justify-start flex-wrap">
                <BlockWrapper title="Button #1">
                    <A />
                </BlockWrapper>
                <BlockWrapper title="Button #2">
                    <B />
                </BlockWrapper>
                <BlockWrapper title="Button #3">
                    <C />
                </BlockWrapper>
                <BlockWrapper title="Button #4">
                    <D />
                </BlockWrapper>
                <BlockWrapper title="Button #5">
                    <E />
                </BlockWrapper>
                <BlockWrapper title="Button #5">
                    <F />
                </BlockWrapper>
                
            </div>
        </Layout>
    );
}
export const Head = () => <Seo />;
