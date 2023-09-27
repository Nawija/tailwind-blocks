import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import ButtonComponents from "../../components/button";

export default function HeroPage() {
    return (
        <Layout>
            <div className="text-center flex items-start justify-start flex-wrap">
                {Object.entries(ButtonComponents).map(([key, Component], index) => (
                    <BlockWrapper key={index} title={`Button #${index + 1}`}>
                        <Component />
                    </BlockWrapper>
                ))}
            </div>
        </Layout>
    );
}

export const Head = () => <Seo />;
