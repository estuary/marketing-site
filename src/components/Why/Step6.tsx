import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    zoomInOutCircle,
    step,
    step6,
    stepContent,
    buttonTooltip,
    right,
    tooltipHeading,
    tooltipDescription,
} from './styles.module.less';

const Step6 = ({ activePage, setState }) => {
    return (
        <div className={clsx(step, step6)}>
            <div className={stepContent}>
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    src="../../images/flow-images/step6-image.png"
                    width={949}
                    height={597}
                    quality={100}
                />
                <div
                    className={zoomInOutCircle}
                    onClick={() => setState(activePage + 1)}
                />
                <div className={clsx(buttonTooltip, right)}>
                    <div className={tooltipHeading}>Materialize Data</div>
                    <div className={tooltipDescription}>
                        Stream collections to your destinations with sub-second
                        latency and exactly-once processing guarantees.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step6;
