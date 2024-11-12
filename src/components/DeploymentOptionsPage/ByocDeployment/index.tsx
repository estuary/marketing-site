import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import DeploymentOptionDetails from '../../DeploymentOptions/DeploymentOptionDetails';
import { features } from '../shared';
import { container } from '../styles.module.less';
import DeploymentOptionDiagram from '../../DeploymentOptions/DeploymentOptionDiagram';
import Container from '../../Container';

const ByocDeployment = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Container className={container}>
                <DeploymentOptionDiagram deploymentOption="byoc" />
                <DeploymentOptionDetails
                    title="BRING YOUR OWN CLOUD"
                    description="BYOC allows customers to deploy Estuary Flow in their own cloud environment. Ideal for organizations that have invested heavily in their cloud infrastructure and want to maintain ownership over their entire stack while benefiting from Estuary Flow's capabilities."
                    keyFeatures={features.byoc}
                    TitleHeadingLevel="h2"
                    KeyFeaturesTitleHeadingLevel="h3"
                />
            </Container>
        </section>
    );
};

export default ByocDeployment;
