import React from 'react';
import clsx from 'clsx';
import {
    OutboundLinkFilled,
    OutboundLinkOutlined,
} from '../../../OutboundLink';
import { LinkOutlined } from '../../../../globalStyles';
import CheckSvgIcon from '../../../../svgs/checkmark.svg';
import {
    container,
    header,
    divider,
    benefitsList,
    centralizedText,
    benefitWrapper,
    benefitIconWrapper,
    price,
    pricingWrapper,
    unit,
    planTitleStyle,
    planDescriptionStyle,
    highlightedBorder,
    pricePerConnectorWrapper,
    freeTrialTag,
    benefitText,
    plusSign,
    benefitsTitle,
    planTitleWrapper,
} from './styles.module.less';

interface PlanCardProps {
    icon: React.ReactNode;
    title: string;
    pricePerGb?: number;
    pricePerConnector?: number;
    description: string;
    button: {
        title: string;
        href: string;
    };
    isHighlighted?: boolean;
    benefits: string[];
    isFreePlan?: boolean;
}

const PlanCard = ({
    icon,
    title,
    pricePerGb,
    pricePerConnector,
    description,
    button,
    isHighlighted,
    benefits,
    isFreePlan,
}: PlanCardProps) => {
    return (
        <div
            className={clsx(
                container,
                isHighlighted ? highlightedBorder : null
            )}
        >
            <div className={header}>
                <div className={planTitleWrapper}>
                    {icon}
                    <h3 className={planTitleStyle}>{title}</h3>
                </div>
                {isHighlighted ? (
                    <span className={freeTrialTag}>30-DAY FREE TRIAL</span>
                ) : null}
            </div>
            <div className={pricingWrapper}>
                <span
                    className={clsx(
                        price,
                        !isHighlighted ? centralizedText : null
                    )}
                >
                    {pricePerGb !== undefined ? (
                        <>
                            <span>
                                ${pricePerGb.toFixed(isHighlighted ? 2 : 0)}
                            </span>
                            <span className={unit}> / GB</span>
                        </>
                    ) : (
                        "LET'S TALK"
                    )}
                </span>
                {isHighlighted ? (
                    <div className={pricePerConnectorWrapper}>
                        <span className={plusSign}>+</span>
                        {'<='}
                        <span className={price}>${pricePerConnector}</span>
                        {'/CONNECTOR'}
                    </div>
                ) : null}
            </div>
            <p className={planDescriptionStyle}>{description}</p>
            <div className={divider} />
            {isHighlighted ? (
                <OutboundLinkFilled href={button.href} target="_blank">
                    {button.title}
                </OutboundLinkFilled>
            ) : isFreePlan ? (
                <OutboundLinkOutlined href={button.href} target="_blank">
                    {button.title}
                </OutboundLinkOutlined>
            ) : (
                <LinkOutlined href={button.href} target="_blank">
                    {button.title}
                </LinkOutlined>
            )}
            {!isFreePlan ? (
                <span className={benefitsTitle}>
                    Everything in {isHighlighted ? 'Free' : 'Cloud'}, plus:
                </span>
            ) : null}
            <ul className={benefitsList}>
                {benefits.map((benefit, index) => (
                    <li key={index} className={benefitWrapper}>
                        <div className={benefitIconWrapper}>
                            <CheckSvgIcon
                                color="#00A99D"
                                width={10}
                                height={10}
                            />
                        </div>
                        <p className={benefitText}>{benefit}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlanCard;
