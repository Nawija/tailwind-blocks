import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";
import BlockWrapper from "../../components/BlockWrapper";
import BlogComponents from "../../components/blog";

export default function BlogPage() {
    return (
        <Layout>
            {Object.entries(BlogComponents).map(([key, Component], index) => (
                    <BlockWrapper key={index} title={`Blog #${index + 1}`}>
                        <Component />
                    </BlockWrapper>
                ))}
        </Layout>
    );
}
export const Head = () => <Seo />;