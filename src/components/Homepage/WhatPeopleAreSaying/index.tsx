import TestimonialsCarousel from '../../TestimonialsCarousel';
import Container from '../../Container';
import G2LogoIcon from '../../../svgs/g2-logo.svg';
import FiveStarsIcon from '../../../svgs/five-stars.svg';
import {
    wrapper,
    container,
    header,
    headerRightColumn,
    g2Wrapper,
    starsWrapper,
} from './styles.module.less';

const WhatPeopleAreSaying = () => {
    return (
        <section className={wrapper}>
            <Container isVertical isDarkTheme className={container}>
                <div className={header}>
                    <h2>
                        How <span>Estuary</span> makes a difference
                    </h2>
                    <div className={headerRightColumn}>
                        <div className={g2Wrapper}>
                            <G2LogoIcon width={64} height={64} />
                            <div className={starsWrapper}>
                                <FiveStarsIcon width={116} height={20} />
                                <span>4.8/5</span>
                            </div>
                        </div>
                        <p>
                            Hear how Estuary is making a difference for
                            businesses like yours.
                        </p>
                    </div>
                </div>
                <TestimonialsCarousel />
            </Container>
        </section>
    );
};

export default WhatPeopleAreSaying;
