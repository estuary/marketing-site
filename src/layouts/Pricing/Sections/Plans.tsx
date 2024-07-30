import React, { useState } from 'react';
import { Link } from 'gatsby';

import clsx from 'clsx';
import BlackCheckmark from '../../../svgs/checkmark-black.svg';
import WhiteCheckmark from '../../../svgs/light-checkmark.svg';
import PricingOpenSource from '../../../svgs/pricing-page-open-source.svg';
import PurpleRectangle from '../../../svgs/purple_rectangle.svg';
import PricingCloud from '../../../svgs/cloud-pricing.svg';
import PricingEnterprise from '../../../svgs/pricing-page-enterprise.svg';
import { costPerGB } from '../../../utils';

const ChecklistItem = ({ children, white = false }) => (
    <div className="pricing-page-checklist-item">
        {white ? (
            <>
                <WhiteCheckmark className="pricing-page-tile-checkmark-image" />
                <p className="pricing-page-tile-checklist-item-text text-white">
                    {children}
                </p>
            </>
        ) : (
            <>
                <BlackCheckmark className="pricing-page-tile-checkmark-image" />
                <p className="pricing-page-tile-checklist-item-text">
                    {children}
                </p>
            </>
        )}
    </div>
);

const Card = ({
    Icon,
    title,
    price,
    items,
    href,
    linkLabel,
    showTrial = false,
    smallPrice = false,
    selected = false,
    onClick,
}) => {
    return (
        <div className="pricing-page-tile-container">
            <div
                className={clsx(
                    'pricing-page-tile',
                    showTrial && 'pricing-page-tile-blue',
                    selected && 'pricing-page-tile-selected'
                )}
            >
                <div
                    className={clsx(
                        'card-header',
                        showTrial && 'card-header-blue'
                    )}
                    onClick={onClick}
                >
                    {showTrial ? (
                        <p className="pricing-page-corner-text">
                            30-Day <br /> Free Trial
                        </p>
                    ) : null}
                    <Icon className="pricing-page-tile-icon" />
                    <PurpleRectangle className="pricing-page-rectangle" />
                    <p className="pricing-page-tile-name">{title}</p>
                    <p
                        className={clsx(
                            'pricing-page-price',
                            smallPrice && 'pricing-page-price-small'
                        )}
                    >
                        {price}
                    </p>
                </div>
                <div
                    className={clsx(
                        'pricing-page-checklist-wrapper',
                        selected && 'pricing-page-checklist-wrapper-selected'
                    )}
                >
                    {items.map((item, index) => (
                        <ChecklistItem white={showTrial} key={index}>
                            {item}
                        </ChecklistItem>
                    ))}

                    <div className="tile-button-container">
                        <Link className="pricing-page-tile-button" to={href}>
                            {linkLabel}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PricingPlans = () => {
    const [selected, setSelected] = useState(2);

    return (
        <div className="plan-container">
            <div className="heading">
                <h2>Plans</h2>
            </div>
            <div className="pricing-page-tiles-wrapper">
                <Card
                    selected={selected === 1}
                    Icon={PricingOpenSource}
                    title="Free"
                    price="$0/GB"
                    href="https://dashboard.estuary.dev/register"
                    linkLabel="Get started"
                    onClick={() => setSelected(1)}
                    items={[
                        'Up to 10GB / mo for any 2 connectors',
                        'Millisecond Latency',
                        'UI & CLI for building & monitoring pipelines',
                        'Limited Data Retention in Estuary Cloud',
                        'Incremental Syncing for lower CDC cost',
                        'Streaming Infrastructure',
                    ]}
                />
                <Card
                    selected={selected === 2}
                    showTrial
                    Icon={PricingCloud}
                    title="Cloud"
                    price={costPerGB}
                    href="https://dashboard.estuary.dev/register"
                    linkLabel="Try it free"
                    onClick={() => setSelected(2)}
                    items={[
                        `${costPerGB} change data moved +$.14/hour/connector`,
                        'All features of Free plan, plus...',
                        'Data stored in your cloud',
                        '99.9% uptime SLA',
                        'Unlimited Connectors',
                        '9x5 Customer Support via Slack/Email',
                    ]}
                />
                <Card
                    selected={selected === 3}
                    Icon={PricingEnterprise}
                    title="Enterprise"
                    price="Custom Pricing"
                    smallPrice
                    href="/about#contact-us"
                    linkLabel="Contact us"
                    onClick={() => setSelected(3)}
                    items={[
                        'All features of Free + Cloud, plus...',
                        'SOC2 & HIPAA Certificates',
                        'Customer Success Manager',
                        'Single Sign-On Support',
                        'Private Cloud Support',
                        'Custom region support',
                        'PrivateLink and Google Service Connect',
                        '24x7 support available',
                        'Provisioned servers',
                    ]}
                />
            </div>
        </div>
    );
};

export default PricingPlans;
