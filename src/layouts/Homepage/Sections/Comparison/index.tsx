import "./styles.less"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import OutboundLink from "../../../../components/OutboundLink"

const SectionComparison = () => {
    return (
        <div className="section-comparison">
            <h3 className="title">Traditional ETL vs. Estuary </h3>
            <div className="cards">
                <div className="card">
                    <div className="image-container">
                        <StaticImage
                            placeholder="none"
                            alt="Coding optional"
                            layout="constrained"
                            src="../../../../images/traditional-etl-graphic.png"
                        />
                    </div>
                    <p className="card-title">Traditional ETL/ELT</p>
                    <p className="card-description">Traditional ETL/ELT platforms are point-to-point. Each new data pipeline requires starting from scratch and syncs on a batch cadence.</p>
                </div>
                <div className="estuary-comparison">
                    <div className="stripe" />
                    <p>VS</p>
                    <div className="stripe" />
                </div>
                <div className="card">
                    <div className="image-container">
                        <StaticImage
                            placeholder="none"
                            alt="Coding optional"
                            layout="constrained"
                            src="../../../../images/estuary-etl-graphic.png"
                        />
                    </div>
                    <p className="card-title">Estuary ELT/ETL</p>
                    <p className="card-description">With Estuary, ingested data never needs to be re-captured. Quickly backfill datasets to new destinations.</p>
                </div>
            </div>
            <div className="button">
                <OutboundLink href="/product" button>View Product</OutboundLink>
            </div>
        </div>
    )
}

export default SectionComparison
