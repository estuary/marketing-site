import styled from 'styled-components';

export const Container = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 24px;
    border: 1px solid #5072eb4d;
    border-radius: 24px;
    background-color: #0e2443;
    margin-bottom: 0;

    @media (max-width: 1116px) {
        flex-direction: row;
        justify-content: left;
    }

    @media (max-width: 345px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const MetricIconWrapper = styled.div`
    border: 2px solid #2a4589;
    border-radius: 100%;
    padding: 12px;
    height: 80px;
    max-width: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MetricsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;

    @media (max-width: 1116px) {
        align-items: flex-start;
    }

    @media (max-width: 345px) {
        align-items: center;
    }
`;

export const MetricValue = styled.span`
    color: #625eff;
    font-size: 2rem;
    font-weight: 700;
    line-height: 43.2px;
`;

export const MetricLabel = styled.span`
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
`;
