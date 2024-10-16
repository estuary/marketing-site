import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import { docsPageUrl } from '../../../../shared';
import {
    Button,
    Container,
    Description,
    IconWrapper,
    LeftColumn,
    RightColumn,
    Title,
    Wrapper,
} from './styles';

const SectionSeven = () => {
    return (
        <Container>
            <Wrapper>
                <LeftColumn>
                    <StaticImage
                        quality={100}
                        placeholder="none"
                        alt="Schema evolution options"
                        src="../../../images/schema-evolution-options.png"
                    />
                </LeftColumn>
                <RightColumn>
                    <IconWrapper>
                        <SingleDataflowIcon color="#5072EB" />
                    </IconWrapper>
                    <Title>
                        <span>AUTOMATE </span>
                        <span>DATAOPS</span>
                    </Title>
                    <Description>
                        Use schema inference, evolution, and automation along
                        with a complete CLI and API to implement true agile
                        DataOps that can handle constant change without breaking
                        pipelines.
                    </Description>
                    <Button href={docsPageUrl} target="_blank">
                        See the Docs
                    </Button>
                </RightColumn>
            </Wrapper>
        </Container>
    );
};

export default SectionSeven;
