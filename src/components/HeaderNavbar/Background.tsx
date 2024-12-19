import { menuBackground } from './styles.module.less';

const HeaderNavBarBackground = ({ menuOpen }) => {
    if (menuOpen) {
        return <div className={menuBackground} />;
    }

    return null;
};

export default HeaderNavBarBackground;
