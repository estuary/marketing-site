import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapperDark } from '../../../../styles/wrappers';

import { OutboundLink } from '../../../../components/OutboundLink';
import Advantage from './Advantage';
import {
    Advantages,
    Container,
    IconWrapper,
    ImageWrapper,
    Subtitle,
    TextWrapper,
    Title,
} from './styles';

const TheAutomation = () => {
    return (
        <DefaultWrapperDark>
            <Container>
                <TextWrapper>
                    <IconWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Coding optional"
                            src="../../../../svgs/product-page/section-six/code.svg"
                            layout="constrained"
                            loading="lazy"
                        />
                    </IconWrapper>
                    <Title>
                        <span>CONFIGURE</span> OR CODE
                    </Title>
                    <Subtitle>
                        Choose the best combination of no-code configuration and
                        coding to move and transform data.
                    </Subtitle>
                    <Advantages>
                        <Advantage
                            key="advantage1"
                            title="Use 100s of no-code connectors for apps, DBs, DWs, and more."
                        />
                        <Advantage
                            key="advantage2"
                            title={
                                <>
                                    Use the Flow UI to build without coding, or
                                    the{' '}
                                    <OutboundLink
                                        href="https://docs.estuary.dev/concepts/flowctl/"
                                        target="_blank"
                                    >
                                        flowctl
                                    </OutboundLink>{' '}
                                    CLI for development.
                                </>
                            }
                        />
                        <Advantage
                            key="advantage3"
                            title="Transform using Streaming SQL (ETL) and Typescript (ETL) or dbt (ELT) in your warehouse."
                        />
                    </Advantages>
                </TextWrapper>
                <ImageWrapper>
                    <StaticImage
                        placeholder="none"
                        alt="Coding optional"
                        src="../../../../images/product-page/section-six/optional-code.png"
                        layout="constrained"
                        loading="lazy"
                    />
                </ImageWrapper>
            </Container>
        </DefaultWrapperDark>
    );
};

export default TheAutomation;
