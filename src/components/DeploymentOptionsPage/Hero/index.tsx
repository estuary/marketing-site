import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import CustomerCloudIcon from '../../../svgs/customer-cloud-icon.svg';
import PublicDeploymentsIcon from '../../../svgs/public-deployments-icon.svg';
import PrivateDeploymentsIcon from '../../../svgs/private-deployments-icon.svg';
import Container from '../../Container';
import HeroSectionDetails from '../../HeroSectionDetails';
import {
    container,
    rightColumn,
    solidBorderBox,
    dashedBorderBox,
    reverse,
} from './styles.module.less';

const Hero = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container className={container}>
                <HeroSectionDetails
                    title="ESTUARY FLOW DEPLOYMENT OPTIONS"
                    description="Estuary Flow offers three main deployment options to
                        cater to various organizational needs and security
                        requirements. This section provides a high-level
                        overview and comparison of Public Deployment, Private
                        Deployment, and BYOC options."
                    hasCtaButtons
                />
                <div className={rightColumn}>
                    <StaticImage
                        src="../../../images/deployment-options-page/deployment-options-page-hero-background-image.png"
                        alt="Enterprise-ready Estuary Flow deployment options: BYOC, Public, and Private"
                        quality={100}
                        placeholder="blurred"
                        loading="eager"
                    />
                    <div className={solidBorderBox}>
                        <span>
                            <CustomerCloudIcon />
                            BYOC
                        </span>
                    </div>
                    <div className={clsx(solidBorderBox, reverse)}>
                        <span>
                            <PublicDeploymentsIcon />
                            Public Deployments
                        </span>
                    </div>
                    <div className={solidBorderBox}>
                        <span>
                            <PrivateDeploymentsIcon />
                            Private Deployments
                        </span>
                    </div>
                    <div className={dashedBorderBox}>
                        <span>Enterprise-ready</span>
                    </div>
                    <div className={clsx(dashedBorderBox, reverse)}>
                        <span>Secure</span>
                    </div>
                    <div className={dashedBorderBox}>
                        <span>Private</span>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
