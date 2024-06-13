import React from 'react';

import {
    Container,
    Description,
    IconWrapper,
    TextWrapper,
    Title,
} from '../Card/style';

type CardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    isActive?: boolean;
};

const Card = ({ title, description, icon, isActive = false }: CardProps) => (
    <Container $isActive={isActive}>
        <IconWrapper>{icon}</IconWrapper>
        <TextWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </TextWrapper>
    </Container>
);

export default Card;
