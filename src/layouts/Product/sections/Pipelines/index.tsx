import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { OutboundLink } from '../../../../components/OutboundLink';
import { DefaultWrapperDarkBlue } from '../../../../styles/wrappers';
import Advantages from '../../components/Advantages';

const Pipelines = () => {
    return (
        <DefaultWrapperDarkBlue>
            <Advantages
                isDarkTheme
                isImageOnTheLeft
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Coding optional"
                        src="../../../../svgs/product-page/section-seven/use-modern-dataops.svg"
                        layout="constrained"
                        loading="lazy"
                    />
                }
                title={
                    <>
                        USE MODERN <span>DATAOPS</span>
                    </>
                }
                subtitle="Rely on built-in data pipeline best practices, integrate tooling, and automate DataOps to improve productivity and reduce downtime."
                image={
                    <StaticImage
                        placeholder="none"
                        alt="Schema evolution options"
                        src="../../../../images/product-page/section-seven/schema-evolution-options.png"
                        layout="constrained"
                        loading="lazy"
                        quality={100}
                    />
                }
                advantages={[
                    {
                        id: 4,
                        title: (
                            <>
                                Automate DataOps and integrate with other
                                tooling using the{' '}
                                <OutboundLink
                                    href="https://docs.estuary.dev/concepts/flowctl/"
                                    target="_blank"
                                >
                                    flowctl
                                </OutboundLink>{' '}
                                CLI.
                            </>
                        ),
                    },
                    {
                        id: 5,
                        title: (
                            <>
                                Use built-in pipeline{' '}
                                <OutboundLink
                                    href="https://docs.estuary.dev/concepts/flowctl/"
                                    target="_blank"
                                >
                                    testing
                                </OutboundLink>{' '}
                                to validate data and pipeline flows
                                automatically.
                            </>
                        ),
                    },
                    {
                        id: 6,
                        title: (
                            <>
                                Select advanced schema detection and automate{' '}
                                <OutboundLink
                                    href="https://docs.estuary.dev/concepts/flowctl/"
                                    target="_blank"
                                >
                                    schema evolution
                                </OutboundLink>
                                .
                            </>
                        ),
                    },
                ]}
            />
        </DefaultWrapperDarkBlue>
    );
};

export default Pipelines;
