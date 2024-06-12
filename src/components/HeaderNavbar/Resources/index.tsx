import Chevron from '@mui/icons-material/ChevronRight';
import { useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { webinarsUrl } from '../../../../shared';
import { LinkOutlined } from '../../../globalStyles';
import Carousel from '../../Carousel';
import { OutboundLinkOutlined } from '../../OutboundLink';
import CardItem from '../CardItem';
import {
    ColumnWithTwoRows,
    ImageWrapper,
    MenuAccordion,
    MenuAccordionButton,
    MenuAccordionContent,
    Slide,
} from '../styles';
import Card from '../Card';
import { caseStudies, listen, read } from './items';

const HeaderNavbarResources = ({ active, setActive }) => {
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

    return (
        <MenuAccordion elevation={0} expanded={active}>
            <MenuAccordionButton onClick={onClick} onMouseEnter={onMouseEnter}>
                <Link
                    className={clsx('global-header-link', active && 'active')}
                    to="#"
                >
                    Resources
                    <Chevron className="menu-chevron" fontSize="small" />
                </Link>
            </MenuAccordionButton>
            <MenuAccordionContent>
                <Card>
                    <CardItem
                        className="hide-on-mobile"
                        title="CASE STUDIES"
                        items={caseStudies}
                        onlyContent
                    />
                    <ColumnWithTwoRows>
                        <CardItem title="READ" items={read} onlyContent />
                        <CardItem
                            className="no-padding"
                            title="LISTEN"
                            items={listen}
                            onlyContent
                        />
                    </ColumnWithTwoRows>
                    <CardItem
                        className="hide-on-mobile"
                        title="TOURS"
                        onlyContent
                    >
                        <Carousel aria-label="Tours carousel">
                            <Slide key="header-carousel-tour-1">
                                <ImageWrapper>
                                    <StaticImage
                                        src="../../../images/product-tour-2min.png"
                                        alt="Product tour - 2 minutes"
                                    />
                                </ImageWrapper>
                                <LinkOutlined
                                    target="_blank"
                                    to="/why"
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
                                        alt="Product tour - 2 minutes"
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
