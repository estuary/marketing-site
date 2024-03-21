import "./styles.less"

import React, { useState, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import clsx from "clsx"

import Clock from "../../../../svgs/clock.svg"
import ActionLink from "../../../../components/ActionLink"

const PipelineBuilt = () => {
    const [showVideo, setShowVideo] = useState(false)
    const videoRef = useRef(null)
    const thumbRef = useRef(null)

    const onClick = () => {
        if (!showVideo) {
            videoRef.current.width = thumbRef.current.clientWidth
            videoRef.current.height = thumbRef.current.clientHeight
            setShowVideo(true)
        }
    }

    return (
        <div className="section-pipeline-built">
            <div className="image-container" onClick={onClick} ref={thumbRef}>
                {!showVideo && <StaticImage
                    placeholder="none"
                    alt="Coding optional"
                    layout="constrained"
                    src="../../../../images/landing-video-thumb.png"
                />}
                <iframe className={clsx(!showVideo && 'hide')} ref={videoRef} src="https://player.vimeo.com/video/801686488?h=66de62b836&title=0&byline=0&portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="content">
                <div className="title-container">
                    <div className="icon-container">
                        <Clock />
                    </div>
                    <p className="title">Pipelines built in minutes</p>
                </div>
                <p className="description">Use the UI to quickly build end-to-end pipelines or use the CLI to automate and version-control as part of data ops</p>
                <ActionLink onClick={onClick} showArrow small>View Demo</ActionLink>
            </div>
        </div>
    )
}

export default PipelineBuilt
