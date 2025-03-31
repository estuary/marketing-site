import { ReactNode, useState, SyntheticEvent } from 'react';
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
    pageId: string;
}

const DeploymentOptions = ({
    title,
    buttonTitle,
    optionsDescription,
    keyFeatures,
    pageId,
}: DeploymentOptionsProps) => {
    const [selectedTab, setSelectedTab] = useState<DeploymentOption>('public');

    const handleTabChange = (
        event: SyntheticEvent,
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
                        title="Bring Your Own Cloud"
                        description={optionsDescription.byoc}
                        keyFeatures={keyFeatures?.byoc}
                    />
                </TabContext>
                <LinkFilled
                    id={`button/deployment-options-section/${pageId}`}
                    href="/deployment-options/"
                >
                    {buttonTitle}
                </LinkFilled>
            </div>
        </Container>
    );
};

export default DeploymentOptions;
