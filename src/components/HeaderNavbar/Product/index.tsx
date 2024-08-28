import { useMediaQuery } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { webinarsUrl } from '../../../../shared';
import { OutboundLinkOutlined } from '../../OutboundLink';
import Card from '../Card';
import CardItem from '../CardItem';
import {
    ImageWrapper,
    MenuAccordion,
    MenuAccordionButton,
    MenuAccordionContent,
    Slide,
} from '../styles';
import { hideOnMobile } from '../styles.module.less';
import Carousel from '../../Carousel';
import { compare, products } from './items';
import ProductLink from './Link';

const HeaderNavbarProduct = ({ active, setActive }) => {
    const isMobile = useMediaQuery('(max-width:1024px)');

    const onClick = (ev: { preventDefault: () => void }) => {
        if (isMobile) {
            ev.preventDefault();
            setActive((prev: string) => (prev === 'product' ? '' : 'product'));
        }
    };

    const onMouseEnter = (ev: { preventDefault: () => void }) => {
        if (!isMobile) {
            ev.preventDefault();
            setActive('product');
        }
    };

    return (
        <MenuAccordion elevation={0} expanded={active}>
            <MenuAccordionButton onClick={onClick} onMouseEnter={onMouseEnter}>
                <ProductLink active={active} />
            </MenuAccordionButton>
            <MenuAccordionContent>
                <Card>
                    <CardItem title="PRODUCT" items={products} onlyContent />
                    <CardItem title="COMPARE" items={compare} />
                    <CardItem className={hideOnMobile} title="WEBINARS">
                        <Carousel
                            aria-label="Webinars carousel"
                            hasFullWidthSlide
                        >
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
            </MenuAccordionContent>
        </MenuAccordion>
    );
};

export default HeaderNavbarProduct;
