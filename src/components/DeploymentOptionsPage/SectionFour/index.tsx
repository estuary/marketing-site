import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import DeploymentOptionDetails from '../../DeploymentOptionDetails';
import DiagramContainer from '../../Homepage/DeploymentModes/DiagramContainer';
import { features } from '../shared';
import { container } from '../styles.module.less';

const SectionFour = () => {
    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <DiagramContainer selectedTab="3" />
                <DeploymentOptionDetails
                    title="BRING YOUR OWN CLOUD"
                    description="BYOC allows customers to deploy Estuary Flow in their own cloud environment. Ideal for organizations that have invested heavily in their cloud infrastructure and want to maintain ownership over their entire stack while benefiting from Estuary Flow's capabilities."
                    keyFeatures={features.byoc}
                />
            </div>
        </section>
    );
};

export default SectionFour;
