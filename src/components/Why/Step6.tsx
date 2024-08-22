import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const Step6 = ({ activePage, setState }) => {
    return (
        <div className={`step step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    loading="lazy"
                    src="../../images/flow-images/step6-image.png"
                    width={949}
                    height={597}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(activePage + 1)}
                />
                <div className="button-tooltip right">
                    <div className="tooltip-heading">Materialize Data</div>
                    <div className="tooltip-description">
                        Stream collections to your destinations with sub-second
                        latency and exactly-once processing guarantees.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step6;
