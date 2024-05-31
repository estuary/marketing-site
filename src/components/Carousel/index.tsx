import { useKeenSlider } from 'keen-slider/react';
import * as React from 'react';
import ChevronLeftIcon from '../../svgs/chevron-left.svg';
import ChevronRightIcon from '../../svgs/chevron-right.svg';
import {
    Arrow,
    AvatarImg,
    AvatarSvg,
    AvatarWrapper,
    Description,
    Dot,
    DotWrapper,
    Dots,
    Slide,
    Slider,
    Slides,
    Title,
} from './styles';

type CarouselProps = {
    data: any[];
    hasArrows?: boolean;
};

const Carousel = ({ data, hasArrows = true }: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [loaded, setLoaded] = React.useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    const isRightArrowDisabled = instanceRef.current
        ? currentSlide === instanceRef.current.track.details.slides.length - 1
        : false;
    const isLeftArrowDisabled = currentSlide === 0;

    const onLeftArrowClick = (e: any) =>
        e.stopPropagation() ||
        (instanceRef.current && instanceRef.current.prev());
    const onRightArrowClick = (e: any) =>
        e.stopPropagation() ||
        (instanceRef.current && instanceRef.current.next());
    const onDotClick = (idx: number) => {
        if (instanceRef.current) {
            instanceRef.current.moveToIdx(idx);
        }
    };

    return (
        <>
            <Slides ref={sliderRef} className="keen-slider">
                {data.map(({ id, logo, name, text }) => {
                    const isImageSvg =
                        !logo.localFile.childImageSharp &&
                        logo.localFile.extension === 'svg';

                    return (
                        <Slide
                            key={id}
                            className="keen-slider__slide"
                            style={{ display: loaded ? 'flex' : 'none' }}
                        >
                            <AvatarWrapper>
                                {isImageSvg ? (
                                    <AvatarSvg
                                        src={logo.localFile.publicURL}
                                        alt={`${name} avatar`}
                                        width={110}
                                        height={110}
                                    />
                                ) : (
                                    <AvatarImg
                                        image={
                                            logo.localFile.childImageSharp
                                                ?.gatsbyImageData
                                        }
                                        alt={`${name} avatar`}
                                    />
                                )}
                            </AvatarWrapper>
                            <Title>{name}</Title>
                            <Description>{text}</Description>
                        </Slide>
                    );
                })}
            </Slides>
            {loaded && instanceRef.current ? (
                <Slider>
                    {hasArrows ? (
                        <Arrow
                            onClick={onLeftArrowClick}
                            disabled={isLeftArrowDisabled}
                            aria-label="previous testimonial"
                        >
                            <ChevronLeftIcon />
                        </Arrow>
                    ) : null}
                    <Dots>
                        {[
                            ...Array(
                                instanceRef.current.track.details.slides.length
                            ).keys(),
                        ].map((idx) => {
                            const isDotActive = currentSlide === idx;
                            return (
                                <DotWrapper key={idx}>
                                    <Dot
                                        onClick={() => onDotClick(idx)}
                                        htmlColor={
                                            isDotActive ? '#5072EB' : '#FFFFFF'
                                        }
                                    />
                                </DotWrapper>
                            );
                        })}
                    </Dots>
                    {hasArrows ? (
                        <Arrow
                            onClick={onRightArrowClick}
                            disabled={isRightArrowDisabled}
                            aria-label="next testimonial"
                        >
                            <ChevronRightIcon />
                        </Arrow>
                    ) : null}
                </Slider>
            ) : null}
        </>
    );
};

export default Carousel;
