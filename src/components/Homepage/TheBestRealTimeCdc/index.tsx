import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import RealTimeCdc from '../../../svgs/real-time-cdc.svg';
import Container from '../../Container';
import { LinkFilled } from '../../../globalStyles';
import Advantage from './Advantage';
import {
    advantagesList,
    wrapper,
    iconWrapper,
    link,
    leftColumn,
    rightColumn,
} from './styles.module.less';

const TheBestRealTimeCdc = () => {
    return (
        <section className={wrapper}>
            <Container>
                <div className={leftColumn}>
                    <div className={iconWrapper}>
                        <RealTimeCdc />
                    </div>
                    <h2>
                        <span>Use the best </span>
                        real-time CDC
                    </h2>
                    <p>
                        Estuary Flow is the most real-time, most reliable change
                        data capture (CDC) available today. It is the only CDC
                        with the:
                    </p>
                    <div className={advantagesList}>
                        <Advantage title="Fastest captures, with sub-100ms end-to-end latency" />
                        <Advantage title="Most reliable delivery via stream-store-replay" />
                        <Advantage title="Most flexible materializations that run at your speed of choice" />
                        <Advantage title="Most automated pipelines with schema evolution" />
                        <Advantage title="Most versatile writes that maintain a current view or all change history" />
                        <Advantage title="Most scalable pipelines, with true elastic scaling" />
                    </div>
                    <LinkFilled href="/integrations/" className={link}>
                        View Connectors
                    </LinkFilled>
                </div>
                <div className={rightColumn}>
                    <StaticImage
                        src="../../../images/real-time-graphic.png"
                        alt="Real-time ETL with Estuary Flow: Seamlessly move data from source to destination for immediate analysis and actionable insights."
                        placeholder="none"
                        quality={100}
                    />
                </div>
            </Container>
        </section>
    );
};

export default TheBestRealTimeCdc;
