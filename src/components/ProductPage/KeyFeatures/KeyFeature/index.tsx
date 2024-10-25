import React from 'react';
import HTMLTooltip from '../../../HTMLTooltip';
import KeyFeatureContent from '../KeyFeatureContent';
import { DescriptionWrapper } from './styles';

const KeyFeature = ({ props, feature, icon, isDesktop }) => {
    const featureDescription = (
        <DescriptionWrapper>{feature.description}</DescriptionWrapper>
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
