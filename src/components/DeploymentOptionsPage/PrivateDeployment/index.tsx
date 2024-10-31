import React from 'react';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import DeploymentOptionDetails from '../../DeploymentOptionDetails';
import { features } from '../shared';
import { container } from '../styles.module.less';
import DeploymentOptionDiagram from '../../DeploymentOptionDiagram';
import Container from '../../Container';

const PrivateDeployment = () => {
    return (
        <section className={defaultWrapperDark}>
            <Container isReverseColumnOnMobile className={container}>
                <DeploymentOptionDetails
                    title="PRIVATE DEPLOYMENT"
                    description="Private Deployment allows customers to run Estuary Flow's data infrastructure within their private environment while maintaining the simplicity of a SaaS platform. Suitable for enterprises and organizations with strict data security and compliance needs, such as those in highly regulated industries or handling sensitive data."
                    keyFeatures={features.private}
                    TitleHeadingLevel="h2"
                    KeyFeaturesTitleHeadingLevel="h3"
                />
                <DeploymentOptionDiagram deploymentOption="private" />
            </Container>
        </section>
    );
};

export default PrivateDeployment;
