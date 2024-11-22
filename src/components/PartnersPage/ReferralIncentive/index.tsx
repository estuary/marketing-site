import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import LinkOutlined from '../../LinksAndButtons/LinkOutlined';
import { header } from './styles.module.less';

const ReferralIncentive = () => (
    <section className={defaultWrapperDarkBlue}>
        <Container isDarkTheme>
            <div className={header}>
                <h2>REFERRAL INCENTIVE</h2>
                <p>
                    Estuary offers an incentive after a deal is made through a
                    referral.
                </p>
                <LinkOutlined href="/partners/#contact-us-form-section">
                    Contact Us
                </LinkOutlined>
            </div>
            <StaticImage
                src="../../../images/partners-page/referral-program.png"
                alt="Estuary referral incentive for partner program referrals."
                quality={100}
                placeholder="blurred"
            />
        </Container>
    </section>
);

export default ReferralIncentive;
