import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import MainConnectors from '../../MainConnectors';
import { container, description, title } from './styles.module.less';

const IncreaseProductivity4x = () => {
    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <h2 className={title}>INCREASE PRODUCTIVITY 4X</h2>
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
