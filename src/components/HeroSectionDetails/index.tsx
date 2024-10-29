import React, { ReactNode } from 'react';
import { OutboundLinkFilled } from '../OutboundLink';
import { LinkOutlined } from '../../globalStyles';
import { dashboardRegisterUrl } from '../../../shared';
import SubscriptionBenefits from '../SubscriptionBenefits';
import { container, buttonsWrapper } from './styles.module.less';

interface HeroSectionDetailsProps {
    title: ReactNode;
    description?: ReactNode;
    additionalElements?: ReactNode;
    hasCtaButtons?: boolean;
    hasSubscriptionBenefits?: boolean;
}

const HeroSectionDetails = ({
    title,
    description,
    additionalElements,
    hasCtaButtons = false,
    hasSubscriptionBenefits = false,
}: HeroSectionDetailsProps) => {
    return (
        <div className={container}>
            <h1>{title}</h1>
            {description ? <p>{description}</p> : null}
            {hasCtaButtons ? (
                <div className={buttonsWrapper}>
                    <OutboundLinkFilled
                        target="_blank"
                        href={dashboardRegisterUrl}
                        className="homepage-section-one-button"
                    >
                        Build a Pipeline
                    </OutboundLinkFilled>
                    <LinkOutlined
                        href="/contact-us"
                        className="homepage-section-one-button"
                        target="_blank"
                    >
                        Contact Us
                    </LinkOutlined>
                </div>
            ) : null}
            {hasSubscriptionBenefits ? <SubscriptionBenefits /> : null}
            {additionalElements ? additionalElements : null}
        </div>
    );
};

export default HeroSectionDetails;
