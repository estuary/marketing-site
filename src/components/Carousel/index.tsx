import * as React from 'react';
import ChevronLeftIcon from '../../svgs/chevron-left.svg';
import ChevronRightIcon from '../../svgs/chevron-right.svg';
import {
    Arrow,
    Container,
    Dot,
    DotWrapper,
    Dots,
    Navigation,
    Slide,
    Viewport,
} from './styles';

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    hasArrow?: boolean;
    dotColor?: string;
    activeDotColor?: string;
    arrowColor?: string;
};

const Carousel = ({
    children,
    hasArrow = false,
    dotColor,
    activeDotColor,
    arrowColor = '#FFFFFF',
    ...rest
}: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const hasMounted = React.useRef(false);
    const slideRefs = React.useRef<(HTMLLIElement | null)[]>([]);
    const isDotClick = React.useRef(false);

    const isLeftArrowDisabled = currentSlide === 0;
    const isRightArrowDisabled = currentSlide === slideRefs.current.length - 1;

    const observeSlides = React.useCallback(
        (observer: IntersectionObserver) => {
            slideRefs.current.forEach((slide) => {
                if (slide) {
                    observer.observe(slide);
                }
            });
        },
        []
    );

    const createIntersectionObserver = React.useCallback(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    const index = slideRefs.current.indexOf(
                        entry.target as HTMLLIElement
                    );
                    if (index !== -1) {
                        setCurrentSlide(index);
                    }
                }
            });
        };

        return new IntersectionObserver(observerCallback, { threshold: 0.5 });
    }, []);

    React.useEffect(() => {
        if (hasMounted.current && slideRefs.current[currentSlide]) {
            slideRefs.current[currentSlide]?.scrollIntoView({
                behavior: isDotClick.current ? 'instant' : 'smooth',
                block: 'nearest',
                inline: 'center',
            });
            isDotClick.current = false;
        }
    }, [currentSlide]);

    React.useEffect(() => {
        const observer = createIntersectionObserver();
        observeSlides(observer);

        hasMounted.current = true;

        return () => {
            observer.disconnect();
        };
    }, [createIntersectionObserver, observeSlides]);

    const onArrowClick = React.useCallback(
        (direction: 'left' | 'right') => () => {
            if (!isTransitioning) {
                setIsTransitioning(true);
                const nextSlide =
                    direction === 'left' ? currentSlide - 1 : currentSlide + 1;
                setCurrentSlide(nextSlide);
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 500);
            }
        },
        [currentSlide, isTransitioning]
    );

    const handleDotClick = React.useCallback(
        (index: number) => {
            setCurrentSlide(index);
            isDotClick.current = true;
        },
        [isDotClick]
    );

    return (
        <Container aria-label={rest['aria-label']} {...rest}>
            <Viewport>
                {React.Children.map(children, (child, index) => (
                    <Slide
                        key={`${rest['aria-label']}-${index}}`}
                        ref={(el) => {
                            slideRefs.current[index] = el;
                        }}
                    >
                        {child}
                    </Slide>
                ))}
            </Viewport>
            <Navigation>
                {hasArrow ? (
                    <Arrow
                        onClick={onArrowClick('left')}
                        disabled={isLeftArrowDisabled}
                        aria-label="previous slide"
                    >
                        <ChevronLeftIcon color={arrowColor} />
                    </Arrow>
                ) : null}
                {React.Children.count(children) > 1 ? (
                    <Dots>
                        {React.Children.map(children, (_, index) => (
                            <DotWrapper
                                $isActive={currentSlide === index}
                                key={`${rest['aria-label']}-dot-${index}}`}
                            >
                                <Dot onClick={() => handleDotClick(index)} />
                            </DotWrapper>
                        ))}
                    </Dots>
                ) : null}
                {hasArrow ? (
                    <Arrow
                        onClick={onArrowClick('right')}
                        disabled={isRightArrowDisabled}
                        aria-label="next slide"
                    >
                        <ChevronRightIcon color={arrowColor} />
                    </Arrow>
                ) : null}
            </Navigation>
        </Container>
    );
};

export default Carousel;
