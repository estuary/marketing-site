import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import clsx from 'clsx';
import {
    zoomInOutCircle,
    step,
    step4,
    stepContent,
    buttonTooltip,
    left,
    tooltipHeading,
    tooltipDescription,
} from './styles.module.less';

const Step4 = ({ activePage, setState }) => {
    return (
        <div className={clsx(step, step4)}>
            <div className={stepContent}>
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    src="../../images/flow-images/step4-image.png"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className={zoomInOutCircle}
                    onClick={() => setState(activePage + 1)}
                />
                <div className={clsx(buttonTooltip, left)}>
                    <div className={tooltipHeading}>
                        Your Data &apos;Collections&apos;
                    </div>
                    <div className={tooltipDescription}>
                        Flow stores data from your captures as collections:
                        groups of cleaned, de-duped, and validated, JSON files
                        in your cloud storage. Both your real-time and
                        historical data live here.
                    </div>
                    <div className={tooltipDescription}>
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
