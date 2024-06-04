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
};

const Carousel = ({ children, hasArrow = false, ...rest }: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false);
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
        if (slideRefs.current[currentSlide]) {
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
                        aria-label="previous testimonial"
                    >
                        <ChevronLeftIcon />
                    </Arrow>
                ) : null}
                <Dots>
                    {React.Children.map(children, (_, index) => (
                        <DotWrapper key={`${rest['aria-label']}-dot-${index}}`}>
                            <Dot
                                htmlColor={
                                    currentSlide === index
                                        ? '#5072EB'
                                        : '#FFFFFF'
                                }
                                onClick={() => handleDotClick(index)}
                            />
                        </DotWrapper>
                    ))}
                </Dots>
                {hasArrow ? (
                    <Arrow
                        onClick={onArrowClick('right')}
                        disabled={isRightArrowDisabled}
                        aria-label="next testimonial"
                    >
                        <ChevronRightIcon />
                    </Arrow>
                ) : null}
            </Navigation>
        </Container>
    );
};

export default Carousel;
