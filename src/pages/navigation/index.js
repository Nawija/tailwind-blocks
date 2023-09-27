import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import NavigationComponents from "../../components/navigation";

export default function NavigationPage() {
    return (
        <Layout>
            {Object.entries(NavigationComponents).map(([key, Component], index) => (
                <BlockWrapper key={index} title={`Navigation #${index + 1}`}>
                    <Component />
                </BlockWrapper>
            ))}
        </Layout>
    );
}
export const Head = () => <Seo />;
