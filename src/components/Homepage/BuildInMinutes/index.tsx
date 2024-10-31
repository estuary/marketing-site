import * as React from 'react';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import FlowDemoVideo from '../../FlowDemoVideo';
import Container from '../../Container';
import { TextWrapper } from '../styles';

const BuildInMinutes = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Container isVertical>
                <TextWrapper>
                    <h2>
                        <span>Build </span>
                        in minutes
                    </h2>
                    <p>
                        Use the UI to quickly build end-to-end pipelines using
                        no-code connectors. Estuary Flow does the rest.
                    </p>
                </TextWrapper>
                <FlowDemoVideo />
            </Container>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default BuildInMinutes;
