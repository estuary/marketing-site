import React from 'react';

import {
    Container,
    ContainerContent,
    ContainerImage,
    Description,
    Title,
} from './style';

const TheAutomationCard = ({
    title,
    description,
    $reverse = false,
    $reverseDesktop = false,
    children,
}) => {
    return (
        <Container $reverse={$reverse} $reverseDesktop={$reverseDesktop}>
            <ContainerImage>{children}</ContainerImage>
            <ContainerContent>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </ContainerContent>
        </Container>
    );
};

export default TheAutomationCard;
