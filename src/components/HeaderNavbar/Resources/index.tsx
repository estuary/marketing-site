import {
    useMediaQuery,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import clsx from 'clsx';
import { webinarsUrl } from '../../../../shared';
import { LinkOutlined } from '../../../globalStyles';
import { OutboundLinkOutlined } from '../../OutboundLink';
import Card from '../Card';
import CardItem from '../CardItem';
import {
    hideOnMobile,
    longLinkList,
    accordionDetails,
    imageWrapper,
    slide,
    columnWithTwoRows,
} from '../styles.module.less';
import Carousel from '../../Carousel';
import SuccessIcon from '../../../svgs/success.svg';
import { accordionStyles, accordionSummaryStyles } from '../shared';
import { listen, read, partners } from './items';
import ResourcesLink from './Link';

const iconSize = 16;

const HeaderNavbarResources = ({ active, setActive }) => {
    const {
        allStrapiCaseStudy: { nodes: allCaseStudies },
    } = useStaticQuery(graphql`
        query GetAllMenuCaseStudies {
            allStrapiCaseStudy(limit: 7) {
                nodes {
                    LinkOneLiner
                    Description
                    Title
                    Slug
                    id
                }
            }
        }
    `);

    const isMobile = useMediaQuery('(max-width:1024px)');

    const onClick = (ev: { preventDefault: () => void }) => {
        if (isMobile) {
            ev.preventDefault();
            setActive((prev: string) =>
                prev === 'resources' ? '' : 'resources'
            );
        }
    };

    const onMouseEnter = (ev: { preventDefault: () => void }) => {
        if (!isMobile) {
            ev.preventDefault();
            setActive('resources');
        }
    };

    const caseStudiesItems = allCaseStudies.map((caseStudy) => ({
        name: caseStudy.Title.toUpperCase(),
        to: `/customers/${caseStudy.Slug}`,
        description: caseStudy.LinkOneLiner,
        Image: () => <SuccessIcon width={iconSize} height={iconSize} />,
    }));

    return (
        <Accordion elevation={0} expanded={active} sx={accordionStyles}>
            <AccordionSummary
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                sx={accordionSummaryStyles}
            >
                <ResourcesLink active={active} />
            </AccordionSummary>
            <AccordionDetails className={accordionDetails}>
                <Card>
                    <div className={columnWithTwoRows}>
                        <CardItem
                            className={hideOnMobile}
                            title="ECOSYSTEM"
                            items={partners}
                            onlyContent
                        />
                        <CardItem
                            className={clsx(hideOnMobile, longLinkList)}
                            title="CASE STUDIES"
                            items={caseStudiesItems}
                            onlyContent
                            active={active}
                        />
                    </div>
                    <div className={columnWithTwoRows}>
                        <CardItem title="READ" items={read} onlyContent />
                        <CardItem title="LISTEN" items={listen} onlyContent />
                    </div>
                    <CardItem
                        className={hideOnMobile}
                        title="TOURS"
                        onlyContent
                    >
                        <Carousel aria-label="Tours carousel" hasFullWidthSlide>
                            <div key="header-carousel-tour-1" className={slide}>
                                <div className={imageWrapper}>
                                    <StaticImage
                                        src="../../../images/product-tour-2min.png"
                                        alt="Estuary Flow Product tour - 2 minutes"
                                    />
                                </div>
                                <LinkOutlined
                                    target="_blank"
                                    href="/why/"
                                    theme="dark"
                                    $fullWidth
                                >
                                    Watch Product Tour (2 min)
                                </LinkOutlined>
                            </div>
                            <div key="header-carousel-tour-2" className={slide}>
                                <div className={imageWrapper}>
                                    <StaticImage
                                        src="../../../images/real-time-101-30min.png"
                                        alt="Deploy CDC and Streaming ETL in Minutes Using Estuary Flow"
                                    />
                                </div>
                                <OutboundLinkOutlined
                                    target="_blank"
                                    href={webinarsUrl}
                                    theme="dark"
                                    fullWidth
                                >
                                    Real-time 101 (30 min)
                                </OutboundLinkOutlined>
                            </div>
                        </Carousel>
                    </CardItem>
                </Card>
            </AccordionDetails>
        </Accordion>
    );
};

export default HeaderNavbarResources;
