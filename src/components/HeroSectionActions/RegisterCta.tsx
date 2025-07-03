import { dashboardRegisterUrl, getSlugifiedText } from '../../../shared';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';

interface RegisterCtaProps {
    pageId: string;
    title?: string;
    href?: string;
}

function RegisterCta({
    pageId,
    title = 'Start Building For Free',
    href,
}: RegisterCtaProps) {
    return (
        <OutboundLinkFilled
            id={`${getSlugifiedText(title)}-button/hero-section/${pageId}`}
            href={href ?? dashboardRegisterUrl}
            target="_blank"
        >
            {title}
        </OutboundLinkFilled>
    );
}

export default RegisterCta;
