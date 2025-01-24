import FlowDiagram from '../../FlowDiagram';
import { container, header } from './styles.module.less';

const MoveAndTransform = () => {
    return (
        <section className={container}>
            <div className={header}>
                <h2>
                    <span>Move and transform data across 200+ systems</span>
                </h2>
                <p>
                    Integrate with millisecond latency for an exact view of your
                    data to power analytics, operations and AI.
                </p>
            </div>
            <FlowDiagram />
        </section>
    );
};

export default MoveAndTransform;
