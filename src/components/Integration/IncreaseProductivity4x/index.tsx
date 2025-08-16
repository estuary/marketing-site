import clsx from 'clsx';
import MainConnectors from '../../MainConnectors';
import { sectionTitle, darkThemeSectionTitle } from '../styles.module.less';
import {
    container,
    description,
    darkThemeDescription,
} from './styles.module.less';

interface IncreaseProductivity4xProps {
    isDarkTheme?: boolean;
}

const IncreaseProductivity4x = ({
    isDarkTheme = false,
}: IncreaseProductivity4xProps) => {
    return (
        <section>
            <div className={container}>
                <h2
                    className={clsx(
                        sectionTitle,
                        isDarkTheme && darkThemeSectionTitle
                    )}
                >
                    Increase productivity 4x
                </h2>
                <p
                    className={clsx(
                        description,
                        isDarkTheme && darkThemeDescription
                    )}
                >
                    With Flow companies increase productivity 4x and deliver new
                    projects in days, not months. Spend much less time on
                    troubleshooting, and much more on building new features
                    faster. Flow decouples sources and destinations so you can
                    add and change systems without impacting others, and share
                    data across analytics, apps, and AI.
                </p>
                <MainConnectors isLightTheme={!isDarkTheme} />
            </div>
        </section>
    );
};

export default IncreaseProductivity4x;
