import styled from 'styled-components';

import { globalMaxWidth } from '../../../globalStyles';

export const Container = styled.div`
    ${globalMaxWidth}
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    &.text {
        color: #47506d;
        text-align: center;
        margin: 0;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;

    @media (max-width: 810px) {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 33.6px;
    }

    & > span {
        color: #5072eb;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    margin-top: 24px;

    @media (max-width: 810px) {
        font-size: 1rem;
    }
`;

export const Steps = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const VideoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
