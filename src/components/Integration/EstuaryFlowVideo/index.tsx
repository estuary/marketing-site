import FlowDemoVideo from '../../FlowDemoVideo';
import { dashboardRegisterUrl } from '../../../../shared';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';
import LinkOutlined from '../../LinksAndButtons/LinkOutlined';
import { sectionTitle } from '../styles.module.less';
import { buttonsWrapper, container, description } from './styles.module.less';

const EstuaryFlowVideo = () => {
    return (
        <section>
            <div className={container}>
                <h2 className={sectionTitle}>
                    <span>Estuary Flow</span> in action
                </h2>
                <p className={description}>
                    See how to build end-to-end pipelines using no-code
                    connectors in minutes. Estuary Flow does the rest.
                </p>
                <FlowDemoVideo pageId="integration-page" />
                <div className={buttonsWrapper}>
                    <OutboundLinkFilled
                        href={dashboardRegisterUrl}
                        target="_blank"
                    >
                        Try Now
                    </OutboundLinkFilled>
                    <LinkOutlined href="/contact-us">Contact Us</LinkOutlined>
                </div>
            </div>
        </section>
    );
};

export default EstuaryFlowVideo;
