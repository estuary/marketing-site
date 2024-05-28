import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const Step3 = ({ activePage, setState }) => {
  return (
    <div className={`step-${activePage}`}>
      <div className="step-content">
        <StaticImage
          placeholder="none"
          alt="Data Engineering Podcast"
          loading="lazy"
          src="../../images/flow-images/step3-image.png"
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
          <div className="tooltip-heading">Success!</div>
          <div className="tooltip-description">
            You&apos;ll never have to connect that data source
            again!
          </div>
          <div className="tooltip-description">
            Whether you need 1-millisecond or 1-hour syncs, building
            pipelines on our event-driven architecture gives you:
          </div>
          <ul className="tooltip-list">
            <li>
              Greater <b>cost efficiency</b> since only
              incremental data is processed.
            </li>
            <li>
              <b>Boundless horizontal scalability.</b>
            </li>
            <li>
              <b>Resilient and fault tolerant</b> pipelines.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Step3;
