import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import DeploymentOptionDetails from '../../DeploymentOptions/DeploymentOptionDetails';
import { features } from '../shared';
import { container } from '../styles.module.less';
import DeploymentOptionDiagram from '../../DeploymentOptions/DeploymentOptionDiagram';
import Container from '../../Container';

const PublicDeployment = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Container className={container}>
                <DeploymentOptionDiagram deploymentOption="public" />
                <DeploymentOptionDetails
                    title="PUBLIC DEPLOYMENT"
                    description="Public Deployment is the standard SaaS offering from Estuary Flow. Ideal for small to medium-sized businesses or teams that want a hassle-free, quick-to-implement solution without the need for extensive customization or heightened security measures."
                    keyFeatures={features.public}
                    TitleHeadingLevel="h2"
                    KeyFeaturesTitleHeadingLevel="h3"
                />
            </Container>
        </section>
    );
};

export default PublicDeployment;
