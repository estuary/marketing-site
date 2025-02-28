import RegisterCta from './RegisterCta';
import ContactUsCta from './ContactUsCta';

interface HeroSectionActionsProps {
    pageId: string;
}

function HeroSectionActions({ pageId }: HeroSectionActionsProps) {
    return (
        <>
            <RegisterCta pageId={pageId} />
            <ContactUsCta pageId={pageId} />
        </>
    );
}

export default HeroSectionActions;
