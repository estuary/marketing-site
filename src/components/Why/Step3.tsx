import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    zoomInOutCircle,
    step,
    step3,
    stepContent,
    buttonTooltip,
    left,
    tooltipHeading,
    tooltipDescription,
    tooltipList,
} from './styles.module.less';

const Step3 = ({ activePage, setState }) => {
    return (
        <div className={clsx(step, step3)}>
            <div className={stepContent}>
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    src="../../images/flow-images/step3-image.png"
                    width={950}
                    height={597}
                    quality={100}
                />
                <div
                    className={zoomInOutCircle}
                    onClick={() => setState(activePage + 1)}
                />
                <div className={clsx(buttonTooltip, left)}>
                    <div className={tooltipHeading}>Success!</div>
                    <div className={tooltipDescription}>
                        You&apos;ll never have to connect that data source
                        again!
                    </div>
                    <div className={tooltipDescription}>
                        Whether you need 1-millisecond or 1-hour syncs, building
                        pipelines on our event-driven architecture gives you:
                    </div>
                    <ul className={tooltipList}>
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
