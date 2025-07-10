import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import FlowDemoVideo from '../../FlowDemoVideo';
import Container from '../../Container';
import { textWrapper } from '../styles.module.less';

const BuildInMinutes = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Container isVertical>
                <div className={textWrapper}>
                    <h2>
                        Deliver
                        <span> value </span>
                        in minutes
                    </h2>
                    <p>
                        Eliminate data silos, streamline workflows, and
                        accelerate operations
                    </p>
                </div>
                <div>
                    <FlowDemoVideo pageId="build-in-minutes-video-section/homepage" />
                </div>
            </Container>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default BuildInMinutes;
