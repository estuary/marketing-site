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
                        description={`Log in to your Estuary Flow account and go to Sources. Click + NEW CAPTURE, search for the ${sourceConnector.title} connector, and select Real-time or Batch. Enter the capture name, ${sourceConnector.title} account, username, and password. Click NEXT, then SAVE AND PUBLISH to finish.`}
                        step={1}
                    />
                    <Step
                        title={
                            <>
                                Configure <span>{destConnector.title}</span> as
                                the Destination
                            </>
                        }
                        description={`After creating the capture, click MATERIALIZE COLLECTIONS or go to Destinations and click + NEW MATERIALIZATION. Search for the ${destConnector.title} connector, enter the materialization name, workspace URL, database, username, and password. Link the ${sourceConnector.title} capture under Source Collections, then click NEXT and SAVE AND PUBLISH.`}
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
