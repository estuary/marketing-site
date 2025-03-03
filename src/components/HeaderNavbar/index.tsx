import { Link } from 'gatsby';
import { Dispatch, SetStateAction, useCallback } from 'react';
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

    return (
        <div className={globalHeaderLinks} onMouseLeave={closeMenus}>
            <LinkProduct
                active={activeMenu === 'product'}
                setActive={setActiveMenu}
            />
            <Link
                onMouseEnter={closeMenus}
                className={globalHeaderLink}
                to="/pricing"
            >
                Pricing
            </Link>
            <Link
                onMouseEnter={closeMenus}
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
                <OutboundLinkOutlined target="_blank" href={dashboardUrl}>
                    Log in
                </OutboundLinkOutlined>
                <OutboundLinkFilled target="_blank" href={dashboardRegisterUrl}>
                    Try it Free
                </OutboundLinkFilled>
            </div>
        </div>
    );
};

export default HeaderNavbar;
