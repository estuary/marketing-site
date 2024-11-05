import React, { ReactNode } from 'react';
import SubscriptionBenefits from '../SubscriptionBenefits';
import { container, buttonsWrapper } from './styles.module.less';

interface HeroSectionDetailsProps {
    title: ReactNode;
    description?: ReactNode;
    ctaButtons?: ReactNode;
    additionalElements?: ReactNode;
    hasSubscriptionBenefits?: boolean;
}

const HeroSectionDetails = ({
    title,
    description,
    ctaButtons,
    additionalElements,
    hasSubscriptionBenefits = false,
}: HeroSectionDetailsProps) => {
    return (
        <div className={container}>
            <h1>{title}</h1>
            {description ? <p>{description}</p> : null}
            {ctaButtons ? (
                <div className={buttonsWrapper}>{ctaButtons}</div>
            ) : null}
            {hasSubscriptionBenefits ? <SubscriptionBenefits /> : null}
            {additionalElements ? additionalElements : null}
        </div>
    );
};

export default HeroSectionDetails;
