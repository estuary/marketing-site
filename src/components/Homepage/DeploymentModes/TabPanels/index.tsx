import React from 'react';
import DeploymentTabPanel from '../DeploymentTabPanel';

const features = {
    public: [
        'Fully managed by Estuary',
        'Quick setup and minimal configuration required',
        'Automatic updates and maintenance',
        'Multiple data processing region options',
        'Suitable for organizations with less stringent data security requirements',
    ],
    private: [
        'Enhanced security with data remaining within the private network',
        'Complete control over data pathways',
        'Immutable infrastructure pattern for up-to-date security',
        'Compliant with stringent data security requirements',
        'Ability to move data across regions',
    ],
    byoc: [
        'Full control over the cloud infrastructure',
        'Ability to leverage existing cloud resources and configurations',
        'Customizable to fit specific organizational needs',
        'Potential cost savings by using existing cloud credits or negotiated rates',
        'Greater flexibility in terms of data residency and compliance',
    ],
};

const TabPanels = () => (
    <>
        <DeploymentTabPanel
            value="1"
            title="PUBLIC DEPLOYMENT"
            description="Public Deployment is the standard SaaS offering from Estuary Flow. Ideal for small to medium-sized businesses or teams that want a hassle-free, quick-to-implement solution without the need for extensive customization or heightened security measures."
            keyFeatures={features.public}
        />
        <DeploymentTabPanel
            value="2"
            title="PRIVATE DEPLOYMENT"
            description="Private Deployment allows customers to run Estuary Flow's data infrastructure within their private environment while maintaining the simplicity of a SaaS platform. Suitable for enterprises and organizations with strict data security and compliance needs, such as those in highly regulated industries or handling sensitive data."
            keyFeatures={features.private}
        />
        <DeploymentTabPanel
            value="3"
            title="BRING YOUR OWN CLOUD"
            description="BYOC allows customers to deploy Estuary Flow in their own cloud environment. Ideal for organizations that have invested heavily in their cloud infrastructure and want to maintain ownership over their entire stack while benefiting from Estuary Flow's capabilities."
            keyFeatures={features.byoc}
        />
    </>
);

export default TabPanels;
