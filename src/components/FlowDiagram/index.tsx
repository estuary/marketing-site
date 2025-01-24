import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import RealTimeIcon from '../../svgs/homepage/real-time.svg';
import BatchIcon from '../../svgs/homepage/batch.svg';
import SaasIcon from '../../svgs/homepage/saas.svg';
import AnalyticsIcon from '../../svgs/homepage/analytics.svg';
import OpsIcon from '../../svgs/homepage/ops.svg';
import AiIcon from '../../svgs/homepage/ai.svg';
import StoreIcon from '../../svgs/homepage/store.svg';
import TransformIcon from '../../svgs/homepage/transform.svg';
import {
    desktopImage,
    mobileImage,
    diagram,
    diagramCards,
} from './styles.module.less';

interface FlowDiagramProps {
    DiagramCardsClassName?: string;
    hasDesktopImageOnly?: boolean;
}

const FlowDiagram = ({
    DiagramCardsClassName,
    hasDesktopImageOnly = false,
}: FlowDiagramProps) => {
    return (
        <div className={diagram}>
            <div className={clsx(diagramCards, DiagramCardsClassName)}>
                <h4>Connect to Any Data Source</h4>
                <h4>Put Your Data to Work</h4>
                <div>
                    <RealTimeIcon />
                    <span>Real-time Streams</span>
                </div>
                <div>
                    <BatchIcon />
                    <span>Files & Databases</span>
                </div>
                <div>
                    <SaasIcon />
                    <span>Apps & Cloud Services</span>
                </div>
                <div>
                    <AnalyticsIcon />
                    <span>Analytics</span>
                </div>
                <div>
                    <OpsIcon />
                    <span>Operations</span>
                </div>
                <div>
                    <AiIcon />
                    <span>AI</span>
                </div>
                <div>
                    <div>
                        <StoreIcon />
                        <TransformIcon />
                    </div>
                    <h4>
                        Combine and <br /> Transform
                    </h4>
                </div>
            </div>
            <StaticImage
                placeholder="blurred"
                alt=""
                src="../../images/homepage/move-and-transform-data.png"
                quality={100}
                className={!hasDesktopImageOnly ? desktopImage : null}
            />
            {!hasDesktopImageOnly ? (
                <StaticImage
                    placeholder="blurred"
                    alt=""
                    src="../../images/homepage/move-and-transform-data-mobile.png"
                    quality={100}
                    className={mobileImage}
                    layout="fullWidth"
                />
            ) : null}
        </div>
    );
};

export default FlowDiagram;
