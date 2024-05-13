import * as React from "react"
import { SectionFive, SectionFour, SectionOne, SectionSeven, SectionSix, SectionThree, SectionTwo } from "../components/Homepage"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
    return (
        //@ts-ignore
        <Layout headerTheme="dark" showTour>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
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
