import { Link } from 'gatsby';
import React, { useCallback, useState } from 'react';
import { OutboundLink } from '../OutboundLink';
import LinkProduct from './Product';
import LinkResources from './Resources';
import { MenuBackground } from './styles';

const HeaderNavbar = () => {
    const [activeMenu, setActiveMenu] = useState('');

    const closeMenus = useCallback(() => setActiveMenu(''), []);

    return (
        <>
            {activeMenu ? <MenuBackground /> : null}
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
        </>
    );
};

export default HeaderNavbar;
