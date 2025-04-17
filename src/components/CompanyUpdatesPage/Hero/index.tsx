import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import HeroSectionActions from '../../HeroSectionActions';
import FlowDiagram from './FlowDiagram';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container>
                <HeroSectionDetails
                    title={<span>Stay current with Estuary Flow</span>}
                    description="Stay informed and make the most of Flow's powerful capabilities."
                    ctaButtons={
                        <HeroSectionActions pageId="company-updates-page" />
                    }
                />
                <FlowDiagram />
            </Container>
        </section>
    );
};

export default Hero;
