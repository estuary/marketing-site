import styled from 'styled-components';

export const ContainerIcon = styled.div`
    padding: 16px;
    border: 1px solid #5072eb80;
    border-radius: 8px;
    background-color: #ffffff;
`;

export const BreadcrumbsWrapper = styled.div`
    max-width: 1580px;
    margin: auto;
    padding: 40px 90px;

    @media (max-width: 1280px) {
        padding: 20px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
