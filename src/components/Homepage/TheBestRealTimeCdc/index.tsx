import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import RealTimeCdc from '../../../svgs/real-time-cdc.svg';
import { LinkFilled } from '../../../globalStyles';
import Advantages from '../../Advantages';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';

const TheBestRealTimeCdc = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Advantages
                icon={<RealTimeCdc />}
                title={
                    <>
                        USE THE BEST <span>REAL-TIME CDC</span>
                    </>
                }
                subtitle="Estuary Flow is the most real-time, most reliable change
                            data capture (CDC) available today. It is the only CDC
                            with the:"
                image={
                    <StaticImage
                        src="../../../images/real-time-graphic.png"
                        alt="Real-time ETL with Estuary Flow: Seamlessly move data from source to destination for immediate analysis and actionable insights."
                        placeholder="none"
                        quality={100}
                    />
                }
                advantages={[
                    {
                        id: 18,
                        title: 'Fastest captures, with sub-100ms end-to-end latency',
                    },
                    {
                        id: 19,
                        title: 'Most reliable delivery via stream-store-replay',
                    },
                    {
                        id: 20,
                        title: 'Most flexible materializations that run at your speed of choice',
                    },
                    {
                        id: 21,
                        title: 'Most automated pipelines with schema evolution',
                    },
                    {
                        id: 22,
                        title: 'Most versatile writes that maintain a current view or all change history',
                    },
                    {
                        id: 23,
                        title: 'Most scalable pipelines, with true elastic scaling',
                    },
                ]}
                ctaButtons={
                    <LinkFilled href="/integrations/">
                        View Connectors
                    </LinkFilled>
                }
            />
        </section>
    );
};

export default TheBestRealTimeCdc;
