import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const Step1 = ({ activePage, setState }) => {
    return (
        <div className={`step step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    src="../../images/flow-images/step1-image.png"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(activePage + 1)}
                />
                <div className="button-tooltip left">
                    <div className="tooltip-heading">Connect Source</div>
                    <div className="tooltip-description">
                        Choose from databases, SaaS APIs, filestores, pub-sub
                        systems, Vector DB, and more.
                    </div>
                    <div className="tooltip-action">
                        Click the dot to continue
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step1;
