import React, { ReactNode } from 'react';
import Advantage from './Advantage';
import {
    AdvantagesList,
    CtaButtonsWrapper,
    Wrapper,
    IconWrapper,
    LeftColumn,
    RightColumn,
    Subtitle,
    Title,
} from './styles';

type AdvantagesProps = {
    icon: ReactNode;
    image?: ReactNode;
    title: ReactNode;
    subtitle?: string;
    advantages?: {
        id?: number;
        title: ReactNode;
    }[];
    ctaButtons?: ReactNode;
    isDarkTheme?: boolean;
    isImageOnTheLeft?: boolean;
};

const Advantages = ({
    icon,
    title,
    subtitle,
    image,
    advantages,
    ctaButtons,
    isDarkTheme = false,
    isImageOnTheLeft = false,
}: AdvantagesProps) => {
    return (
        <Wrapper $isImageOnTheLeft={isImageOnTheLeft}>
            <LeftColumn>
                <IconWrapper $isDarkTheme={isDarkTheme}>{icon}</IconWrapper>
                <Title $isDarkTheme={isDarkTheme}>{title}</Title>
                {subtitle ? (
                    <Subtitle $isDarkTheme={isDarkTheme}>{subtitle}</Subtitle>
                ) : null}
                {advantages ? (
                    <AdvantagesList>
                        {advantages.map((advantage, index) => (
                            <Advantage
                                key={`estuary-flow-advantage-${advantage.id ?? index}`}
                                title={advantage.title}
                                isDarkTheme={isDarkTheme}
                            />
                        ))}
                    </AdvantagesList>
                ) : null}
                <CtaButtonsWrapper>{ctaButtons}</CtaButtonsWrapper>
            </LeftColumn>
            {image ? <RightColumn>{image}</RightColumn> : null}
        </Wrapper>
    );
};

export default Advantages;
