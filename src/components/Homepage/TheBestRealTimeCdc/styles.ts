import styled from 'styled-components';
import { LinkFilled, sectionTopBottomPadding } from '../../../globalStyles';

export const Wrapper = styled.section`
    ${sectionTopBottomPadding};
    background-color: #fdfdfe;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    color: #5072eb;
    margin: 0;
    text-transform: uppercase;

    span {
        color: #04192b;
    }

    @media (max-width: 1024px) {
        font-size: 2.25rem;
    }
`;

export const Description = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    color: #47506d;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }
`;

export const Link = styled(LinkFilled)`
    padding: 16px 24px;
    margin-top: 12px;
    width: fit-content;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const AdvantagesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
`;

export const AdvantageContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const AdvantageTitle = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: #47506d;
    margin: 0;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const RightColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 536px;

    @media (max-width: 1024px) {
        max-width: 100%;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px;
    border: 1px solid #d7dce5;
    border-radius: 8px;
    width: fit-content;
    background-color: #ffffff;
`;
