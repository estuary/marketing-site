import CardsSection from '../../CardsSection';
import Card from '../../Card';
import InfrastructureIcon from '../../../svgs/infrastructure.svg';
import GiveAccessIcon from '../../../svgs/give-access.svg';
import SecuredCommunicationsIcon from '../../../svgs/secured-communications.svg';

const SecurityFeatures = () => (
    <CardsSection title="Core security features">
        <Card Icon={InfrastructureIcon} title="Immutable Infrastructure">
            Systems are rebuilt with every new update to ensure they remain
            secure and up-to-date.
        </Card>
        <Card Icon={SecuredCommunicationsIcon} title="Zero-Trust Network Model">
            All communications are secured using TLS and mutual TLS (mTLS) for
            internal communications.
        </Card>
        <Card
            Icon={GiveAccessIcon}
            title="RBAC & Centralized Access Management"
        >
            Role-based access control ensures secure resource sharing, with
            centralized verification of authorizations.
        </Card>
    </CardsSection>
);

export default SecurityFeatures;
