import HTMLTooltip from '../../../HTMLTooltip';
import KeyFeatureContent from '../KeyFeatureContent';
import { descriptionWrapper } from './styles.module.less';

const KeyFeature = ({ props, feature, icon, isDesktop }) => {
    const featureDescription = (
        <div className={descriptionWrapper}>{feature.description}</div>
    );

    const keyFeatureContent = (
        <KeyFeatureContent
            title={feature.title}
            description={featureDescription}
            icon={icon}
            isReversed={props.placement === 'left'}
        />
    );

    return isDesktop ? (
        <HTMLTooltip {...props} title={featureDescription}>
            {keyFeatureContent}
        </HTMLTooltip>
    ) : (
        <div>{keyFeatureContent}</div>
    );
};

export default KeyFeature;
