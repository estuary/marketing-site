import React from 'react';
import TabContext from '@mui/lab/TabContext';
import clsx from 'clsx';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { grid, container, leftColumn, rightColumn } from './styles.module.less';
import DiagramContainer from './DiagramContainer';
import TabPanels from './TabPanels';
import Tabs from './Tabs';

const DeploymentModes = () => {
    const [selectedTab, setSelectedTab] = React.useState('1');

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedTab(newValue);
    };

    return (
        <section className={defaultWrapperGrey}>
            <div className={clsx(grid, container)}>
                <div className={clsx(grid, leftColumn)}>
                    <DiagramContainer selectedTab={selectedTab} />
                </div>
                <div className={rightColumn}>
                    <h2>
                        <span>DEPLOYMENT MODES</span> FOR EVERY ENVIRONMENT
                    </h2>
                    <TabContext value={selectedTab}>
                        <Tabs handleTabChange={handleTabChange} />
                        <TabPanels />
                    </TabContext>
                </div>
            </div>
        </section>
    );
};

export default DeploymentModes;
