import { ReactNode } from 'react';
import Container from '../../../Container';
import HeroSectionDetails from '../../../HeroSectionDetails';
import { defaultWrapperDarkBlue } from '../../../../globalStyles/wrappers.module.less';
import HeroSectionActions from '../../../HeroSectionActions';

interface HeroProps {
    title: string;
    heroImage: ReactNode;
}

const Hero = ({ title, heroImage }: HeroProps) => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isDarkTheme>
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
