import RegisterCta from './RegisterCta';
import ContactUsCta from './ContactUsCta';

interface HeroSectionActionsProps {
    pageId: string;
    registerButtonTitle?: string;
    registerUrl?: string;
    contactUsButtonTitle?: string;
    contactUsButtonUrl?: string;
}

function HeroSectionActions({
    pageId,
    registerButtonTitle,
    registerUrl,
    contactUsButtonTitle,
    contactUsButtonUrl,
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
            />
        </>
    );
}

export default HeroSectionActions;
