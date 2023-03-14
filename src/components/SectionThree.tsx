import * as React from "react"
import ReactPlayer from 'react-player'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const SectionThree = () => {
    return (
        <div className="section-three">
            <div className="section-three-header-wrapper">
                <p className="section-three-header-small">VIDEO</p>
                <h2 className="section-three-header">Watch the product demo</h2>
            </div>
            <div className="section-three-product-video-wrapper">
                <ReactPlayer
                    light={<StaticImage
                        alt="estuary flow product video"
                        src="../images/homepage-product-video.svg"
                        className="section-three-product-video-thumbnail"
                        layout="constrained"
                    />}
                    url="https://www.youtube.com/embed/hlCh81ZbBik"
                />
            </div>
            <div className="section-three-try-it-button-wrapper">
                <Link className="section-three-try-it-button" to="#">
                    Try it free
                </Link>
            </div>
        </div>
    )
}

export default SectionThree