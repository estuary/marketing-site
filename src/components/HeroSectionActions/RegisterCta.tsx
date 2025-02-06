import { dashboardRegisterUrl } from '../../../shared';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';

function RegisterCta() {
    return (
        <OutboundLinkFilled href={dashboardRegisterUrl} target="_blank">
            Start Building For Free
        </OutboundLinkFilled>
    );
}

export default RegisterCta;
