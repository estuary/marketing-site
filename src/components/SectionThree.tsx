import * as React from "react"
import loadable from "@loadable/component"
import { StaticImage } from "gatsby-plugin-image"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"

const SectionThree = () => {
    const [hasWindow, setHasWindow] = useState(false)
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true)
        }
    }, [])
    return (
        <div className="section-three">
            <div className="section-three-header-wrapper">
                <p className="section-three-header-small">VIDEO</p>
                <h2 className="section-three-header">Watch the product demo</h2>
            </div>
            <div className="section-three-product-video-wrapper">
                {hasWindow && (
                    <ReactPlayer
                        light={
                            <StaticImage
                                placeholder="none"
                                alt="estuary flow product video"
                                src="../images/homepage-product-video.svg"
                                className="section-three-product-video-thumbnail"
                                layout="constrained"
                            />
                        }
                        url="https://www.youtube.com/embed/hlCh81ZbBik"
                    />
                )}
            </div>
            <div className="section-three-try-it-button-wrapper">
                <a
                    target="_blank"
                    href="https://dashboard.estuary.dev/register"
                    className="section-three-try-it-button"
                >
                    Try it free
                </a>
            </div>
        </div>
    )
}

export default SectionThree
