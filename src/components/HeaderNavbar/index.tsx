import { Link } from 'gatsby';
import { useCallback } from 'react';
import { globalHeaderLink } from '../styles.module.less';
import OutboundLink from '../LinksAndButtons/OutboundLink';
import LinkProduct from './Product';
import LinkResources from './Resources';
import LinkSolutions from './Solutions';
import { globalHeaderLinks } from './styles.module.less';

const HeaderNavbar = ({ activeMenu, setActiveMenu }) => {
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
            <OutboundLink
                target="_blank"
                className={globalHeaderLink}
                href="https://docs.estuary.dev"
                onMouseEnter={closeMenus}
            >
                Docs
            </OutboundLink>
        </div>
    );
};

export default HeaderNavbar;
