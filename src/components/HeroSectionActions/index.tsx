import RegisterCta from './RegisterCta';
import ContactUsCta from './ContactUsCta';

interface HeroSectionActionsProps {
    pageId: string;
    registerButtonTitle?: string;
    contactUsButtonTitle?: string;
}

function HeroSectionActions({
    pageId,
    registerButtonTitle,
    contactUsButtonTitle,
}: HeroSectionActionsProps) {
    return (
        <>
            <RegisterCta pageId={pageId} title={registerButtonTitle} />
            <ContactUsCta pageId={pageId} title={contactUsButtonTitle} />
        </>
    );
}

export default HeroSectionActions;
