import { dashboardRegisterUrl } from '../../../shared';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';

function RegisterCta() {
    return (
        <OutboundLinkFilled href={dashboardRegisterUrl} target="_blank">
            Build a Pipeline
        </OutboundLinkFilled>
    );
}

export default RegisterCta;
