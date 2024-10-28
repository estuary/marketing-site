import * as React from 'react';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import MainConnectors from '../../MainConnectors';
import { TextWrapper } from '../styles';
import { Wrapper } from './styles';

const InnovateFaster = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Wrapper isVertical>
                <TextWrapper>
                    <h2>INNOVATE FASTER</h2>
                    <p>
                        Innovate faster with a single data pipeline that
                        decouples sources and destinations so you can share data
                        across analytics, apps, and AI, and add or change
                        systems, all without impacting others.
                    </p>
                </TextWrapper>
                <MainConnectors />
            </Wrapper>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default InnovateFaster;
