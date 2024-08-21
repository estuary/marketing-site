import React from 'react';
import { LinkFilled } from '../globalStyles';
import { OutboundLinkFilled } from './OutboundLink';

const SignUp = () => {
    return (
        <section className="signup">
            <div className="signup-bg">
                <div className="signup-heading">
                    <span>See how</span> Estuary can work for you and your data
                </div>
                <div className="cta-wrap">
                    <OutboundLinkFilled
                        href="https://dashboard.estuary.dev/register"
                        target="_blank"
                    >
                        Sign up
                    </OutboundLinkFilled>
                    <LinkFilled
                        href="https://estuary.dev/contact-us"
                        target="_blank"
                    >
                        Contact us
                    </LinkFilled>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
