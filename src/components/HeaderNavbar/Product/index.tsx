import Chevron from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';
import { isDesktop } from 'react-device-detect';
import { LinkFilled } from '../../../globalStyles';
import CardItem from '../CardItem';
import { compare, products } from './items';

const Card = React.lazy(() => import('../Card'));

const HeaderNavbarProduct = ({ active, setActive }) => {
    const wrapperRef: React.RefObject<HTMLDivElement> = useRef(null);

    const onClick = (ev) => {
        ev.preventDefault();
        if (!isDesktop) {
            setActive((prev) => (prev === 'product' ? '' : 'product'));
        }
    };

    const onMouseEnter = (ev) => {
        ev.preventDefault();
        if (isDesktop) setActive('product');
    };

    const onMouseLeave = (ev) => {
        ev.preventDefault();
        if (isDesktop) setActive('');
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                isDesktop &&
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
    }, [active, setActive]);

    return (
        <>
            <Link
                className={clsx('global-header-link', active && 'active')}
                to="#"
                onClick={onClick}
                onMouseEnter={onMouseEnter}
            >
                Product
                <Chevron className="menu-chevron" fontSize="small" />
            </Link>
            <React.Suspense fallback={null}>
                <Card
                    customRef={wrapperRef}
                    show={active}
                    onMouseLeave={onMouseLeave}
                >
                    <CardItem title="PRODUCT" onlyContent items={products} />
                    <CardItem title="COMPARE" items={compare} />
                    <CardItem className="hide-on-mobile" title="WEBINARS">
                        <StaticImage
                            src="../../../svgs/navbar-image-1.svg"
                            alt="Connect&Go Success Story"
                        />
                        <LinkFilled
                            target="_blank"
                            to="/customers/connectngo"
                            className="cta-button"
                        >
                            Read Customer Story
                        </LinkFilled>
                    </CardItem>
                </Card>
            </React.Suspense>
        </>
    );
};

export default HeaderNavbarProduct;
