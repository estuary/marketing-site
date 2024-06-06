import Chevron from '@mui/icons-material/ChevronRight';
import { useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';
import { webinarsUrl } from '../../../../shared';
import Carousel from '../../Carousel';
import { OutboundLinkOutlined } from '../../OutboundLink';
import CardItem from '../CardItem';
import {
    ImageWrapper,
    MenuAccordion,
    MenuAccordionButton,
    MenuAccordionContent,
    Slide,
} from '../styles';
import { compare, products } from './items';

const Card = React.lazy(() => import('../Card'));

const HeaderNavbarProduct = ({ active, setActive }) => {
    const isMobile = useMediaQuery('(max-width:1024px)');

    const wrapperRef: React.RefObject<HTMLDivElement> = useRef(null);

    const onClick = (ev) => {
        if (isMobile) {
            ev.preventDefault();
            setActive((prev) => (prev === 'product' ? '' : 'product'));
        }
    };

    const onMouseEnter = (ev) => {
        if (!isMobile) {
            ev.preventDefault();
            setActive('product');
        }
    };

    const onMouseLeave = (ev) => {
        if (!isMobile) {
            ev.preventDefault();
            setActive('');
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                !isMobile &&
                !wrapperRef.current?.contains(event.target) &&
                !event.target.className?.includes?.('active')
            ) {
                setActive('');
            }
        }

        if (active) document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [active, setActive, isMobile]);

    return (
        <MenuAccordion elevation={0} expanded={active}>
            <MenuAccordionButton onClick={onClick} onMouseEnter={onMouseEnter}>
                <Link
                    className={clsx('global-header-link', active && 'active')}
                    to="#"
                >
                    Product
                    <Chevron className="menu-chevron" fontSize="small" />
                </Link>
            </MenuAccordionButton>
            <MenuAccordionContent>
                <React.Suspense fallback={null}>
                    <Card
                        customRef={wrapperRef}
                        show={active}
                        onMouseLeave={onMouseLeave}
                    >
                        <CardItem
                            title="PRODUCT"
                            items={products}
                            onlyContent
                        />
                        <CardItem title="COMPARE" items={compare} />
                        <CardItem className="hide-on-mobile" title="WEBINARS">
                            <Carousel aria-label="Webinars carousel">
                                <Slide key="header-carousel-tour-2">
                                    <ImageWrapper>
                                        <StaticImage
                                            src="../../../images/webinar101.png"
                                            alt="Estuary 101 Webinar"
                                        />
                                    </ImageWrapper>
                                    <OutboundLinkOutlined
                                        target="_blank"
                                        href={webinarsUrl}
                                        theme="dark"
                                        fullWidth
                                    >
                                        Watch Estuary 101
                                    </OutboundLinkOutlined>
                                </Slide>
                            </Carousel>
                        </CardItem>
                    </Card>
                </React.Suspense>
            </MenuAccordionContent>
        </MenuAccordion>
    );
};

export default HeaderNavbarProduct;
