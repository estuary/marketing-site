import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import LinkOutlined from '../../LinksAndButtons/LinkOutlined';
import { header } from './styles.module.less';

const ReferralIncentive = () => (
    <section>
        <Container isDarkTheme>
            <div className={header}>
                <h2>Referral incentive</h2>
                <p>
                    Estuary offers an incentive after a deal is made through a
                    referral.
                </p>
                <LinkOutlined
                    id="contact-us-button/referral-incentive-section/partners-page"
                    href="/partners/#contact-us-form-section"
                >
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
