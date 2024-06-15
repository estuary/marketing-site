import React from 'react';
import ChevronRightIcon from '../../../../../svgs/chevron-right.svg';
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
    href: string;
    isActive?: boolean;
};

const Card = ({
    title,
    description,
    icon,
    href,
    isActive = false,
}: CardProps) => (
    <Container $isActive={isActive} href={href} target="_blank">
        <IconWrapper $isActive={isActive}>{icon}</IconWrapper>
        <TextWrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </TextWrapper>
        <ChevronRightIcon width={32} color="#FFFFFF" />
    </Container>
);

export default Card;
