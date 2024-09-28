import * as React from 'react';
import clsx from 'clsx';
import { calculatePrice, currencyFormatter } from '../../utils';
import { OutboundLink } from '../OutboundLink';
import { dashboardRegisterUrl } from '../../../shared';
import {
    step,
    step7,
    pipelineLink,
    stepContent,
    stepHeading,
    stepCtas,
    compareLink,
} from './styles.module.less';

const Step7 = () => {
    return (
        <div className={clsx(step, step7)}>
            <div className={stepContent}>
                <div className={stepHeading}>Predictable Pricing</div>
                <ul>
                    <li>
                        <b>
                            {currencyFormatter.format(
                                calculatePrice(1, 0).estuary
                            )}
                        </b>
                        /GB
                    </li>
                    <li>
                        <b>
                            {currencyFormatter.format(
                                calculatePrice(0, 1).estuary
                            )}
                        </b>
                        /task month
                    </li>
                    <li>Free for up to two tasks and 10 GB/month</li>
                </ul>
                <div className={stepCtas}>
                    <OutboundLink
                        target="_blank"
                        href={dashboardRegisterUrl}
                        className={pipelineLink}
                    >
                        Build a Pipeline
                    </OutboundLink>
                    <OutboundLink
                        target="_blank"
                        href="https://estuary.dev/etl-tools/estuary-vs-fivetran/"
                        className={compareLink}
                    >
                        Compare to Fivetran
                    </OutboundLink>
                </div>
            </div>
        </div>
    );
};

export default Step7;
