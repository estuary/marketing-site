import DeploymentOptionDiagram from '../../../DeploymentOptions/DeploymentOptionDiagram';
import { DeploymentOption } from '../../../../../shared';

interface DeploymentDiagramContainerProps {
    deploymentOption: DeploymentOption;
}

const DeploymentDiagramContainer = ({
    deploymentOption,
}: DeploymentDiagramContainerProps) => (
    <DeploymentOptionDiagram deploymentOption={deploymentOption} />
);

export default DeploymentDiagramContainer;
