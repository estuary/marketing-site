import * as React from "react"
import loadable from "@loadable/component"

import Layout from "../components/layout"
import SectionOne from "../components/SectionOne"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"

const SectionTwo = loadable(() => import('../components/SectionTwo'))
const SectionThree = loadable(() => import('../components/SectionThree'))
const SectionFour = loadable(() => import('../components/SectionFour'))
const SectionFive = loadable(() => import('../components/SectionFive'))
const SectionSix = loadable(() => import('../components/SectionSix'))

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
        </Layout>
    )
}

export const Head = ({ data: { post } }) => {
    return <Seo title={"Real-time ETL"} description={"Managed streaming data pipelines, streaming SQL & turnkey connectivity to clouds, databases, and apps"} />
}

export default IndexPage
