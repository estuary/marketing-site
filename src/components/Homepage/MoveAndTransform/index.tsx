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
                    Build low-latency ETL and ELT pipelines using connectors for
                    any database or data warehouse to power your analytics,
                    operations and AI.
                </p>
            </div>
            <FlowDiagram />
        </section>
    );
};

export default MoveAndTransform;
