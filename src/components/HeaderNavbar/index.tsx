import { Link } from 'gatsby';
import { useCallback } from 'react';
import { globalHeaderLink } from '../styles.module.less';
import LinkProduct from './Product';
import LinkResources from './Resources';
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
        </div>
    );
};

export default HeaderNavbar;
