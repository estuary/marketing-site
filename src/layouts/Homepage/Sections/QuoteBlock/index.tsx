import "./styles.less"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const SectionQuoteBlock = () => {
    return (
        <div className="section-quote-block">
            <div className="container">
                <p className="description">“Estuary is a very productive product with a great pricing model given the current climate that we're in. I think a lot of cost-conscious data practitioners could benefit from giving it a try.”</p>
                <div className="image-container">
                    <StaticImage
                        placeholder="none"
                        alt="Connect&Go"
                        layout="constrained"
                        src="../../../../images/quote-block.png"
                    />
                </div>
                <p className="owner">Tony Tushar, Principal Data Consultant , Soli & Co</p>
            </div>
        </div>
    )
}

export default SectionQuoteBlock