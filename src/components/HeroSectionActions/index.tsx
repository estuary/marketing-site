import RegisterCta from './RegisterCta';
import ContactUsCta from './ContactUsCta';
// import WatchDemoCta from './WatchDemo';

interface HeroSectionActionsProps {
    showDemoCta?: boolean;
}

function HeroSectionActions({ showDemoCta }: HeroSectionActionsProps) {
    return (
        <>
            <RegisterCta />
            <ContactUsCta />
            {/* {showDemoCta ? <WatchDemoCta /> : null} */}
        </>
    );
}

export default HeroSectionActions;
