import { dashboardRegisterUrl } from '../../../shared';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';
import { container, image } from './styles.module.less';

const SidebarCta = () => {
    return (
        <div className={container}>
            <div className={image}>
                <span>
                    Build a <span>Pipeline</span>
                </span>
            </div>
            <h3>
                Start streaming your data <span>for free</span>
            </h3>
            <OutboundLinkFilled href={dashboardRegisterUrl}>
                Build a Pipeline
            </OutboundLinkFilled>
        </div>
    );
};

export default SidebarCta;
