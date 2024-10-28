import React, { ReactNode } from 'react';
import { OutboundLinkFilled } from '../OutboundLink';
import Advantage from './Advantage';
import {
    AdvantagesList,
    ButtonWrapper,
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
                {link ? (
                    <ButtonWrapper>
                        <OutboundLinkFilled href={link.href} target="_blank">
                            {link.title}
                        </OutboundLinkFilled>
                    </ButtonWrapper>
                ) : null}
            </LeftColumn>
            {image ? <RightColumn>{image}</RightColumn> : null}
        </Wrapper>
    );
};

export default Advantages;
