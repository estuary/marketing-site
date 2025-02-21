import { dashboardRegisterUrl } from '../../../shared';
import LinkFilled from '../LinksAndButtons/LinkFilled';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';
import { signUp, signupBg, signupHeading, ctaWrap } from './styles.module.less';

interface SignUpProps {
    pageId: string;
}

const SignUp = ({ pageId }: SignUpProps) => {
    return (
        <section className={signUp}>
            <div className={signupBg}>
                <div className={signupHeading}>
                    <span>See how</span> Estuary can work for you and your data
                </div>
                <div className={ctaWrap}>
                    <OutboundLinkFilled
                        id={`sign-up-button/see-how-section/${pageId}`}
                        href={dashboardRegisterUrl}
                        target="_blank"
                    >
                        Sign up
                    </OutboundLinkFilled>
                    <LinkFilled
                        id={`contact-us-button/see-how-section/${pageId}`}
                        href="/contact-us/"
                    >
                        Contact us
                    </LinkFilled>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
