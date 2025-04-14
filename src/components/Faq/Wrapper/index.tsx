import { questionsList } from './styles.module.less';

const Wrapper = ({ children }) => {
    return <ol className={questionsList}>{children}</ol>;
};

export default Wrapper;
