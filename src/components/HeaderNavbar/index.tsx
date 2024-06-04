import { Link } from 'gatsby';
import React, { useState } from 'react';
import { OutboundLink } from '../OutboundLink';

import LinkProduct from './Product';
import LinkResources from './Resources';

const HeaderNavbar = () => {
    const [current, setCurrent] = useState('');

    const closeMenus = () => setCurrent('');

    return (
        <div className="global-header-links" onMouseLeave={closeMenus}>
            <LinkProduct
                active={current === 'product'}
                setActive={setCurrent}
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
                active={current === 'resources'}
                setActive={setCurrent}
            />
            <OutboundLink
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
