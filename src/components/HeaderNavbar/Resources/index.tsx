import {
    useMediaQuery,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import clsx from 'clsx';
import { webinarsUrl } from '../../../../shared';
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
import { accordionStyles, accordionSummaryStyles, MenuEvent } from '../shared';
import LinkOutlined from '../../LinksAndButtons/LinkOutlined';
import OutboundLinkOutlined from '../../LinksAndButtons/OutboundLinkOutlined';
import HeaderViewAllLink from '../HeaderViewAllLink';
import MenuLink from '../MenuLink';
import { listen, read, partners } from './items';

const iconSize = 16;

const HeaderNavbarResources = ({ active, setActive }) => {
    const {
        allStrapiCaseStudy: { nodes: allSuccessStories },
    } = useStaticQuery(graphql`
        query GetAllMenuSuccessStories {
            allStrapiCaseStudy(
                limit: 4
                filter: {
                    Slug: {
                        in: [
                            "prodege"
                            "davidenergy"
                            "flashpack"
                            "Launchmetrics"
                        ]
                    }
                }
            ) {
                nodes {
                    LinkOneLiner
                    Title
                    Slug
                    id
                }
            }
        }
    `);

    const isMobile = useMediaQuery('(max-width:1142px)');

    const onClick = (ev: MenuEvent) => {
        if (isMobile) {
            ev.preventDefault();
            setActive((prev: string) =>
                prev === 'resources' ? '' : 'resources'
            );
        }
    };

    const onMouseEnter = (ev: MenuEvent) => {
        if (!isMobile) {
            ev.preventDefault();
            setActive('resources');
        }
    };

    const successStoriesSlugOrder = [
        'prodege',
        'davidenergy',
        'flashpack',
        'Launchmetrics',
    ];

    const orderedAllSuccessStories = allSuccessStories.sort(
        (a: { Slug: string }, b: { Slug: string }) => {
            return (
                successStoriesSlugOrder.indexOf(a.Slug) -
                successStoriesSlugOrder.indexOf(b.Slug)
            );
        }
    );

    const successStoryItems = orderedAllSuccessStories.map((successStory) => ({
        name: successStory.Title.toUpperCase(),
        to: `/success-stories/${successStory.Slug}`,
        description: successStory.LinkOneLiner,
        Image: () => <SuccessIcon width={iconSize} height={iconSize} />,
    }));

    return (
        <Accordion elevation={0} expanded={active} sx={accordionStyles}>
            <AccordionSummary
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                sx={accordionSummaryStyles}
            >
                <MenuLink title="Resources" active={active} />
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
                            title="SUCCESS STORIES"
                            items={successStoryItems}
                            onlyContent
                            active={active}
                            contentFooterLink={
                                <HeaderViewAllLink
                                    to="/success-stories/"
                                    viewAllSuffix="success stories"
                                />
                            }
                        />
                    </div>
                    <div className={columnWithTwoRows}>
                        <CardItem
                            title="READ"
                            items={read}
                            onlyContent
                            hasSeeMoreButton
                            maxNumberOfLinks={5}
                        />
                        <CardItem title="LISTEN" items={listen} onlyContent />
                    </div>
                    <CardItem className={hideOnMobile} title="DEMO" onlyContent>
                        <Carousel aria-label="Demos carousel" hasFullWidthSlide>
                            <div key="header-carousel-demo-1" className={slide}>
                                <div className={imageWrapper}>
                                    <StaticImage
                                        src="../../../images/product-tour-2min.png"
                                        alt="Estuary Flow Product demo"
                                    />
                                </div>
                                <LinkOutlined
                                    target="_blank"
                                    href="/demo/"
                                    fullWidth
                                >
                                    Watch Interactive Demo
                                </LinkOutlined>
                            </div>
                            <div key="header-carousel-demo-2" className={slide}>
                                <div className={imageWrapper}>
                                    <StaticImage
                                        src="../../../images/real-time-101-30min.png"
                                        alt="Deploy CDC and Streaming ETL in Minutes Using Estuary Flow"
                                    />
                                </div>
                                <OutboundLinkOutlined
                                    target="_blank"
                                    href={webinarsUrl}
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
