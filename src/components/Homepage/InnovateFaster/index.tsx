import * as React from 'react';
import DarkSwoopingLinesLeftDirectionBackground from '../../BackgroundImages/DarkSwoopingLinesLeftDirectionBackground';
import MainConnectors from '../../MainConnectors';
import { Description, Title, Wrapper } from './styles';

const InnovateFaster = () => {
    return (
        <DarkSwoopingLinesLeftDirectionBackground>
            <Wrapper>
                <Title>INNOVATE FASTER</Title>
                <Description>
                    Innovate faster with a single data pipeline that decouples
                    sources and destinations so you can share data across
                    analytics, apps, and AI, and add or change systems, all
                    without impacting others.
                </Description>
                <MainConnectors />
            </Wrapper>
        </DarkSwoopingLinesLeftDirectionBackground>
    );
};

export default InnovateFaster;
