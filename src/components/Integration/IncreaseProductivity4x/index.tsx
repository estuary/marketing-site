import MainConnectors from '../../MainConnectors';
import { sectionTitle } from '../styles.module.less';
import { container, description } from './styles.module.less';

const IncreaseProductivity4x = () => {
    return (
        <section>
            <div className={container}>
                <h2 className={sectionTitle}>Increase productivity 4x</h2>
                <p className={description}>
                    With Flow companies increase productivity 4x and deliver new
                    projects in days, not months. Spend much less time on
                    troubleshooting, and much more on building new features
                    faster. Flow decouples sources and destinations so you can
                    add and change systems without impacting others, and share
                    data across analytics, apps, and AI.
                </p>
                <MainConnectors isLightTheme />
            </div>
        </section>
    );
};

export default IncreaseProductivity4x;
