import React from 'react';
import KeyFeature from '../Homepage/DeploymentModes/KeyFeature';
import { wrapper } from './styles.module.less';

interface DeploymentOptionDetailsProps {
    title: string;
    description: string;
    keyFeatures: string[];
    TitleHeadingLevel?: keyof JSX.IntrinsicElements;
    KeyFeaturesTitleHeadingLevel?: keyof JSX.IntrinsicElements;
}

const DeploymentOptionDetails = ({
    title,
    description,
    keyFeatures,
    TitleHeadingLevel = 'h3',
    KeyFeaturesTitleHeadingLevel = 'h4',
}: DeploymentOptionDetailsProps) => {
    return (
        <div className={wrapper}>
            <TitleHeadingLevel>{title}</TitleHeadingLevel>
            <p>{description}</p>
            <KeyFeaturesTitleHeadingLevel>
                Key Features:
            </KeyFeaturesTitleHeadingLevel>
            <ul>
                {keyFeatures.map((keyFeature, index) => (
                    <KeyFeature key={index} title={keyFeature} />
                ))}
            </ul>
        </div>
    );
};

export default DeploymentOptionDetails;
