import * as React from "react"
import { SectionEight, SectionFive, SectionFour, SectionNine, SectionOne, SectionSeven, SectionSix, SectionTen, SectionThree, SectionTwo } from "../components/Homepage"
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
            <SectionEight />
            <SectionNine />
            <SectionTen />
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
