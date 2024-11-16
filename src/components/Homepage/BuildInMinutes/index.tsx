import * as React from 'react';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import FlowDemoVideo from '../../FlowDemoVideo';
import Container from '../../Container';
import { TextWrapper } from '../styles';
import { container } from './styles.module.less';

const BuildInMinutes = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Container isVertical className={container}>
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
