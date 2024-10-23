import React from 'react';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import DeploymentOptionDetails from '../../DeploymentOptionDetails';
import { features } from '../shared';
import { container } from '../styles.module.less';
import DeploymentOptionDiagram from '../../DeploymentOptionDiagram';

const SectionThree = () => {
    return (
        <section className={defaultWrapperDark}>
            <div className={container}>
                <DeploymentOptionDetails
                    title="PRIVATE DEPLOYMENT"
                    description="Private Deployment allows customers to run Estuary Flow's data infrastructure within their private environment while maintaining the simplicity of a SaaS platform. Suitable for enterprises and organizations with strict data security and compliance needs, such as those in highly regulated industries or handling sensitive data."
                    keyFeatures={features.private}
                />
                <DeploymentOptionDiagram deploymentOption="private" />
            </div>
        </section>
    );
};

export default SectionThree;
