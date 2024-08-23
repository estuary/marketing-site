import React from 'react';
import { dashboardRegisterUrl } from '../../shared';

const SignUp = () => {
    return (
        <section className="signup">
            <div className="signup-bg">
                <div className="signup-heading">
                    <span>See how</span> Estuary can work for you and your data
                </div>
                <div className="cta-wrap">
                    <a href={dashboardRegisterUrl}>Sign up</a>
                    <a href="https://estuary.dev/contact-us">Contact us</a>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
