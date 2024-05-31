import Chevron from '@mui/icons-material/ChevronRight';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';
import { isDesktop } from 'react-device-detect';
import { webinarsUrl } from '../../../../shared';
import { OutboundLinkOutlined } from '../../OutboundLink';
import CardItem from '../CardItem';
import { ColumnWithTwoRows, ImageWrapper } from '../styles';
import { caseStudies, listen, read } from './items';

const Card = React.lazy(() => import('../Card'));

const HeaderNavbarResources = ({ active, setActive }) => {
    const wrapperRef: React.RefObject<HTMLDivElement> = useRef(null);

    const onClick = (ev) => {
        ev.preventDefault();
        if (!isDesktop) {
            setActive((prev) => (prev === 'resources' ? '' : 'resources'));
        }
    };

    const onMouseEnter = (ev) => {
        ev.preventDefault();
        if (isDesktop) setActive('resources');
    };

    const onMouseLeave = (ev) => {
        ev.preventDefault();
        if (isDesktop) setActive('');
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target) &&
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
                Resources
                <Chevron className="menu-chevron" fontSize="small" />
            </Link>
            <React.Suspense fallback={null}>
                <Card
                    customRef={wrapperRef}
                    show={active}
                    onMouseLeave={onMouseLeave}
                >
                    <CardItem
                        className="hide-on-mobile"
                        title="CASE STUDIES"
                        items={caseStudies}
                    />
                    <ColumnWithTwoRows>
                        <CardItem title="READ" onlyContent items={read} />
                        <CardItem
                            className="no-padding"
                            title="LISTEN"
                            onlyContent
                            items={listen}
                        />
                    </ColumnWithTwoRows>
                    <CardItem className="hide-on-mobile" title="TOURS">
                        <ImageWrapper>
                            <StaticImage
                                src="../../../images/product-tour-2min.png"
                                alt="Product tour - 2 minutes"
                            />
                        </ImageWrapper>
                        <OutboundLinkOutlined
                            target="_blank"
                            href={webinarsUrl} // TODO: replace this URL with the tour video URL
                            theme='dark'
                        >
                            Watch Product Tour (2min)
                        </OutboundLinkOutlined>
                    </CardItem>
                </Card>
            </React.Suspense>
        </>
    );
};

export default HeaderNavbarResources;
