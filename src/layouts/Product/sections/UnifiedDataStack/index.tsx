import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { OutboundLink } from '../../../../components/OutboundLink';
import { DefaultWrapperDark } from '../../../../styles/wrappers';
import Advantages from '../../components/Advantages';
import {
    BottomCaseStudies,
    BottomCaseStudy,
    CaseStudies,
    IconWrapper,
    TopCaseStudy,
} from './styles';

const UnifiedDataStack = () => {
    return (
        <DefaultWrapperDark>
            <Advantages
                icon={
                    <IconWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Coding optional"
                            src="../../../../svgs/product-page/section-eight/database-costs.svg"
                            layout="constrained"
                            loading="lazy"
                        />
                    </IconWrapper>
                }
                title={
                    <>
                        INCREASE PRODUCTIVITY, <span>LOWER COSTS</span>
                    </>
                }
                image={
                    <CaseStudies>
                        <TopCaseStudy>
                            <IconWrapper>
                                <StaticImage
                                    placeholder="none"
                                    alt="Coding optional"
                                    src="../../../../images/c&g-logo.png"
                                    layout="constrained"
                                    loading="lazy"
                                />
                            </IconWrapper>
                            <h3>CONNECT&GO</h3>
                            <p>
                                Connect&GO lowers MySQL to Snowflake latency up
                                to 180x, improves productivity 4x with Estuary.
                            </p>
                        </TopCaseStudy>
                        <BottomCaseStudies>
                            <BottomCaseStudy>
                                <IconWrapper>
                                    <StaticImage
                                        placeholder="none"
                                        alt="Coding optional"
                                        src="../../../../images/true-logo.png"
                                        layout="constrained"
                                        loading="lazy"
                                    />
                                </IconWrapper>
                                <h3>TRUE PLATFORM</h3>
                                <p>
                                    True Platform reduced its data pipeline
                                    spend by &gt;2x and discovered seamless,
                                    scalable data movement.
                                </p>
                            </BottomCaseStudy>
                            <BottomCaseStudy>
                                <IconWrapper>
                                    <StaticImage
                                        placeholder="none"
                                        alt="Coding optional"
                                        src="../../../../images/soli&company-logo.png"
                                        layout="constrained"
                                        loading="lazy"
                                    />
                                </IconWrapper>
                                <h3>SOLI & COMPANY</h3>
                                <p>
                                    Soli & Company trusts Estuary&apos;s
                                    approachable pricing and quick setup to
                                    deliver change data capture solutions.
                                </p>
                            </BottomCaseStudy>
                        </BottomCaseStudies>
                    </CaseStudies>
                }
                advantages={[
                    {
                        id: 7,
                        title: 'Be 4x more productive and focus more new development, less on troubleshooting.',
                    },
                    {
                        id: 8,
                        title: (
                            <>
                                Spend 2-5x less with low, predictable pricing
                                (see{' '}
                                <OutboundLink href="/pricing" target="_blank">
                                    pricing
                                </OutboundLink>
                                .)
                            </>
                        ),
                    },
                    {
                        id: 9,
                        title: 'Minimize source loads and costs by extracting data only once from each source.',
                    },
                    {
                        id: 10,
                        title: 'Lower destination costs by using real-time extraction with batch loading. Then schedule faster updates only when you need them.',
                    },
                ]}
            />
        </DefaultWrapperDark>
    );
};

export default UnifiedDataStack;
