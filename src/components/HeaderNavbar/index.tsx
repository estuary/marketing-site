import { Link } from 'gatsby';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { useMediaQuery } from '@mui/material';
import { globalHeaderLink } from '../styles.module.less';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';
import { dashboardRegisterUrl, dashboardUrl } from '../../../shared';
import OutboundLinkOutlined from '../LinksAndButtons/OutboundLinkOutlined';
import LinkProduct from './Product';
import LinkResources from './Resources';
import LinkSolutions from './Solutions';
import { globalHeaderLinks, mobileMenuButtons } from './styles.module.less';

interface HeaderNavbarProps {
    activeMenu: string | null;
    setActiveMenu: Dispatch<SetStateAction<string | null>>;
}

const HeaderNavbar = ({ activeMenu, setActiveMenu }: HeaderNavbarProps) => {
    const closeMenus = useCallback(() => setActiveMenu(''), [setActiveMenu]);
    const isMobile = useMediaQuery('(max-width:1142px)');
    const handleMouseLeave = !isMobile ? closeMenus : undefined;

    return (
        <div className={globalHeaderLinks} onMouseLeave={handleMouseLeave}>
            <LinkProduct
                active={activeMenu === 'product'}
                setActive={setActiveMenu}
            />
            <Link
                onMouseEnter={handleMouseLeave}
                className={globalHeaderLink}
                to="/pricing"
            >
                Pricing
            </Link>
            <Link
                onMouseEnter={handleMouseLeave}
                className={globalHeaderLink}
                to="/integrations"
            >
                Connectors
            </Link>
            <LinkResources
                active={activeMenu === 'resources'}
                setActive={setActiveMenu}
            />
            <LinkSolutions
                active={activeMenu === 'solutions'}
                setActive={setActiveMenu}
            />
            <div className={mobileMenuButtons}>
                <OutboundLinkOutlined
                    id="log-in-button/mobile-menu"
                    target="_blank"
                    href={dashboardUrl}
                >
                    Log in
                </OutboundLinkOutlined>
                <OutboundLinkFilled
                    id="try-it-free-button/mobile-menu"
                    target="_blank"
                    href={dashboardRegisterUrl}
                >
                    Try it Free
                </OutboundLinkFilled>
            </div>
        </div>
    );
};

export default HeaderNavbar;
