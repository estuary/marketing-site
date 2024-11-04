import React from 'react';
import { dashboardRegisterUrl } from '../../../shared';
import { LinkFilled } from '../../globalStyles';
import { OutboundLinkFilled } from '../OutboundLink';
import { signUp, signupBg, signupHeading, ctaWrap } from './styles.module.less';

const SignUp = () => {
    return (
        <section className={signUp}>
            <div className={signupBg}>
                <div className={signupHeading}>
                    <span>See how</span> Estuary can work for you and your data
                </div>
                <div className={ctaWrap}>
                    <OutboundLinkFilled
                        href={dashboardRegisterUrl}
                        target="_blank"
                    >
                        Sign up
                    </OutboundLinkFilled>
                    <LinkFilled href="/contact-us/">Contact us</LinkFilled>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
