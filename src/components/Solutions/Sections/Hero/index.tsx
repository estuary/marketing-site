import { ReactNode } from 'react';
import Container from '../../../Container';
import HeroSectionDetails from '../../../HeroSectionDetails';
import { defaultWrapperDarkBlue } from '../../../../globalStyles/wrappers.module.less';
import HeroSectionActions from '../../../HeroSectionActions';
import { container } from './styles.module.less';

interface HeroProps {
    title: string;
    heroImage: ReactNode;
}

const Hero = ({ title, heroImage }: HeroProps) => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isDarkTheme className={container}>
                <HeroSectionDetails
                    title={title}
                    ctaButtons={<HeroSectionActions />}
                />
                {heroImage}
            </Container>
        </section>
    );
};

export default Hero;
