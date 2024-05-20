import React from 'react';

import PricingExampleTwo from '../../../svgs/graphic_parent_2.svg';
import PricingExampleOne from '../../../svgs/graphic_parent.svg';
import { costPerGB } from '../../../utils';

const PricingComparison = () => {
  return (
    <div className="pricing-comparison-wrapper">
      <h2 className="pricing-comparison-header">Pricing Examples</h2>
      <div className="pricing-comparison-row">
        <div className="box-container">
          <div className="no-box-shadow">
            <PricingExampleOne />
          </div>

          <div>
            <div className="pricing-comparison-text">
              <p className="pricing-comparison-card-header">Streaming ETL</p>
              <p className="pricing-comparison-card-subheader">Only pay once for source and target data</p>
              <p className="pricing-comparison-card-body">
                Capture data from any source once. Estuary stores it all in your cloud storage. You’re only billed once
                for each source, target, and the data you move at {costPerGB} and $0.14/connector/hour.
              </p>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="no-box-shadow">
            <PricingExampleTwo />
          </div>
          <div>
            <div className="pricing-comparison-text">
              <p className="pricing-comparison-card-header">Add New Targets</p>
              <p className="pricing-comparison-card-subheader">Only pay once for new target data</p>
              <p className="pricing-comparison-card-body">
                Add a new target, or add more data to an existing target, at any time. You only pay once for the
                additional targets and data sent to them at {costPerGB} and $0.14/connector/hour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComparison;
