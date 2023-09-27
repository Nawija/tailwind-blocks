import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/Seo";

import BlockWrapper from "../../components/BlockWrapper";
import GalleryComponents from "../../components/gallery";

export default function GalleryPage() {
    return (
        <Layout>
            {Object.entries(GalleryComponents).map(([key, Component], index) => (
                <BlockWrapper key={index} title={`Gallery #${index + 1}`}>
                    <Component />
                </BlockWrapper>
            ))}
        </Layout>
    );
}
export const Head = () => <Seo />;
