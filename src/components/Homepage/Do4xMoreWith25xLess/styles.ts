import styled from 'styled-components';
import {
    LinkFilled,
    globalMaxWidth,
    sectionTopBottomPadding,
} from '../../../globalStyles';

export const Container = styled.section`
    background-color: #fdfdfe;
`;

export const Wrapper = styled.div`
    ${globalMaxWidth}
    ${sectionTopBottomPadding}
    
  display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: 425px) {
        gap: 40px;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    color: #5072eb;
    margin: 0;
    text-transform: uppercase;

    & span:nth-child(odd) {
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

    @media (max-width: 980px) {
        max-width: 480px;
    }
`;

export const Button = styled(LinkFilled)`
    width: fit-content;
    padding: 16px 24px;

    @media (max-width: 425px) {
        width: 100%;
    }
`;

export const IconWrapper = styled.div`
    padding: 18px;
    border: 1px solid #d7dce5;
    border-radius: 8px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 50%;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const RightColumn = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;
