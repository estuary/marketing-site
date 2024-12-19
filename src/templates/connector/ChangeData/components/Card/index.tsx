import {
    container,
    containerContent,
    containerImage,
} from './styles.module.less';

const TheAutomationCard = ({ title, description, children }) => {
    return (
        <div className={container}>
            <div className={containerImage}>{children}</div>
            <div className={containerContent}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TheAutomationCard;
