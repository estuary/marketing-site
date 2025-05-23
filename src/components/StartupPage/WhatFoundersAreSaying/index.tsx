import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import {
    container,
    outerImageWrapper,
    innerImageWrapper,
    rightColumn,
} from './styles.module.less';

const WhatFoundersAreSaying = () => {
    return (
        <section>
            <Container className={container}>
                <div className={outerImageWrapper}>
                    <div className={innerImageWrapper}>
                        <StaticImage
                            src="../../../images/customer-logos/shp.svg"
                            alt="SHP logo"
                            color="var(--dark-blue)"
                            placeholder="blurred"
                            width={310}
                            height={121}
                        />
                    </div>
                </div>
                <div className={rightColumn}>
                    <h2>What founders are saying</h2>
                    <blockquote>
                        <p>
                            “We needed a platform that allowed us to give our
                            customers more ways to analyze and visualize their
                            social media performance vs their competitors, and
                            scale with our rapid growth. With Estuary we were
                            able to get enterprise-grade social analytics up in
                            a few days with second-level latency and
                            performance.”
                        </p>
                        <footer>
                            <strong>Shane Iseminger</strong>
                            <cite>CTO, SocialHP</cite>
                        </footer>
                    </blockquote>
                </div>
            </Container>
        </section>
    );
};

export default WhatFoundersAreSaying;
