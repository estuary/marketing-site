import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

const Step5 = ({ activePage, setState }) => {
    return (
        <div className={`step step-${activePage}`}>
            <div className="step-content">
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    src="../../images/flow-images/step5-image.png"
                    width={956}
                    height={521}
                    quality={100}
                />
                <div
                    className="zoom-in-out-circle"
                    onClick={() => setState(activePage + 1)}
                />
                <div className="button-tooltip right">
                    <div className="tooltip-heading">Transform your data</div>
                    <div className="tooltip-description">
                        Use SQL or TypeScript to apply stateful transforms
                        in-flight, or to join your collections. Send only the
                        data you need to your warehouse.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step5;
