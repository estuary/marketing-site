import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import StepCards from '../../StepCards';
import Step from '../../StepCards/Step';
import { Connectors } from '../shared';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';
import { dashboardRegisterUrl } from '../../../../shared';
import { container } from './styles.module.less';

const ThreeQuickSteps = ({ sourceConnector, destConnector }: Connectors) => {
    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical className={container}>
                <h2>
                    How to Integrate <span>{sourceConnector.title}</span> with{' '}
                    <span>{destConnector.title}</span> in 3 Simple Steps Using
                    Estuary Flow
                </h2>
                <StepCards>
                    <Step
                        title={
                            <>
                                Connect <span>{sourceConnector.title}</span> as
                                Your Real-Time Data Source
                            </>
                        }
                        description={`Set up a real-time source connector for ${sourceConnector.title} in minutes. Estuary captures change data (CDC), events, or snapshots — no custom pipelines, agents or manual configs needed.`}
                        step={1}
                    />
                    <Step
                        title={
                            <>
                                Configure <span>{destConnector.title}</span> as
                                Your Target
                            </>
                        }
                        description={`Choose ${destConnector.title} as your target system. Estuary intelligently maps schemas, supports both batch and streaming loads, and adapts to schema changes automatically.`}
                        step={2}
                    />
                    <Step
                        title={
                            <>
                                Deploy and Monitor Your End-to-End Data Pipeline
                            </>
                        }
                        description="Launch your pipeline and monitor it from a single UI. Estuary Flow guarantees exactly-once delivery, handles backfills and replays, and scales with your data — without engineering overhead."
                        step={3}
                    />
                </StepCards>
                <OutboundLinkFilled
                    id={`try-estuary-for-free-button/3-quick-steps-section/integration-page-${sourceConnector.title}-to-${destConnector.title}`}
                    href={dashboardRegisterUrl}
                    target="_blank"
                >
                    Try Estuary for Free
                </OutboundLinkFilled>
            </Container>
        </section>
    );
};

export default ThreeQuickSteps;
