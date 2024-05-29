import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { DefaultWrapperDark } from '../../../../styles/wrappers';
import {
    Button,
    ContainerContent,
    ContainerImage,
    ContainerTopics,
    Title,
    Topic,
    Wrapper,
} from './styles';

const TakeControlBack = () => {
    return (
        <DefaultWrapperDark>
            <Wrapper>
                <ContainerContent>
                    <Title>
                        <span>TAKE BACK CONTROL</span> OF YOUR DATA
                    </Title>
                    <ContainerTopics>
                        <Topic>
                            Build real-time data products with streaming
                            transforms in SQL & Typescript
                        </Topic>
                        <Topic>
                            Connect your own cloud storage for a real-time data
                            lake, for both audit-ability and re-syncs without
                            impacting your source
                        </Topic>
                        <Topic>
                            Push data to your destination using time-travel and
                            history mode
                        </Topic>
                        <Topic>
                            Enforce data contracts or take advantage of
                            automated schema drift
                        </Topic>
                    </ContainerTopics>
                    <Button
                        target="_blank"
                        href="https://dashboard.estuary.dev/register"
                    >
                        Build a Pipeline
                    </Button>
                </ContainerContent>
                <ContainerImage>
                    <StaticImage
                        placeholder="none"
                        alt="take-control-back"
                        src="../../../../images/lp-product/take-control-back.png"
                        layout="constrained"
                    />
                </ContainerImage>
            </Wrapper>
        </DefaultWrapperDark>
    );
};

export default TakeControlBack;
