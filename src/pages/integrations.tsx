import React from 'react'
import { Connectors } from "../components/Connectors"
import Layout from "../components/layout"
import Seo from '../components/seo'

const Integrations = () => {
    return (
        <Layout headerTheme={"light"}>
            <Connectors
                title={"Integrations"}
                description={"Capture from clouds, databases, and SaaS apps, create real-time transformations and materialized views, for a consistent, exact copy of your data powering both analytics and operations."}
                showAllConnectors={true}
            />
        </Layout>
    )
}

export const Head = () => {
    return <Seo title={"Integrations"} description={"Capture from clouds, databases, and SaaS apps, create real-time transformations and materialized views, for a consistent, exact copy of your data powering both analytics and operations."} />
}

export default Integrations