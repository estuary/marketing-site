import { useMediaQuery } from '@mui/material';
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
    ColumnWithTwoRows,
    ImageWrapper,
    MenuAccordion,
    MenuAccordionButton,
    MenuAccordionContent,
    Slide,
} from '../styles';
import { hideOnMobile, longLinkList } from '../styles.module.less';
import Carousel from '../../Carousel';
import SuccessIcon from '../../../svgs/success.svg';
import { listen, read } from './items';
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
        <MenuAccordion elevation={0} expanded={active}>
            <MenuAccordionButton onClick={onClick} onMouseEnter={onMouseEnter}>
                <ResourcesLink active={active} />
            </MenuAccordionButton>
            <MenuAccordionContent>
                <Card>
                    <CardItem
                        className={clsx(hideOnMobile, longLinkList)}
                        title="CASE STUDIES"
                        items={caseStudiesItems}
                        onlyContent
                        active={active}
                    />
                    <ColumnWithTwoRows>
                        <CardItem title="READ" items={read} onlyContent />
                        <CardItem title="LISTEN" items={listen} onlyContent />
                    </ColumnWithTwoRows>
                    <CardItem
                        className={hideOnMobile}
                        title="TOURS"
                        onlyContent
                    >
                        <Carousel aria-label="Tours carousel" hasFullWidthSlide>
                            <Slide key="header-carousel-tour-1">
                                <ImageWrapper>
                                    <StaticImage
                                        src="../../../images/product-tour-2min.png"
                                        alt="Estuary Flow Product tour - 2 minutes"
                                    />
                                </ImageWrapper>
                                <LinkOutlined
                                    target="_blank"
                                    href="/why/"
                                    theme="dark"
                                    $fullWidth
                                >
                                    Watch Product Tour (2 min)
                                </LinkOutlined>
                            </Slide>
                            <Slide key="header-carousel-tour-2">
                                <ImageWrapper>
                                    <StaticImage
                                        src="../../../images/real-time-101-30min.png"
                                        alt="Deploy CDC and Streaming ETL in Minutes Using Estuary Flow"
                                    />
                                </ImageWrapper>
                                <OutboundLinkOutlined
                                    target="_blank"
                                    href={webinarsUrl}
                                    theme="dark"
                                    fullWidth
                                >
                                    Real-time 101 (30 min)
                                </OutboundLinkOutlined>
                            </Slide>
                        </Carousel>
                    </CardItem>
                </Card>
            </MenuAccordionContent>
        </MenuAccordion>
    );
};

export default HeaderNavbarResources;
