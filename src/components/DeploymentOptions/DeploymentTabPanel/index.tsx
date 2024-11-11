import React from 'react';
import TabPanel from '@mui/lab/TabPanel';
import DeploymentOptionDetails from '../DeploymentOptionDetails';

const tabPanelStyling = { padding: '40px 0 0 0' };

interface DeploymentTabPanelProps {
    value: string;
    title: string;
    description: string;
    keyFeatures?: string[];
}

const DeploymentTabPanel = ({
    value,
    title,
    description,
    keyFeatures,
}: DeploymentTabPanelProps) => (
    <TabPanel value={value} sx={tabPanelStyling} keepMounted>
        <DeploymentOptionDetails
            title={title}
            description={description}
            keyFeatures={keyFeatures}
        />
    </TabPanel>
);

export default DeploymentTabPanel;
