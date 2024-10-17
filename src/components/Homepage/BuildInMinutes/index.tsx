import * as React from 'react';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import FlowDemoVideo from '../../FlowDemoVideo';
import { Description, Title, Wrapper } from './styles';

const BuildInMinutes = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Wrapper>
                <Title>
                    <span>Build </span>
                    in minutes
                </Title>
                <Description>
                    Use the UI to quickly build end-to-end pipelines using
                    no-code connectors. Estuary Flow does the rest.
                </Description>
                <FlowDemoVideo />
            </Wrapper>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default BuildInMinutes;
