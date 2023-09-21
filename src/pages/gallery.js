import React from "react";
import Layout from "../components/layout";

import BlockWrapper from "../components/BlockWrapper";

import A from "../components/gallery/a";

export default function GalleryPage() {
    return (
        <Layout>
            <BlockWrapper title="Gallery #1">
                <A />
            </BlockWrapper>
        </Layout>
    );
}
