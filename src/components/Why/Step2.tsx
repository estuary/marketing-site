import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    zoomInOutCircle,
    step,
    step2,
    stepContent,
    buttonTooltip,
    top,
    tooltipHeading,
    tooltipDescription,
} from './styles.module.less';

const Step2 = ({ activePage, setState }) => {
    return (
        <div className={clsx(step, step2)}>
            <div className={stepContent}>
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    src="../../images/flow-images/step2-image.png"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className={zoomInOutCircle}
                    onClick={() => setState(activePage + 1)}
                />
                <div className={clsx(buttonTooltip, top)}>
                    <div className={tooltipHeading}>Automated Schema</div>
                    <div className={tooltipDescription}>
                        Flow infers and automatically evolves the best schemas
                        for your source data tables, streams, or API objects.
                    </div>
                    <div className={tooltipDescription}>
                        You&apos;re free to make changes, but you&apos;ll rarely
                        want to.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2;
