import { menuBackground } from './styles.module.less';

interface HeaderNavBarBackgroundProps {
    menuOpen: boolean;
}

const HeaderNavBarBackground = ({ menuOpen }: HeaderNavBarBackgroundProps) => {
    if (menuOpen) {
        return <div className={menuBackground} />;
    }

    return null;
};

export default HeaderNavBarBackground;
