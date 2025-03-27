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
                    How to Connect <span>{sourceConnector.title}</span> with{' '}
                    <span>{destConnector.title}</span> in 3 Quick Steps Using
                    Estuary Flow
                </h2>
                <StepCards>
                    <Step
                        title={
                            <>
                                Set up <span>{sourceConnector.title}</span>{' '}
                                connector as Your Source
                            </>
                        }
                        description={`Log in to your Estuary account and search for the ${sourceConnector.title} connector.`}
                        step={1}
                    />
                    <Step
                        title={
                            <>
                                Configure <span>{destConnector.title}</span> as
                                the Destination
                            </>
                        }
                        description={`Give it a name and configure your connection details for ${sourceConnector.title}, then press save to finish.`}
                        step={2}
                    />
                    <Step
                        title={
                            <>
                                Monitor and Manage Your <span>Data Flow</span>
                            </>
                        }
                        description={`Once materialization is complete, Estuary Flow will automatically sync your ${sourceConnector.title} data into ${destConnector.title}. You can monitor data flow in the Collections tab and manage updates or troubleshoot if needed.`}
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
