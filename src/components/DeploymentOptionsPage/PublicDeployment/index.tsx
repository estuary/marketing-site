import clsx from 'clsx';
import DeploymentOptionDetails from '../../DeploymentOptions/DeploymentOptionDetails';
import { features } from '../shared';
import { container, adaptedContainer } from '../styles.module.less';
import DeploymentOptionDiagram from '../../DeploymentOptions/DeploymentOptionDiagram';
import Container from '../../Container';

const PublicDeployment = () => {
    return (
        <section>
            <Container className={clsx(container, adaptedContainer)}>
                <DeploymentOptionDiagram deploymentOption="public" />
                <DeploymentOptionDetails
                    title="Public Deployment"
                    description="Public Deployment is the standard SaaS offering from Estuary Flow. Ideal for small to medium-sized businesses or teams that want a hassle-free, quick-to-implement solution without the need for extensive customization or heightened security measures."
                    keyFeatures={features.public}
                    TitleHeadingLevel="h2"
                    KeyFeaturesTitleHeadingLevel="h3"
                />
            </Container>
        </section>
    );
};

export default PublicDeployment;
