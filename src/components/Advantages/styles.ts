import styled from 'styled-components';
import Container from '../Container';

type Theme = {
    $isDarkTheme: boolean;
};

export const Wrapper = styled(Container)<{ $isImageOnTheLeft: boolean }>`
    flex-direction: ${(props) =>
        props.$isImageOnTheLeft ? 'row-reverse' : 'row'};

    @media (max-width: 1024px) {
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

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 45%;

    @media (max-width: 1024px) {
        width: 100%;
        max-width: 100%;
    }
`;

export const Title = styled.h2<Theme>`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    margin: 0;
    color: ${(props) => (props.$isDarkTheme ? '#FFFFFF' : '#47506d')};
    max-width: 600px;

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

export const RightColumn = styled.div`
    max-width: 536px;
    width: 100%;
`;

export const CtaButtonsWrapper = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;

    @media (max-width: 580px) {
        flex-direction: column;
        gap: 16px;
    }

    a {
        width: 100%;
        max-width: 232px;
        padding: 16px 24px;
        white-space: nowrap;

        @media (max-width: 768px) {
            max-width: 100%;
        }

        @media (max-width: 320px) {
            white-space: normal;
        }
    }
`;
