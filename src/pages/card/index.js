import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import CardComponents from "../../components/card";

export default function CardPage() {
    return (
        <Layout>
            {Object.entries(CardComponents).map(([key, Component], index) => (
                    <BlockWrapper key={index} title={`Card #${index + 1}`}>
                        <Component />
                    </BlockWrapper>
                ))}
        </Layout>
    );
}
export const Head = () => <Seo />;