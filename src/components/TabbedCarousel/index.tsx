import React, { useState, useCallback, useEffect, ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Tabs, Tab } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { tabStyling } from '../../../shared';
import {
    container,
    tabNavigation,
    embla,
    emblaViewport,
    emblaSlide,
    contentArea,
    tabsStyles,
    sectionIndicator,
    indicatorContent,
    indicatorText,
    indicatorArrow,
    indicatorSection,
    indicatorDivider,
} from './styles.module.less';

export interface TabItem {
    id: number;
    label: string;
}

export interface TabbedCarouselProps {
    tabs: TabItem[];
    children: ReactNode[];
    maxSlidesInView?: number;
    slideHeight?: string;
}

const TabbedCarousel: React.FC<TabbedCarouselProps> = ({
    tabs,
    children,
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
        <section>
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
                            >
                                <div className={contentArea}>{child}</div>
                                {index < tabs.length - 1 ? (
                                    <div className={sectionIndicator}>
                                        <div className={indicatorContent}>
                                            <div className={indicatorSection}>
                                                <ArrowForwardIosIcon
                                                    className={indicatorArrow}
                                                />
                                                <span className={indicatorText}>
                                                    {tabs[
                                                        index + 1
                                                    ].label.toUpperCase()}
                                                </span>
                                            </div>
                                            {index > 0 ? (
                                                <>
                                                    <div
                                                        className={
                                                            indicatorDivider
                                                        }
                                                    />
                                                    <div
                                                        className={
                                                            indicatorSection
                                                        }
                                                    >
                                                        <span
                                                            className={
                                                                indicatorText
                                                            }
                                                        >
                                                            {tabs[
                                                                index
                                                            ].label.toUpperCase()}
                                                        </span>
                                                        <ArrowBackIosNewIcon
                                                            className={
                                                                indicatorArrow
                                                            }
                                                        />
                                                    </div>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabbedCarousel;
