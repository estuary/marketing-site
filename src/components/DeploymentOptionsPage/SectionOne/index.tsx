import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import { OutboundLinkFilled } from '../../OutboundLink';
import { LinkOutlined } from '../../../globalStyles';
import { dashboardRegisterUrl } from '../../../../shared';
import { container, leftColumn } from './styles.module.less';

const SectionOne = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <div className={container}>
                <div className={leftColumn}>
                    <h1>ESTUARY FLOW DEPLOYMENT OPTIONS</h1>
                    <p>
                        Estuary Flow offers three main deployment options to
                        cater to various organizational needs and security
                        requirements. This section provides a high-level
                        overview and comparison of Public Deployment, Private
                        Deployment, and BYOC options.
                    </p>
                    <div>
                        <OutboundLinkFilled
                            target="_blank"
                            href={dashboardRegisterUrl}
                        >
                            Build a pipeline
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
                <div>
                    <StaticImage
                        src="../../../images/deployment-options-page/deployment-options-meta-image.png"
                        alt="Private BYOC; secure public Deployments; secure and enterprise-ready private deployments"
                        quality={100}
                        placeholder="blurred"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionOne;
