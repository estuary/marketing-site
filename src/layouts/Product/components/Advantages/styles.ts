import styled from 'styled-components';
import { globalMaxWidth } from '../../../../globalStyles';

type Theme = {
    $isDarkTheme: boolean;
};

export const Container = styled.section<{ $isImageOnTheLeft: boolean }>`
    ${globalMaxWidth}

    display: flex;
    align-items: center;
    gap: 60px;
    flex-direction: ${(props) =>
        props.$isImageOnTheLeft ? 'row-reverse' : 'row'};

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 40px;
    }
`;

export const IconWrapper = styled.div<Theme>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border: 1px solid;
    border-color: ${(props) => (props.$isDarkTheme ? '#D7DCE526' : '#D7DCE5')};
    border-radius: 8px;
    padding: 18px;
    background-color: ${(props) =>
        props.$isDarkTheme ? '#FFFFFF05' : '#FFFFFF'};

    @media (max-width: 768px) {
        width: 64px;
        height: 64px;
        padding: 12px;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 620px;
`;

export const Title = styled.h2<Theme>`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    margin: 0;
    color: ${(props) => (props.$isDarkTheme ? '#FFFFFF' : '#47506d')};

    @media (max-width: 768px) {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 33.6px;
        margin: 0;
    }

    & > span {
        color: #5072eb;
    }
`;

export const Subtitle = styled.p<Theme>`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: ${(props) => (props.$isDarkTheme ? '#FFFFFF' : '#47506d')};
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const AdvantagesList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
`;

export const ImageWrapper = styled.div`
    max-width: 536px;
    width: 100%;
`;
