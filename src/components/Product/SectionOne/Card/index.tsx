import React from 'react';
import ChevronRightIcon from '../../../../svgs/chevron-right.svg';
import {
    ChevronIconWrapper,
    Container,
    Description,
    IconWrapper,
    TextWrapper,
    Title,
} from './styles';

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
        <ChevronIconWrapper>
            <ChevronRightIcon width={32} color="#FFFFFF" />
        </ChevronIconWrapper>
    </Container>
);

export default Card;
