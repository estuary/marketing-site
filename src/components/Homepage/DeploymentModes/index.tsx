import React from 'react';
import TabContext from '@mui/lab/TabContext';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { DeploymentOption } from '../../../../shared';
import { LinkFilled } from '../../../globalStyles';
import Container from '../../Container';
import { container, rightColumn } from './styles.module.less';
import DeploymentDiagramContainer from './DeploymentDiagramContainer';
import TabPanels from './TabPanels';
import Tabs from './Tabs';

const DeploymentModes = () => {
    const [selectedTab, setSelectedTab] =
        React.useState<DeploymentOption>('public');

    const handleTabChange = (
        event: React.SyntheticEvent,
        newValue: DeploymentOption
    ) => {
        setSelectedTab(newValue);
    };

    return (
        <section className={defaultWrapperGrey}>
            <Container className={container} isReverseColumnOnMobile>
                <DeploymentDiagramContainer deploymentOption={selectedTab} />
                <div className={rightColumn}>
                    <h2>
                        <span>DEPLOYMENT MODES</span> FOR EVERY ENVIRONMENT
                    </h2>
                    <TabContext value={selectedTab}>
                        <Tabs handleTabChange={handleTabChange} />
                        <TabPanels />
                    </TabContext>
                    <LinkFilled href="/deployment-options/">
                        See Details
                    </LinkFilled>
                </div>
            </Container>
        </section>
    );
};

export default DeploymentModes;
