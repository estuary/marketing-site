import React from 'react';
import TabContext from '@mui/lab/TabContext';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { container, leftColumn, rightColumn } from './styles.module.less';
import DeploymentOptionDetails from './DeploymentOptionDetails';

const tabStyling = {
    'color': '#5072EB',
    'transition': 'var(--default-transition)',
    'opacity': '0.75',
    'textTransform': 'none',
    'maxWidth': '206px',
    'borderBottom': '1px solid #A4B6F4',

    '&:hover': {
        backgroundColor: '#ECEFFC',
    },

    '&:active': {
        backgroundColor: '#E3E8FB',
    },

    '&.Mui-selected': {
        fontWeight: '600',
        opacity: '1',
    },
};

const publicDeploymentFeatures = [
    'Fully managed by Estuary',
    'Quick setup and minimal configuration required',
    'Automatic updates and maintenance',
    'Multiple data processing region options',
    'Suitable for organizations with less stringent data security requirements',
];

const privateDeploymentFeatures = [
    'Enhanced security with data remaining within the private network',
    'Complete control over data pathways',
    'Immutable infrastructure pattern for up-to-date security',
    'Compliant with stringent data security requirements',
    'Ability to move data across regions',
];

const byocFeatures = [
    'Full control over the cloud infrastructure',
    'Ability to leverage existing cloud resources and configurations',
    'Customizable to fit specific organizational needs',
    'Potential cost savings by using existing cloud credits or negotiated rates',
    'Greater flexibility in terms of data residency and compliance',
];

const tabPanelStyling = { padding: '40px 0 0 0', minHeight: '458px' };

const DeploymentModes = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <div className={leftColumn}>
                    <div />
                    <div />
                </div>
                <div className={rightColumn}>
                    <h2>
                        <span>DEPLOYMENT MODES</span> FOR EVERY ENVIRONMENT
                    </h2>
                    <TabContext value={value}>
                        <TabList
                            onChange={handleChange}
                            aria-label="Deployment options tabs"
                        >
                            <Tab
                                label="Public Deployment"
                                value="1"
                                sx={tabStyling}
                                disableRipple
                            />
                            <Tab
                                label="Private Deployment"
                                value="2"
                                sx={tabStyling}
                                disableRipple
                            />
                            <Tab
                                label="BYOC (Bring Your Own Cloud)"
                                value="3"
                                sx={tabStyling}
                                disableRipple
                            />
                        </TabList>
                        <TabPanel value="1" sx={tabPanelStyling}>
                            <DeploymentOptionDetails
                                title="PUBLIC DEPLOYMENT"
                                description="Public Deployment is the standard SaaS offering from Estuary Flow. Ideal for small to medium-sized businesses or teams that want a hassle-free, quick-to-implement solution without the need for extensive customization or heightened security measures."
                                keyFeatures={publicDeploymentFeatures}
                            />
                        </TabPanel>
                        <TabPanel value="2" sx={tabPanelStyling}>
                            <DeploymentOptionDetails
                                title="PRIVATE DEPLOYMENT"
                                description="Private Deployment allows customers to run Estuary Flow's data infrastructure within their private environment while maintaining the simplicity of a SaaS platform. Suitable for enterprises and organizations with strict data security and compliance needs, such as those in highly regulated industries or handling sensitive data."
                                keyFeatures={privateDeploymentFeatures}
                            />
                        </TabPanel>
                        <TabPanel value="3" sx={tabPanelStyling}>
                            <DeploymentOptionDetails
                                title="BRING YOUR OWN CLOUD"
                                description="BYOC allows customers to deploy Estuary Flow in their own cloud environment. Ideal for organizations that have invested heavily in their cloud infrastructure and want to maintain ownership over their entire stack while benefiting from Estuary Flow's capabilities."
                                keyFeatures={byocFeatures}
                            />
                        </TabPanel>
                    </TabContext>
                </div>
            </div>
        </section>
    );
};

export default DeploymentModes;
