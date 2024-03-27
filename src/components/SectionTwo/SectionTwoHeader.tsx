import * as React from 'react';
import FlowLogo from '../../svgs/flow-logo.svg';

const SectionTwoHeader = () => {
  return (
    <div className="section-two-header-wrapper">
      <div className="section-two-header-subwrapper">
        <h2 className="section-two-header">
          Move and <span className="section-two-header-colortext">transform your data</span> from where it is to where
          you want it
          <span className="section-two-header-colortext"> in milliseconds</span>, without scheduling.
        </h2>
        <p className="section-two-subtext">
          Capture from clouds, databases, and SaaS apps using real-time ETL, create real-time transformations and
          materialized views, for a consistent, exact copy of your data powering both analytics and operations.
        </p>
      </div>
      <div className="section-two-header-vectors">
        <FlowLogo className="product-flow-section-one-image" />
      </div>
    </div>
  );
};

export default SectionTwoHeader;
