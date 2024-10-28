import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';

import { OutboundLinkFilled } from '../../OutboundLink';
import { LinkOutlined } from '../../../globalStyles';
import { dashboardRegisterUrl } from '../../../../shared';
import Container from '../../Container';
import { contentContainer, buttonsContainer } from './styles.module.less';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container>
                <div className={contentContainer}>
                    <h1>SIMPLY PRICED, PAY AS YOU GO</h1>
                    <p>
                        Stop trying to guess your monthly bill based on
                        &apos;monthly active rows.&apos; We price predictably,
                        based on <span>data moved each month</span> and{' '}
                        <span>active connector instances</span>.
                    </p>
                    <div className={buttonsContainer}>
                        <OutboundLinkFilled
                            target="_blank"
                            href={dashboardRegisterUrl}
                        >
                            Build Free Pipeline
                        </OutboundLinkFilled>
                        <LinkOutlined
                            href="/contact-us"
                            target="_blank"
                            theme="dark"
                        >
                            Contact Us
                        </LinkOutlined>
                    </div>
                </div>
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
