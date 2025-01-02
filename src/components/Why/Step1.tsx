import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    zoomInOutCircle,
    step,
    step1,
    stepContent,
    buttonTooltip,
    left,
    tooltipHeading,
    tooltipDescription,
    tooltipAction,
} from './styles.module.less';

const Step1 = ({ activePage, setState }) => {
    return (
        <div className={clsx(step, step1)}>
            <div className={stepContent}>
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    src="../../images/flow-images/step1-image.png"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className={zoomInOutCircle}
                    onClick={() => setState(activePage + 1)}
                />
                <div className={clsx(buttonTooltip, left)}>
                    <div className={tooltipHeading}>Connect Source</div>
                    <div className={tooltipDescription}>
                        Choose from databases, SaaS APIs, filestores, pub-sub
                        systems, Vector DB, and more.
                    </div>
                    <div className={tooltipAction}>
                        Click the dot to continue
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step1;
