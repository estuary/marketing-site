import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import HeroSectionActions from '../../HeroSectionActions';
import FlowDiagram from '../../FlowDiagram';
import { diagramCardPositions } from './styles.module.less';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container>
                <HeroSectionDetails
                    title="STAY CURRENT WITH ESTUARY FLOW"
                    description="Stay informed and make the most of Flow's powerful capabilities."
                    ctaButtons={<HeroSectionActions />}
                />
                <FlowDiagram
                    DiagramCardsClassName={diagramCardPositions}
                    hasDesktopImageOnly
                />
            </Container>
        </section>
    );
};

export default Hero;
