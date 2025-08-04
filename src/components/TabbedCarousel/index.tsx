import React, { useState, useCallback, useEffect, ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Tabs, Tab } from '@mui/material';
import { tabStyling } from '../../../shared';
import {
    tabbedCarousel,
    container,
    tabNavigation,
    embla,
    emblaViewport,
    emblaSlide,
    contentArea,
    tabsStyles,
} from './styles.module.less';

export interface TabItem {
    id: number;
    label: string;
}

export interface TabbedCarouselProps {
    tabs: TabItem[];
    children: ReactNode[];
    className?: string;
    maxSlidesInView?: number;
    slideHeight?: string;
}

const TabbedCarousel: React.FC<TabbedCarouselProps> = ({
    tabs,
    children,
    className = '',
    maxSlidesInView: _maxSlidesInView = 2,
    slideHeight: _slideHeight = '498px',
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        dragFree: false,
        slidesToScroll: 1,
        loop: false,
        skipSnaps: false,
        inViewThreshold: 0.5,
    });

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        const currentIndex = emblaApi.selectedScrollSnap();
        setSelectedIndex(currentIndex);
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            console.log('Scrolling to index:', index);
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    useEffect(() => {
        if (!emblaApi) return;

        const initCarousel = () => {
            emblaApi.reInit();
            onSelect();
        };

        // Initialize after a short delay to ensure DOM is ready
        const timeoutId = setTimeout(initCarousel, 100);

        emblaApi.on('select', onSelect);
        emblaApi.on('init', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            clearTimeout(timeoutId);
            emblaApi.off('select', onSelect);
            emblaApi.off('init', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    const handleTabClick = (index: number) => {
        console.log('Tab clicked:', index);
        setSelectedIndex(index);
        scrollTo(index);
    };

    return (
        <section className={`${tabbedCarousel} ${className}`}>
            <div className={container}>
                <div className={tabNavigation}>
                    <Tabs
                        value={selectedIndex}
                        onChange={(_, newValue) => handleTabClick(newValue)}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="Succes story sections tabs"
                        aria-controls=""
                        TabIndicatorProps={{
                            style: { display: 'none' },
                        }}
                        className={tabsStyles}
                    >
                        {tabs.map((tab) => (
                            <Tab
                                key={tab.id}
                                label={tab.label}
                                disableRipple
                                sx={tabStyling}
                            />
                        ))}
                    </Tabs>
                </div>

                <div className={embla} ref={emblaRef}>
                    <div className={emblaViewport}>
                        {children.map((child, index) => (
                            <div
                                key={index}
                                className={emblaSlide}
                                data-embla-slide={index}
                                style={{
                                    // Remove width restriction, let slide grow to content
                                    flex: '0 0 auto',
                                }}
                            >
                                <div className={contentArea}>{child}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabbedCarousel;
