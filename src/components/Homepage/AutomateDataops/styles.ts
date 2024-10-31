import styled from 'styled-components';
import { sectionTopBottomPadding } from '../../../globalStyles';
import { OutboundLinkFilled } from '../../OutboundLink';

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
    margin: 0;
    color: #47506d;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }
`;

export const Button = styled(OutboundLinkFilled)`
    padding: 16px 24px;
    width: fit-content;

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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
