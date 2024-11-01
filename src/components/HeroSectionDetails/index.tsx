import React, { ReactNode } from 'react';
import { OutboundLinkFilled } from '../OutboundLink';
import { dashboardRegisterUrl } from '../../../shared';
import SubscriptionBenefits from '../SubscriptionBenefits';
import { LinkOutlined } from '../../globalStyles';
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
                        href={dashboardRegisterUrl}
                        target="_blank"
                    >
                        Build a Pipeline
                    </OutboundLinkFilled>
                    <LinkOutlined href="/contact-us" theme="dark">
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
