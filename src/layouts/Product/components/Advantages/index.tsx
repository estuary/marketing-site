import React, { ReactNode } from 'react';
import Advantage from './Advantage';
import {
    AdvantagesList,
    Container,
    IconWrapper,
    ImageWrapper,
    Subtitle,
    TextWrapper,
    Title,
} from './styles';

type AdvantagesProps = {
    icon: ReactNode;
    image: ReactNode;
    title: ReactNode;
    subtitle: string;
    advantages: {
        id: number;
        title: ReactNode;
    }[];
    isDarkTheme?: boolean;
    isImageOnTheLeft?: boolean;
};

const Advantages = ({
    icon,
    title,
    subtitle,
    image,
    advantages,
    isDarkTheme = false,
    isImageOnTheLeft = false,
}: AdvantagesProps) => {
    return (
        <Container $isImageOnTheLeft={isImageOnTheLeft}>
            <TextWrapper>
                <IconWrapper $isDarkTheme={isDarkTheme}>{icon}</IconWrapper>
                <Title $isDarkTheme={isDarkTheme}>{title}</Title>
                <Subtitle $isDarkTheme={isDarkTheme}>{subtitle}</Subtitle>
                <AdvantagesList>
                    {advantages.map((advantage) => (
                        <Advantage
                            key={`product-page-advantage-${advantage.id}`}
                            title={advantage.title}
                            isDarkTheme={isDarkTheme}
                        />
                    ))}
                </AdvantagesList>
            </TextWrapper>
            <ImageWrapper>{image}</ImageWrapper>
        </Container>
    );
};

export default Advantages;
