import styled from 'styled-components';
import { LinkOutlined, globalMaxWidth } from '../../../globalStyles';

export const Wrapper = styled.div`
    ${globalMaxWidth}

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 3.75rem;
    font-weight: 600;
    line-height: 72px;
    color: #5072eb;
    margin: 0 0 60px 0;
    text-transform: uppercase;
`;

export const Cards = styled.div`
    display: flex;
    gap: 60px;

    @media (max-width: 1280px) {
        gap: 40px;
    }

    @media (max-width: 980px) {
        flex-direction: column;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    border: 1px solid #5072eb99;
    border-radius: 24px;
    background-color: #0e2443;
    padding: 41px 24px;
`;

export const CardTitle = styled.h3`
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 43.2px;
    color: #ffffff;
    margin: 0;
    text-align: center;

    @media (max-width: 1280px) {
        font-size: 1.25rem;
    }
`;

export const CardDescription = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: #ffffff;
    margin: 0;
    text-align: center;
    max-width: 260px;

    @media (min-width: 1630px) {
        min-width: 355px;
    }

    @media (max-width: 1280px) {
        font-size: 1rem;
    }

    @media (max-width: 980px) {
        max-width: 480px;
    }
`;

export const Button = styled(LinkOutlined)`
    width: 100%;
`;
