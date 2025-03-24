import { dashboardRegisterUrl } from '../../../shared';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';

interface RegisterCtaProps {
    pageId: string;
    title?: string;
}

function RegisterCta({
    pageId,
    title = 'Start Building For Free',
}: RegisterCtaProps) {
    return (
        <OutboundLinkFilled
            id={`start-building-for-free-button/hero-section/${pageId}`}
            href={dashboardRegisterUrl}
            target="_blank"
        >
            {title}
        </OutboundLinkFilled>
    );
}

export default RegisterCta;
