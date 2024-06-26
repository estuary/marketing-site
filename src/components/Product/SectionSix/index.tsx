import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapperDark } from '../../../styles/wrappers';

import { OutboundLink } from '../../OutboundLink';
import Advantages from '../Advantages';

const SectionSix = () => {
    return (
        <DefaultWrapperDark>
            <Advantages
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Coding optional"
                        src="../../../svgs/product-page/section-six/code.svg"
                        layout="constrained"
                        loading="lazy"
                    />
                }
                title={
                    <>
                        <span>CONFIGURE</span> OR CODE
                    </>
                }
                subtitle="Choose the best combination of no-code configuration and coding to move and transform data."
                image={
                    <StaticImage
                        placeholder="none"
                        alt="Coding optional"
                        src="../../../images/product-page/section-six/optional-code.png"
                        layout="constrained"
                        loading="lazy"
                    />
                }
                advantages={[
                    {
                        id: 1,
                        title: 'Use 100s of no-code connectors for apps, DBs, DWs, and more.',
                    },
                    {
                        id: 2,
                        title: (
                            <>
                                Use the Flow UI to build without coding, or the{' '}
                                <OutboundLink
                                    href="https://docs.estuary.dev/concepts/flowctl/"
                                    target="_blank"
                                >
                                    flowctl
                                </OutboundLink>{' '}
                                CLI for development.
                            </>
                        ),
                    },
                    {
                        id: 3,
                        title: 'Transform using Streaming SQL (ETL) and Typescript (ETL) or dbt (ELT) in your warehouse.',
                    },
                ]}
            />
        </DefaultWrapperDark>
    );
};

export default SectionSix;
