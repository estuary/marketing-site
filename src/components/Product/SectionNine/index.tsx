import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import ActiveUsersIcon from '../../../svgs/metric-active-users.svg';
import LatencyIcon from '../../../svgs/metric-latency.svg';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import Advantages from '../Advantages';
import {
    ActiveUsersMetric,
    IconWrapper,
    LatencyMetric,
    LogoWrapper,
    Metrics,
    SingleDataFlowMetric,
    TextWrapper,
} from './styles';

const SectionNine = () => {
    return (
        <DefaultWrapperDarkBlue>
            <Advantages
                isDarkTheme
                isImageOnTheLeft
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Real-time data"
                        src="../../../svgs/product-page/section-nine/real-time-clock.svg"
                        layout="constrained"
                        loading="lazy"
                    />
                }
                title={
                    <>
                        DELIVER <span>REAL-TIME DATA</span> AT SCALE
                    </>
                }
                subtitle="Estuary Flow delivers reliable, real-time performance in production for over 3,000 active users, including some the most demanding workloads proven to 10x the scale of the alternatives."
                image={
                    <Metrics>
                        <StaticImage
                            placeholder="none"
                            alt="Estuary performance metrics"
                            src="../../../images/product-page/section-nine/metrics-background.png"
                            layout="constrained"
                            loading="lazy"
                        />
                        <LogoWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Estuary logo"
                                src="../../../images/product-page/section-nine/estuary-logo.png"
                                layout="constrained"
                                loading="lazy"
                                quality={100}
                            />
                        </LogoWrapper>
                        <SingleDataFlowMetric>
                            <IconWrapper>
                                <SingleDataflowIcon color="#ffffff" />
                            </IconWrapper>
                            <TextWrapper>
                                <h3>7+GB/sec</h3>
                                <p>Single dataflow</p>
                            </TextWrapper>
                        </SingleDataFlowMetric>
                        <ActiveUsersMetric>
                            <IconWrapper>
                                <ActiveUsersIcon color="#5072EB" />
                            </IconWrapper>
                            <TextWrapper>
                                <h3>3000+</h3>
                                <p>Active users</p>
                            </TextWrapper>
                        </ActiveUsersMetric>
                        <LatencyMetric>
                            <IconWrapper>
                                <LatencyIcon color="#5072EB" />
                            </IconWrapper>
                            <TextWrapper>
                                <h3>&#60;100ms</h3>
                                <p>Latency</p>
                            </TextWrapper>
                        </LatencyMetric>
                    </Metrics>
                }
                advantages={[
                    {
                        id: 11,
                        title: 'Stream in real-time at any scale, running over 7GB/sec in production just for 1 customer.',
                    },
                    {
                        id: 12,
                        title: 'Ensure data is never lost with exactly-once transactionally storage and delivery.',
                    },
                    {
                        id: 13,
                        title: 'Use built-in monitoring and alerting, and active-active load balancing and failover.',
                    },
                ]}
            />
        </DefaultWrapperDarkBlue>
    );
};

export default SectionNine;
