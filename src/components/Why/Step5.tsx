import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import {
    zoomInOutCircle,
    step,
    step5,
    stepContent,
    buttonTooltip,
    right,
    tooltipHeading,
    tooltipDescription,
} from './styles.module.less';

const Step5 = ({ activePage, setState }) => {
    return (
        <div className={clsx(step, step5)}>
            <div className={stepContent}>
                <StaticImage
                    placeholder="none"
                    alt="Data Engineering Podcast"
                    src="../../images/flow-images/step5-image.png"
                    width={956}
                    height={521}
                    quality={100}
                />
                <div
                    className={zoomInOutCircle}
                    onClick={() => setState(activePage + 1)}
                />
                <div className={clsx(buttonTooltip, right)}>
                    <div className={tooltipHeading}>Transform your data</div>
                    <div className={tooltipDescription}>
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
