import "./styles.less"

import React, { useState, useEffect, useRef } from "react"
import { isDesktop } from "react-device-detect"

import useOnScreen from "../../../../hooks/useOnScreen"

import Topic from "./Topic"
import { ImageTopic1, ImageTopic2, ImageTopic3, ImageTopic4 } from "./topics"

const SectionRealTimePlatform = () => {
    const [selected, setSelected] = useState(0)

    const ref = useRef<HTMLDivElement>(null)

    const isVisible = useOnScreen(ref)
    const intervalIDRef = useRef(null);
    const mouseOverRef = useRef(false)

    const handleSelect = (index) => {
        setSelected(index)
    }

    const handleNext = () => {
        if (!mouseOverRef.current) setSelected((prev) => prev === 3 ? 0 : prev + 1)
    }

    const topics = [ImageTopic1, ImageTopic2, ImageTopic3, ImageTopic4]
    const ImageTopicDesktop = topics[selected]

    useEffect(() => {
        if (isVisible && isDesktop) {
            intervalIDRef.current = setInterval(() => handleNext(), 3000)
        } else {
            clearInterval(intervalIDRef.current)
        }
    }, [isVisible])

    return (
        <div className="section-real-time-platform" ref={ref}>
            <div className="container">
                <h3>A platform for real-time ETL and CDC</h3>
                <div className="topic-area" onMouseOver={() => mouseOverRef.current = true} onMouseLeave={() => mouseOverRef.current = false}>
                    <div className="topics">
                        <Topic
                            title="CDC Replication"
                            description="Millisecond CDC connectors built by Estuary for streaming database replication. Managing tables over 10TB+ with <100ms latency."
                            open={selected === 0}
                            onClick={() => handleSelect(0)}
                        >
                            <ImageTopic1 />
                        </Topic>
                        <Topic
                            title="Streaming ETL for Analytics"
                            description="Join and transform real-time and historicaly data in SQL or Typescript. Time travel and backfill data from a cloud storage log."
                            open={selected === 1}
                            onClick={() => handleSelect(1)}
                        >
                            <ImageTopic2 />
                        </Topic>
                        <Topic
                            title="Data Integration"
                            description="Synchronize data across applications. Choose from Estuary Connectors, or import any connector from Meltano, Stitch, or Airbyte."
                            open={selected === 2}
                            onClick={() => handleSelect(2)}
                        >
                            <ImageTopic3 />
                        </Topic>
                        <Topic
                            title="Data pipeline for AI"
                            description="Capture and prepare training data or prompts then load into generative AI, vector databases, and other targets to automate AI pipelines."
                            open={selected === 3}
                            onClick={() => handleSelect(3)}
                        >
                            <ImageTopic4 />
                        </Topic>
                    </div>
                    <div className="topic-image">
                        <ImageTopicDesktop />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionRealTimePlatform