import React, { ReactNode } from 'react';
import TabContext from '@mui/lab/TabContext';
import Container from '../Container';
import { DeploymentOption } from '../../../shared';
import LinkFilled from '../LinksAndButtons/LinkFilled';
import DeploymentDiagramContainer from './DeploymentDiagramContainer';
import { container, rightColumn } from './styles.module.less';
import Tabs from './Tabs';
import DeploymentTabPanel from './DeploymentTabPanel';

interface DeploymentOptionsProps {
    title: ReactNode;
    buttonTitle: string;
    optionsDescription: {
        public: string;
        private: string;
        byoc: string;
    };
    keyFeatures?: {
        public: string[];
        private: string[];
        byoc: string[];
    };
}

const DeploymentOptions = ({
    title,
    buttonTitle,
    optionsDescription,
    keyFeatures,
}: DeploymentOptionsProps) => {
    const [selectedTab, setSelectedTab] =
        React.useState<DeploymentOption>('public');

    const handleTabChange = (
        event: React.SyntheticEvent,
        newValue: DeploymentOption
    ) => {
        setSelectedTab(newValue);
    };

    return (
        <Container className={container} isReverseColumnOnMobile>
            <DeploymentDiagramContainer deploymentOption={selectedTab} />
            <div className={rightColumn}>
                <h2>{title}</h2>
                <TabContext value={selectedTab}>
                    <Tabs handleTabChange={handleTabChange} />
                    <DeploymentTabPanel
                        value="public"
                        title="PUBLIC DEPLOYMENT"
                        description={optionsDescription.public}
                        keyFeatures={keyFeatures?.public}
                    />
                    <DeploymentTabPanel
                        value="private"
                        title="PRIVATE DEPLOYMENT"
                        description={optionsDescription.private}
                        keyFeatures={keyFeatures?.private}
                    />
                    <DeploymentTabPanel
                        value="byoc"
                        title="BYOC (Bring Your Own Cloud)"
                        description={optionsDescription.byoc}
                        keyFeatures={keyFeatures?.byoc}
                    />
                </TabContext>
                <LinkFilled href="/deployment-options/">
                    {buttonTitle}
                </LinkFilled>
            </div>
        </Container>
    );
};

export default DeploymentOptions;
