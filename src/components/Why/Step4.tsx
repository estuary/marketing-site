import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const Step4 = ({ activePage, setState }) => {
  return (
    <div className={`step-${activePage}`}>
      <div className="step-content">
        <StaticImage
          placeholder="none"
          alt="Data Engineering Podcast"
          loading="lazy"
          src="../../images/flow-images/step4-image.png"
          layout="constrained"
          width={950}
          height={597}
          quality={100}
        />
        <div
          className="zoom-in-out-circle"
          onClick={() => setState(activePage + 1)}
        />
        <div className="button-tooltip left">
          <div className="tooltip-heading">
            Your Data &apos;Collections&apos;
          </div>
          <div className="tooltip-description">
            Flow stores data from your captures as collections:
            groups of cleaned, de-duped, and validated, JSON files
            in your cloud storage. Both your real-time and
            historical data live here.
          </div>
          <div className="tooltip-description">
            You can stream these collections to destinations with
            sub-second latency, or add an in-flight transformation
            step first.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
