import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import * as React from 'react';
import { useState } from 'react';

const SliderHorizontal = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    const notLoadedSlideStyle = { display: !loaded ? 'none' : 'flex' };

    return (
        <div className="slider-horiztonal-root">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide" style={notLoadedSlideStyle}>
                    <div className="slider-horizontal-text-wrapper">
                        <h2 className="header-horizontal">
                            Built for architects
                        </h2>
                        <p className="section-six-text">
                            Future-proof your systems with unlimited scalability
                            and access to exact copies of all your data with
                            millisecond latency.
                        </p>
                    </div>
                </div>
                <div className="keen-slider__slide" style={notLoadedSlideStyle}>
                    <div className="slider-horizontal-text-wrapper">
                        <h2 className="header-horizontal">
                            Built for engineers
                        </h2>
                        <p className="section-six-text">
                            Spend your time creating value instead of
                            integrating systems.
                        </p>
                    </div>
                </div>
                <div className="keen-slider__slide" style={notLoadedSlideStyle}>
                    <div className="slider-horizontal-text-wrapper">
                        <h2 className="header-horizontal">
                            Built for analysts
                        </h2>
                        <p className="section-six-text">
                            Gain access to all of your data in your favorite SQL
                            or BI environment.
                        </p>
                    </div>
                </div>
            </div>

            {loaded && instanceRef.current ? (
                <div className="dots margin-auto margin-top-med dots-mobile">
                    {[
                        ...Array(
                            instanceRef.current.track.details.slides.length
                        ).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx);
                                }}
                                className={`dot${currentSlide === idx ? ' active' : ''}`}
                            />
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};

export default SliderHorizontal;
