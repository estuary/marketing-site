import React from 'react';
import CheckmarkIcon from '../../svgs/checkmark.svg';
import { container } from './styles.module.less';

const SubscriptionBenefits = () => {
    return (
        <ul className={container}>
            <li>
                <div>
                    <CheckmarkIcon width={14} color="#fff" />
                </div>
                <span>
                    <span>No credit card</span> required
                </span>
            </li>
            <li>
                <div>
                    <CheckmarkIcon width={14} color="#fff" />
                </div>
                <span>
                    30 days <span>free trial</span>
                </span>
            </li>
        </ul>
    );
};

export default SubscriptionBenefits;
