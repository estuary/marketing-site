import {
    useMediaQuery,
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { webinarsUrl } from '../../../../shared';
import Card from '../Card';
import CardItem from '../CardItem';
import {
    hideOnMobile,
    accordionDetails,
    imageWrapper,
    slide,
} from '../styles.module.less';
import Carousel from '../../Carousel';
import { accordionStyles, accordionSummaryStyles, MenuEvent } from '../shared';
import OutboundLinkOutlined from '../../LinksAndButtons/OutboundLinkOutlined';
import HeaderViewAllLink from '../HeaderViewAllLink';
import MenuLink from '../MenuLink';
import { compare, products } from './items';

const HeaderNavbarProduct = ({ active, setActive }) => {
    const isMobile = useMediaQuery('(max-width:1142px)');

    const onClick = (ev: MenuEvent) => {
        if (isMobile) {
            ev.preventDefault();
            setActive((prev: string) => (prev === 'product' ? '' : 'product'));
        }
    };

    const onMouseEnter = (ev: MenuEvent) => {
        if (!isMobile) {
            ev.preventDefault();
            setActive('product');
        }
    };

    return (
        <Accordion elevation={0} expanded={active} sx={accordionStyles}>
            <AccordionSummary
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                sx={accordionSummaryStyles}
            >
                <MenuLink title="Product" active={active} />
            </AccordionSummary>
            <AccordionDetails className={accordionDetails}>
                <Card>
                    <CardItem title="PRODUCT" items={products} />
                    <CardItem
                        title="COMPARE"
                        items={compare}
                        hasSeeMoreButton
                        contentFooterLink={
                            <HeaderViewAllLink
                                to="/etl-tools"
                                viewAllSuffix="comparisons"
                            />
                        }
                    />
                    <CardItem className={hideOnMobile} title="WEBINARS">
                        <Carousel
                            aria-label="Webinars carousel"
                            hasFullWidthSlide
                        >
                            <div key="header-carousel-tour-2" className={slide}>
                                <div className={imageWrapper}>
                                    <StaticImage
                                        src="../../../images/webinar101.png"
                                        alt="Estuary 101 Webinar"
                                    />
                                </div>
                                <OutboundLinkOutlined
                                    target="_blank"
                                    href={webinarsUrl}
                                    fullWidth
                                >
                                    Watch Estuary 101
                                </OutboundLinkOutlined>
                            </div>
                        </Carousel>
                    </CardItem>
                </Card>
            </AccordionDetails>
        </Accordion>
    );
};

export default HeaderNavbarProduct;
