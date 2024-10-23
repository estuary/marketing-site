import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import DeploymentOptionDetails from '../../DeploymentOptionDetails';
import DiagramContainer from '../../Homepage/DeploymentModes/DiagramContainer';
import { features } from '../shared';
import { container } from '../styles.module.less';

const SectionTwo = () => {
    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <DiagramContainer selectedTab="1" />
                <DeploymentOptionDetails
                    title="PUBLIC DEPLOYMENT"
                    description="Public Deployment is the standard SaaS offering from Estuary Flow. Ideal for small to medium-sized businesses or teams that want a hassle-free, quick-to-implement solution without the need for extensive customization or heightened security measures."
                    keyFeatures={features.public}
                />
            </div>
        </section>
    );
};

export default SectionTwo;
