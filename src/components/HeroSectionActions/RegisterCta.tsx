import { dashboardRegisterUrl } from '../../../shared';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';

interface RegisterCtaProps {
    pageId: string;
}

function RegisterCta({ pageId }: RegisterCtaProps) {
    return (
        <OutboundLinkFilled
            id={`start-building-for-free-button/hero-section/${pageId}`}
            href={dashboardRegisterUrl}
            target="_blank"
        >
            Start Building For Free
        </OutboundLinkFilled>
    );
}

export default RegisterCta;
