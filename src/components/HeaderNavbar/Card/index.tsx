import { wrapper, divider, container } from './styles.module.less';

const HeaderCard = ({ children, ...props }) => {
    return (
        <div {...props} className={wrapper}>
            <div className={divider} />
            <div className={container}>{children}</div>
        </div>
    );
};

export default HeaderCard;
