import * as React from 'react';
import { calculatePrice, currencyFormatter } from '../../utils';
import { OutboundLink } from '../OutboundLink';

const Step7 = ({ activePage }) => {
  return (
    <div className={`step-${activePage}`}>
      <div className="step-content">
        <div className="step-heading">Predictable Pricing</div>
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
        <div className="step-ctas">
          <OutboundLink
            target="_blank"
            href="https://dashboard.estuary.dev/register"
            className="pipeline-link"
          >
            Build a Pipeline
          </OutboundLink>
          <OutboundLink
            target="_blank"
            href="https://estuary.dev/vs-fivetran/"
            className="compare-link"
          >
            Compare to Fivetran
          </OutboundLink>
        </div>
      </div>
    </div>
  );
};

export default Step7;
