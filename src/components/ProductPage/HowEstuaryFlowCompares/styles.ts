import styled from 'styled-components';

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    margin: 0;
    color: #04192b;

    @media (max-width: 810px) {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 33.6px;
        margin: 0;
    }

    & > span {
        color: #5072eb;
    }
`;

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

export const TableTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: #47506d;
    margin: 0;
`;
