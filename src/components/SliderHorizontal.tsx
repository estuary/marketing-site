import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import * as React from "react"
import { useState } from "react"

const SliderHorizontal = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        }
    )
    function Arrow(props) {
        const disabeld = props.disabled ? " arrow--disabled" : ""
        return (
            <svg
                onClick={props.onClick}
                className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                    } ${disabeld}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                {props.left && (
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                )}
                {!props.left && (
                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                )}
            </svg>
        )
    }

    const notLoadedSlideStyle = { display: !loaded && "none" }

    return (
        <div className="slider-horiztonal-root">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide" style={notLoadedSlideStyle}>
                    <div className="slider-horizontal-text-wrapper">
                        <h2 className="header-horizontal">
                            Built for architects
                        </h2>
                        <p className="section-six-text">
                            Future-proof your systems with unlimited scalability and access to exact copies of all your data with millisecond latency.
                        </p>
                    </div>
                </div>
                <div className="keen-slider__slide" style={notLoadedSlideStyle}>
                    <div className="slider-horizontal-text-wrapper">
                        <h2 className="header-horizontal">
                            Built for engineers
                        </h2>
                        <p className="section-six-text">
                            Spend your time creating value instead of integrating systems.
                        </p>
                    </div>
                </div>
                <div className="keen-slider__slide" style={notLoadedSlideStyle}>
                    <div className="slider-horizontal-text-wrapper">
                        <h2 className="header-horizontal">
                            Built for analysts
                        </h2>
                        <p className="section-six-text">
                            Gain access to all of your data in your favorite SQL or BI environment.
                        </p>
                    </div>
                </div>
            </div>

            {loaded && instanceRef.current && (
                <div className="dots margin-auto margin-top-med dots-mobile">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </div>

    )
}

export default SliderHorizontal;