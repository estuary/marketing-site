import React, { ReactNode } from 'react';
import { Container, IconWrapper, Title } from './styles';

type KeyFeatureProps = {
    keyFeature: string;
    icon: ReactNode;
    isReversed?: boolean;
};

const KeyFeature = ({
    keyFeature,
    icon,
    isReversed = false,
}: KeyFeatureProps) => {
    return (
        <Container $isReversed={isReversed}>
            <IconWrapper>{icon}</IconWrapper>
            <Title>{keyFeature}</Title>
        </Container>
    );
};

export default KeyFeature;
