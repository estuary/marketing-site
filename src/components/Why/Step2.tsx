import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const Step2 = ({ activePage, setState }) => {
    return (
        <div className={`step step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    loading="lazy"
                    src="../../images/flow-images/step2-image.png"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(activePage + 1)}
                />
                <div className="button-tooltip top">
                    <div className="tooltip-heading">Automated Schema</div>
                    <div className="tooltip-description">
                        Flow infers and automatically evolves the best schemas
                        for your source data tables, streams, or API objects.
                    </div>
                    <div className="tooltip-description">
                        You&apos;re free to make changes, but you&apos;ll rarely
                        want to.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2;
