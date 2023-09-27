import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import FooterComponents from "../../components/footer";

export default function FooterPage() {
    return (
        <Layout>
            {Object.entries(FooterComponents).map(([key, Component], index) => (
                <BlockWrapper key={index} title={`Footer #${index + 1}`}>
                    <Component />
                </BlockWrapper>
            ))}
        </Layout>
    );
}
export const Head = () => <Seo />;
