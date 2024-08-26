import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import CircleIcon from '@mui/icons-material/Circle';
import clsx from 'clsx';
import ChevronLeftIcon from '../../svgs/chevron-left.svg';
import ChevronRightIcon from '../../svgs/chevron-right.svg';
import { useDotButton } from './hooks/useDotButton';
import { usePrevNextButtons } from './hooks/usePrevNextButtons';
import {
    container,
    threeItemsSlide,
    viewport,
    slideWrapper,
    slide,
    arrow,
    dots,
    dotWrapper,
    dot,
    oneContentSlide,
    navigation,
} from './styles.module.less';

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    options?: EmblaOptionsType;
    hasArrow?: boolean;
    dotColor?: string;
    activeDotColor?: string;
    arrowColor?: string;
    hasFullWidthSlide?: boolean;
    hasMultipleItemsSlide?: boolean;
};

const Carousel = ({
    children,
    options,
    hasArrow = false,
    dotColor,
    activeDotColor,
    arrowColor = '#FFFFFF',
    hasFullWidthSlide = false,
    hasMultipleItemsSlide,
    ...rest
}: CarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div
            className={clsx(
                container,
                hasMultipleItemsSlide ? threeItemsSlide : null
            )}
        >
            <div className={viewport} ref={emblaRef}>
                <div className={slideWrapper}>
                    {React.Children.map(children, (child, index) => (
                        <div
                            className={clsx(
                                slide,
                                hasFullWidthSlide ? oneContentSlide : null
                            )}
                            key={index}
                        >
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            <div className={navigation}>
                {hasArrow ? (
                    <button
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                        aria-label="previous slide"
                        className={arrow}
                    >
                        <ChevronLeftIcon color={arrowColor} />
                    </button>
                ) : null}
                {React.Children.count(children) > 1 ? (
                    <ul className={dots}>
                        {scrollSnaps.map((_, index) => (
                            <li
                                className={dotWrapper}
                                key={`${rest['aria-label']}-dot-${index}}`}
                                style={{
                                    backgroundColor:
                                        selectedIndex === index
                                            ? '#5072EB'
                                            : '#FFFFFF',
                                    color:
                                        selectedIndex === index
                                            ? '#5072EB'
                                            : '#FFFFFF',
                                    borderColor:
                                        selectedIndex === index
                                            ? '#5072EB'
                                            : '#47506D',
                                }}
                            >
                                <CircleIcon
                                    className={dot}
                                    onClick={() => onDotButtonClick(index)}
                                />
                            </li>
                        ))}
                    </ul>
                ) : null}
                {hasArrow ? (
                    <button
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                        aria-label="next slide"
                        className={arrow}
                    >
                        <ChevronRightIcon color={arrowColor} />
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default Carousel;
