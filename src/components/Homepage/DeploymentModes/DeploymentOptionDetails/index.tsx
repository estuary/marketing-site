import React from 'react';
import KeyFeature from '../KeyFeature';
import { wrapper } from './styles.module.less';

interface DeploymentOptionDetailsProps {
    title: string;
    description: string;
    keyFeatures: string[];
}

const DeploymentOptionDetails = ({
    title,
    description,
    keyFeatures,
}: DeploymentOptionDetailsProps) => {
    return (
        <div className={wrapper}>
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>Key Features:</h4>
            <ul>
                {keyFeatures.map((keyFeature, index) => (
                    <KeyFeature key={index} title={keyFeature} />
                ))}
            </ul>
        </div>
    );
};

export default DeploymentOptionDetails;
