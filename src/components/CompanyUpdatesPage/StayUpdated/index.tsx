import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import LinkedinIcon from '../../../svgs/linkedin-outline.svg';
import Container from '../../Container';
import NewsletterSignupForm from '../../NewsletterSignupForm';
import { estuaryLinkedinUrl } from '../../../../shared';
import OutboundLinkOutlined from '../../LinksAndButtons/OutboundLinkOutlined';
import {
    container,
    contentWrapper,
    linkedinCta,
    newsletterCta,
} from './styles.module.less';

const StayUpdated = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container isVertical isDarkTheme className={container}>
                <h2>Stay updated</h2>
                <div className={contentWrapper}>
                    <div className={linkedinCta}>
                        <p>Follow us on LinkedIn for frequent updates.</p>
                        <OutboundLinkOutlined
                            id="linkedin-follow-button/stay-updated-section/company-updates-page"
                            target="_blank"
                            href={estuaryLinkedinUrl}
                            aria-label="Estuary Linkedin Link"
                        >
                            <LinkedinIcon />
                            Follow
                        </OutboundLinkOutlined>
                    </div>
                    <div className={newsletterCta}>
                        <p>
                            Join our Newsletter for news about Estuary Flow
                            straight into your inbox.
                        </p>
                        <NewsletterSignupForm />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default StayUpdated;
