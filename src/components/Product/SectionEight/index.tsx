import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { DefaultWrapperDark } from '../../../styles/wrappers';
import Advantages from '../Advantages';
import { sectionEightAdvantages } from '../Advantages/advantages';
import {
    BottomCaseStudies,
    BottomCaseStudy,
    CaseStudies,
    IconWrapper,
    TopCaseStudy,
} from './styles';

const SectionEight = () => {
    return (
        <DefaultWrapperDark>
            <Advantages
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Maximize efficiency, reduce expenses"
                        src="../../../svgs/product-page/section-eight/database-costs.svg"
                        layout="constrained"
                        loading="lazy"
                    />
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
                                    alt="Case study - Connect & Go logo"
                                    src="../../../images/c&g-logo.png"
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
                                        alt="Case study - True logo"
                                        src="../../../images/true-logo.png"
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
                                        alt="Case study - Soli & Company logo"
                                        src="../../../images/soli&company-logo.png"
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
                advantages={sectionEightAdvantages}
            />
        </DefaultWrapperDark>
    );
};

export default SectionEight;
