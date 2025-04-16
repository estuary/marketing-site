import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import HeroSectionActions from '../../HeroSectionActions';
import { boldText } from './styles.module.less';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container>
                <HeroSectionDetails
                    title={<span>Simply priced, pay as you go</span>}
                    description={
                        <>
                            <span>
                                Stop trying to guess your monthly bill based on
                                &apos;monthly active rows.&apos; We price
                                predictably, based on
                            </span>{' '}
                            <span className={boldText}>
                                data moved each month
                            </span>{' '}
                            <span>and</span>{' '}
                            <span className={boldText}>
                                active connector instances
                            </span>
                            .
                        </>
                    }
                    ctaButtons={<HeroSectionActions pageId="pricing-page" />}
                />
                <StaticImage
                    src="../../../images/pricing/illustration.png"
                    alt="It was just one insert though."
                    quality={100}
                    placeholder="blurred"
                    loading="eager"
                />
            </Container>
        </section>
    );
};

export default Hero;
