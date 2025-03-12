import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import RealTimeIcon from '../../../../svgs/company-updates-flow-diagram/real-time.svg';
import BatchIcon from '../../../../svgs/company-updates-flow-diagram/batch.svg';
import SaasIcon from '../../../../svgs/company-updates-flow-diagram/saas.svg';
import AnalyticsIcon from '../../../../svgs/company-updates-flow-diagram/analytics.svg';
import OpsIcon from '../../../../svgs/company-updates-flow-diagram/ops.svg';
import AiIcon from '../../../../svgs/company-updates-flow-diagram/ai.svg';
import StoreIcon from '../../../../svgs/company-updates-flow-diagram/store.svg';
import TransformIcon from '../../../../svgs/company-updates-flow-diagram/transform.svg';
import { diagram, diagramCards } from './styles.module.less';

interface FlowDiagramProps {
    diagramCardsClassName?: string;
}

const FlowDiagram = ({ diagramCardsClassName }: FlowDiagramProps) => {
    return (
        <div className={diagram}>
            <div className={clsx(diagramCards, diagramCardsClassName)}>
                <h4>
                    Connect to Any Data <br /> Source
                </h4>
                <h4>
                    Put Your Data to <br /> Work
                </h4>
                <div>
                    <RealTimeIcon />
                    <span>
                        Real-time <br /> Streams
                    </span>
                </div>
                <div>
                    <BatchIcon />
                    <span>Files & Databases</span>
                </div>
                <div>
                    <SaasIcon />
                    <span>
                        Apps & Cloud <br /> Services
                    </span>
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
                src="../../../../images/company-updates/move-and-transform-data.png"
                quality={100}
            />
        </div>
    );
};

export default FlowDiagram;
