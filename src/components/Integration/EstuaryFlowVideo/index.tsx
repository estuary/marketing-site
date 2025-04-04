import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import FlowDemoVideo from '../../FlowDemoVideo';
import { dashboardRegisterUrl } from '../../../../shared';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';
import LinkOutlined from '../../LinksAndButtons/LinkOutlined';
import { sectionTitle } from '../styles.module.less';
import { buttonsWrapper, container, description } from './styles.module.less';

const EstuaryFlowVideo = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <div className={container}>
                <h2 className={sectionTitle}>
                    <span>ESTUARY FLOW</span> IN ACTION
                </h2>
                <p className={description}>
                    See how to build end-to-end pipelines using no-code
                    connectors in minutes. Estuary Flow does the rest.
                </p>
                <FlowDemoVideo />
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
