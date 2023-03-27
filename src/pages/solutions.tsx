import * as React from "react"
import Layout from "../components/layout"
import FlowLogo from "../svgs/flow-logo.svg"
import { StaticImage } from "gatsby-plugin-image"

const SolutionsPage = () => {
    return (
        <Layout headerTheme="light">
            <div className="product-flow-section-one-background-image-wrapper">
                <div className="product-flow-section-one">
                    <div className="product-flow-section-one-left">
                        <h1 className="product-flow-section-one-h1">
                            Streaming ELT solutions are revolutionizing what's
                            possible for data pipelines.
                        </h1>
                        <p className="product-flow-section-one-subtext">
                            For too long, enterprises have been forced to choose
                            between batch and streaming processes.
                        </p>
                        <p className="product-flow-section-one-subtext">
                            Estuary allows enterprises of any size to deploy
                            true real-time pipelines that scale for high-volume
                            use cases — without making difficult trade-offs or
                            investing in complex infrastructure.
                        </p>
                    </div>
                    <div className="product-flow-section-one-right">
                        <FlowLogo className="product-flow-section-one-image" />
                    </div>
                </div>
            </div>
            <div className="solutions-banner-wrapper">
                <StaticImage
                    placeholder="none"
                    alt="solutions-data-diagram"
                    src="../images/solutions-data-diagram.png"
                    layout="fullWidth"
                />
            </div>
            <div className="solutions-section-wrapper">
                <div className="solutions-section-text-wrapper">
                    <h2 className="product-flow-section-two-topic-header">
                        Real time analytics
                    </h2>
                    <p className="solutions-subtext-bold">
                        Fresh, error free data is the key to real-time business
                        intelligence.
                    </p>

                    <p className="solutions-subtext">
                        Batch data pipelines introduce latency by definition.
                        Low-latency, high-volume data streaming pipelines give
                        you powerful real-time insight about your business.{" "}
                    </p>

                    <p className="solutions-subtext">
                        Whether you're looking to improve anomaly or fraud
                        detection or to improve your predictive analytics,
                        building your analytics practice on the freshest data is
                        a no-brainer.
                    </p>
                </div>
                <div
                    className="solutions-section-logo-right"
                    // Adjust logo positioning so it doesn't clip the image
                    style={{ marginBottom: 0 }}
                >
                    <FlowLogo className="product-flow-section-one-image" />
                </div>
                <div className="solutions-section-image-wrapper">
                    <StaticImage
                        src="../images/solutions-image-1.png"
                        alt="solutions image 1"
                        layout="constrained"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className="solutions-section-wrapper mobile-flex-direction-reverse">
                <div className="solutions-section-image-wrapper">
                    <StaticImage
                        src="../images/solutions-image-2.png"
                        alt="solutions image 2"
                        layout="constrained"
                        objectFit="contain"
                    />
                </div>
                <div className="solutions-section-text-wrapper">
                    <h2 className="product-flow-section-two-topic-header">
                        Customer 360
                    </h2>

                    <p className="solutions-subtext-bold">
                        Building a complete view of customer data is getting
                        harder every year.
                    </p>

                    <p className="solutions-subtext">
                        As customer touchpoints fragment, it's vital to quickly
                        connect their data from multiple sources. By doing so,
                        you can create a real-time view of your customers'
                        journey and provide a personalized experience to every
                        customer.{" "}
                    </p>

                    <p className="solutions-subtext">
                        Customer 360 isn't just about improving your digital
                        conversion rates. It can also help match real-time
                        inventory, improve customer service, and manage stock
                        better.
                    </p>
                </div>
            </div>

            <div className="solutions-section-wrapper">
                <div className="solutions-section-text-wrapper">
                    <h2 className="product-flow-section-two-topic-header">
                        Database replication using CDC
                    </h2>
                    <p className="solutions-subtext-bold">
                        Move your data efficiently without latency and errors
                        using CDC.
                    </p>

                    <p className="solutions-subtext">
                        Change data capture has the potential to provide a
                        real-time foundation for database replication. But
                        error-prone batch pipelines that aren't fit for purpose
                        can keep you from taking advantage of it.
                    </p>

                    <p className="solutions-subtext">
                        Estuary's low-latency, high-scale CDC processes allow
                        you to move data from legacy databases to analytics
                        environments efficiently — with no data loss and zero
                        downtime.
                    </p>
                </div>
                <div className="solutions-section-image-wrapper-right">
                    <div className="solutions-section-logo-right">
                        <FlowLogo className="product-flow-section-one-image" />
                    </div>
                    <div className="solutions-section-image-wrapper">
                        <StaticImage
                            src="../images/solutions-image-3.png"
                            alt="solutions image 3"
                            layout="constrained"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
            <div className="solutions-section-wrapper solutions-margin-bottom mobile-flex-direction-reverse">
                <div className="solutions-section-image-wrapper ">
                    <StaticImage
                        src="../images/solutions-image-4.png"
                        alt="solutions image 4"
                        layout="constrained"
                        objectFit="contain"
                    />
                </div>
                <div className="solutions-section-text-wrapper">
                    <h2 className="product-flow-section-two-topic-header">
                        Database migration
                    </h2>

                    <p className="solutions-subtext-bold">
                        Migrate your data easily, even from legacy databases.
                    </p>

                    <p className="solutions-subtext">
                        Migrating your data to the cloud unlocks new,
                        cost-effective options for analytics, reporting and
                        intelligence. But moving it there from legacy databases
                        can be error-prone, expensive, and time consuming.
                    </p>

                    <p className="solutions-subtext">
                        Estuary's data pipelines integrate with all leading
                        legacy databases, so you can get to work extracting your
                        data in minutes. And with intelligent transformation
                        options and integrations with leading cloud warehouses,
                        your data will arrive when you want it, error free.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default SolutionsPage