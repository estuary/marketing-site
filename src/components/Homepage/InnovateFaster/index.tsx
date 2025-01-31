import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import MainConnectors from '../../MainConnectors';
import { textWrapper } from '../styles.module.less';
import Container from '../../Container';
import { wrapper } from './styles.module.less';

const InnovateFaster = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Container isVertical className={wrapper}>
                <div className={textWrapper}>
                    <h2>INNOVATE FASTER</h2>
                    <p>
                        Innovate faster with a single data pipeline that
                        decouples sources and destinations so you can share data
                        across analytics, apps, and AI, and add or change
                        systems, all without impacting others.
                    </p>
                </div>
                <MainConnectors />
            </Container>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default InnovateFaster;
