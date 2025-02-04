import { Link } from 'gatsby';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { globalHeaderLink } from '../styles.module.less';
import LinkProduct from './Product';
import LinkResources from './Resources';
import { globalHeaderLinks } from './styles.module.less';

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
        </div>
    );
};

export default HeaderNavbar;
