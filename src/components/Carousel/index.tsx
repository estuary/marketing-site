import { Children, HTMLAttributes, ReactNode } from 'react';
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
    fullWidthNavigation,
    dotSelected,
} from './styles.module.less';

type CarouselProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    options?: EmblaOptionsType;
    hasArrow?: boolean;
    arrowColor?: string;
    hasFullWidthSlide?: boolean;
    hasMultipleItemsSlide?: boolean;
    slideSize?: string;
    slideGap?: string;
    hasViewport?: boolean;
};

const Carousel = ({
    children,
    options,
    hasArrow = false,
    arrowColor = 'var(--white)',
    hasFullWidthSlide = false,
    hasMultipleItemsSlide,
    slideSize,
    slideGap,
    hasViewport,
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

    const containerStyles = {};

    if (slideSize) {
        containerStyles['--slide-size'] = slideSize;
    }
    if (slideGap) {
        containerStyles['--slide-gap'] = slideGap;
    }

    return (
        <div
            className={clsx(
                container,
                hasMultipleItemsSlide ? threeItemsSlide : null,
                rest.className
            )}
            style={containerStyles}
        >
            <div className={hasViewport ? viewport : null} ref={emblaRef}>
                <ul className={slideWrapper}>
                    {Children.map(children, (child, index) => (
                        <li
                            className={clsx(
                                slide,
                                hasFullWidthSlide ? oneContentSlide : null
                            )}
                            key={index}
                        >
                            {child}
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={clsx(
                    navigation,
                    !hasViewport ? fullWidthNavigation : null
                )}
            >
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
                {Children.count(children) > 1 ? (
                    <ul className={dots}>
                        {scrollSnaps.map((_, index) => (
                            <li
                                className={clsx(
                                    dotWrapper,
                                    selectedIndex === index ? dotSelected : null
                                )}
                                key={`${rest['aria-label']}-dot-${index}}`}
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
