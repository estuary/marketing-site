import RegisterCta from './RegisterCta';
import ContactUsCta from './ContactUsCta';
import { ContactUsProps } from './types';

interface HeroSectionActionsProps {
    pageId: string;
    registerButtonTitle?: string;
    registerUrl?: string;
    contactUsButtonTitle?: string;
    contactUsButtonUrl?: string;
    linkOutlinedVariant?: ContactUsProps['linkOutlinedVariant'];
}

function HeroSectionActions({
    pageId,
    registerButtonTitle,
    registerUrl,
    contactUsButtonTitle,
    contactUsButtonUrl,
    linkOutlinedVariant = 'primary',
}: HeroSectionActionsProps) {
    return (
        <>
            <RegisterCta
                pageId={pageId}
                title={registerButtonTitle}
                href={registerUrl}
            />
            <ContactUsCta
                pageId={pageId}
                title={contactUsButtonTitle}
                href={contactUsButtonUrl}
                linkOutlinedVariant={linkOutlinedVariant}
            />
        </>
    );
}

export default HeroSectionActions;
