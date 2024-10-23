import React from 'react';
import DeploymentTabPanel from '../DeploymentTabPanel';

const features = {
    public: [
        'Managed by Estuary',
        'Easy setup and minimal configuration',
        'Multiple data processing regions',
    ],
    private: [
        'Private network data control',
        'Maximum security',
        'Compliance-ready',
    ],
    byoc: [
        'Full infrastructure control and customization',
        'Potential cost savings for cloud resources',
        'Total flexibility',
    ],
};

const TabPanels = () => (
    <>
        <DeploymentTabPanel
            value="1"
            title="PUBLIC DEPLOYMENT"
            description="Estuary Flow's standard SaaS option, fully managed for quick, hassle-free setup."
            keyFeatures={features.public}
        />
        <DeploymentTabPanel
            value="2"
            title="PRIVATE DEPLOYMENT"
            description="Offers enhanced security by hosting Estuary Flow within a private network, combining SaaS ease with more control."
            keyFeatures={features.private}
        />
        <DeploymentTabPanel
            value="3"
            title="BYOC (Bring Your Own Cloud)"
            description="Deploy Estuary Flow on your cloud infrastructure for complete control."
            keyFeatures={features.byoc}
        />
    </>
);

export default TabPanels;
