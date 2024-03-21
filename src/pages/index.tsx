import * as React from "react"
import Layout from "../components/layout"
import SectionOne from "../components/SectionOne"
import SectionTwo from "../components/SectionTwo"
import SectionThree from "../components/SectionThree"
import SectionFour from "../components/SectionFour"
import SectionFive from "../components/SectionFive"
import SectionSix from "../components/SectionSix"
import Seo from "../components/seo"

import SectionMoveTransformData from "../layouts/Homepage/Sections/MoveTransformData"
import SectionConnect from "../layouts/Homepage/Sections/Connection"
import SectionCodingOptional from "../layouts/Homepage/Sections/CodingOptional"
import SectionPipelineBuilt from "../layouts/Homepage/Sections/PipelineBuilt"
import SectionCutPipeline from "../layouts/Homepage/Sections/CutPipeline"
import SectionQuoteBlock from "../layouts/Homepage/Sections/QuoteBlock"
import SectionRealTimePlatform from "../layouts/Homepage/Sections/RealTimePlatform"
import SectionStreamPipeline from "../layouts/Homepage/Sections/StreamPipeline"
import SectionComparison from "../layouts/Homepage/Sections/Comparison"

const IndexPage = () => {
    return (
        //@ts-ignore
        <Layout headerTheme="dark" showTour fixedHeader>
            <SectionOne />
            <SectionMoveTransformData />
            <SectionConnect />
            <SectionCodingOptional />
            <SectionPipelineBuilt />
            <SectionCutPipeline />
            <SectionQuoteBlock />
            <SectionRealTimePlatform />
            <SectionStreamPipeline />
            <SectionComparison />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </Layout>
    )
}

export const Head = ({ data: { post } }) => {
    return <Seo 
        title={"Real-time ETL"}
        description={"Managed streaming data pipelines, streaming SQL & turnkey connectivity to clouds, databases, and apps"}
    />
}

export default IndexPage
