import { StaticImage } from 'gatsby-plugin-image';
import { dashboardRegisterUrl } from '../../../../shared';
import StraightLinesBackground from '../../../components/BackgroundImages/StraightLinesBackground';
import OutboundLinkFilled from '../../../components/LinksAndButtons/OutboundLinkFilled';
import {
    containerWrapper,
    container,
    containerImage,
    content,
    wrapper,
} from './style.module.less';

const RealTime = () => {
    return (
        <section>
            <div className={wrapper}>
                <div className={containerWrapper}>
                    <StraightLinesBackground className={container}>
                        <div className={content}>
                            <h2>
                                Deliver <span>real-time</span> and{' '}
                                <span>batch</span> data from DBs, SaaS, APIs,
                                and more
                            </h2>
                            <OutboundLinkFilled
                                id="build-free-pipeline-button/connector-page"
                                target="_blank"
                                href={dashboardRegisterUrl}
                            >
                                Build Free Pipeline
                            </OutboundLinkFilled>
                        </div>
                        <div className={containerImage}>
                            <StaticImage
                                alt="Connection-1"
                                src="../../../images/lp-connector/real-time/icons.png"
                                width={520}
                                height={240}
                                quality={100}
                            />
                        </div>
                    </StraightLinesBackground>
                </div>
            </div>
        </section>
    );
};

export default RealTime;
