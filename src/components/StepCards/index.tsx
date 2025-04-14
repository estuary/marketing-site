import { container } from './styles.module.less';

const StepCards = ({ children }) => {
    return <div className={container}>{children}</div>;
};

export default StepCards;
