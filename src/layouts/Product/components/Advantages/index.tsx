import React, { ReactNode } from 'react';
import { LinkFilled } from '../../../../globalStyles';
import Advantage from './Advantage';
import {
    AdvantagesList,
    ButtonWrapper,
    Container,
    IconWrapper,
    LeftColumn,
    RightColumn,
    Subtitle,
    Title,
} from './styles';

type AdvantagesProps = {
    icon: ReactNode;
    image: ReactNode;
    title: ReactNode;
    subtitle?: string;
    advantages: {
        id: number;
        title: ReactNode;
    }[];
    link?: {
        title: string;
        href: string;
    };
    isDarkTheme?: boolean;
    isImageOnTheLeft?: boolean;
};

const Advantages = ({
    icon,
    title,
    subtitle,
    image,
    advantages,
    link,
    isDarkTheme = false,
    isImageOnTheLeft = false,
}: AdvantagesProps) => {
    return (
        <Container $isImageOnTheLeft={isImageOnTheLeft}>
            <LeftColumn>
                <IconWrapper $isDarkTheme={isDarkTheme}>{icon}</IconWrapper>
                <Title $isDarkTheme={isDarkTheme}>{title}</Title>
                {subtitle ? (
                    <Subtitle $isDarkTheme={isDarkTheme}>{subtitle}</Subtitle>
                ) : null}
                <AdvantagesList>
                    {advantages.map((advantage) => (
                        <Advantage
                            key={`product-page-advantage-${advantage.id}`}
                            title={advantage.title}
                            isDarkTheme={isDarkTheme}
                        />
                    ))}
                </AdvantagesList>
                {link ? (
                    <ButtonWrapper>
                        <LinkFilled to={link.href} target="_blank">
                            {link.title}
                        </LinkFilled>
                    </ButtonWrapper>
                ) : null}
            </LeftColumn>
            <RightColumn>{image}</RightColumn>
        </Container>
    );
};

export default Advantages;
