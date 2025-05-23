import clsx from 'clsx';
import { ReactNode } from 'react';
import StarIcon from '@mui/icons-material/Star';
import CheckSvgIcon from '../../../../svgs/checkmark.svg';
import OutboundLinkFilled from '../../../LinksAndButtons/OutboundLinkFilled';
import OutboundLinkOutlined from '../../../LinksAndButtons/OutboundLinkOutlined';
import LinkOutlined from '../../../LinksAndButtons/LinkOutlined';
import {
    container,
    header,
    divider,
    benefitsList,
    centralizedText,
    price,
    pricingWrapper,
    unit,
    planDescriptionStyle,
    highlightedBorder,
    pricePerConnectorWrapper,
    plusSign,
    benefitsTitle,
    mostPopularTag,
    wrapper,
} from './styles.module.less';

interface PlanCardProps {
    icon: ReactNode;
    title: string;
    pricePerGb?: number;
    pricePerConnector?: number;
    description: string;
    button: {
        id: string;
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
    const LinkComponent = isHighlighted
        ? OutboundLinkFilled
        : isFreePlan
          ? OutboundLinkOutlined
          : LinkOutlined;

    return (
        <div
            className={clsx(wrapper, isHighlighted ? highlightedBorder : null)}
        >
            <div className={container}>
                <div className={header}>
                    <div>
                        {icon}
                        <h3>{title}</h3>
                    </div>
                    {isHighlighted ? <span>30-DAY FREE TRIAL</span> : null}
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
                                {isHighlighted ? (
                                    <span className={plusSign}>+</span>
                                ) : null}
                            </>
                        ) : (
                            "LET'S TALK"
                        )}
                    </span>
                    {isHighlighted ? (
                        <div className={pricePerConnectorWrapper}>
                            {'<='}
                            <span className={price}>${pricePerConnector}</span>
                            {'/connector instance'}
                        </div>
                    ) : null}
                </div>
                <p className={planDescriptionStyle}>{description}</p>
                <hr className={divider} />
                <LinkComponent
                    id={button.id}
                    href={button.href}
                    target="_blank"
                    variant="secondary"
                >
                    {button.title}
                </LinkComponent>
                {!isFreePlan ? (
                    <span className={benefitsTitle}>
                        Everything in {isHighlighted ? 'Free' : 'Cloud'}, plus:
                    </span>
                ) : null}
                <ul className={benefitsList}>
                    {benefits.map((benefit, index) => (
                        <li key={index}>
                            <div>
                                <CheckSvgIcon
                                    color="var(--green)"
                                    width={10}
                                    height={10}
                                />
                            </div>
                            <p>{benefit}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {isHighlighted ? (
                <div className={mostPopularTag}>
                    <StarIcon htmlColor="var(--white)" />
                    <strong>Most Popular</strong>
                </div>
            ) : null}
        </div>
    );
};

export default PlanCard;
