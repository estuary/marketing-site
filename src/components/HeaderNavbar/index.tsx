import { Link } from 'gatsby';
import React, { useCallback } from 'react';
import { OutboundLink } from '../OutboundLink';
import LinkProduct from './Product';
import LinkResources from './Resources';

const HeaderNavbar = ({ activeMenu, setActiveMenu }) => {
    const closeMenus = useCallback(() => setActiveMenu(''), [setActiveMenu]);

    return (
        <div className="global-header-links" onMouseLeave={closeMenus}>
            <LinkProduct
                active={activeMenu === 'product'}
                setActive={setActiveMenu}
            />
            <Link
                onMouseEnter={closeMenus}
                className="global-header-link"
                to="/pricing"
            >
                Pricing
            </Link>
            <Link
                onMouseEnter={closeMenus}
                className="global-header-link"
                to="/integrations"
            >
                Connectors
            </Link>
            <LinkResources
                active={activeMenu === 'resources'}
                setActive={setActiveMenu}
            />
            <OutboundLink
                target="_blank"
                className="global-header-link"
                href="https://docs.estuary.dev"
                onMouseEnter={closeMenus}
            >
                Docs
            </OutboundLink>
        </div>
    );
};

export default HeaderNavbar;
