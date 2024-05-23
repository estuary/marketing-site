import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import * as React from 'react';
import { useState } from 'react';

const Slider = () => {
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
    function Arrow({ disabled, onClick, left }) {
        const disabeld = disabled ? ' arrow--disabled' : '';
        return (
            <svg
                onClick={onClick}
                className={`arrow ${
                    left ? 'arrow--left' : 'arrow--right'
                } ${disabeld}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                {left ? (
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                ) : null}
                {!left ? (
                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                ) : null}
            </svg>
        );
    }

    return (
        <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                    <h2 className="section-six-header">
                        Built for &#123;architects&#125;{' '}
                    </h2>
                    <div className="section-six-text-wrapper">
                        <p className="section-six-text">
                            Future-proof your systems with unlimited scalability
                            and access to exact copies of all your data with
                            millisecond latency.
                        </p>
                    </div>
                </div>
                <div className="keen-slider__slide">
                    <h2 className="section-six-header">
                        Built for &#123;engineers&#125;{' '}
                    </h2>
                    <div className="section-six-text-wrapper">
                        <p className="section-six-text">
                            Spend your time creating value instead of
                            integrating systems.
                        </p>
                    </div>
                </div>
                <div className="keen-slider__slide">
                    <h2 className="section-six-header">
                        Built for &#123;analysts&#125;{' '}
                    </h2>
                    <div className="section-six-text-wrapper">
                        <p className="section-six-text">
                            Gain access to all of your data in your favorite SQL
                            or BI environment.
                        </p>
                    </div>
                </div>
            </div>
            {loaded && instanceRef.current ? (
                <>
                    <Arrow
                        left
                        onClick={(e) =>
                            e.stopPropagation() || instanceRef.current.prev()
                        }
                        disabled={currentSlide === 0}
                    />

                    <Arrow
                        onClick={(e) =>
                            e.stopPropagation() || instanceRef.current.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                    />
                </>
            ) : null}

            {loaded && instanceRef.current ? (
                <div className="dots">
                    {[
                        ...Array(
                            instanceRef.current.track.details.slides.length
                        ).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current.moveToIdx(idx);
                                }}
                                aria-label="Carousel Target"
                                className={`dot${currentSlide === idx ? ' active' : ''}`}
                            />
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};

export default Slider;
