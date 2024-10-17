import styled from 'styled-components';
import { globalMaxWidth } from '../../../globalStyles';

export const Wrapper = styled.div`
    ${globalMaxWidth}

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    color: #5072eb;
    text-transform: uppercase;
    margin: 0;

    span {
        color: #ffffff;
    }
`;

export const Description = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: #ffffff;
    margin: 24px 0 60px 0;
    max-width: 720px;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }

    @media (max-width: 980px) {
        max-width: 480px;
    }
`;
