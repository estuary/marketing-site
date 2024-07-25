import styled from 'styled-components';

export const Container: any = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    border: 1px solid #d7dce5;
    background-color: #f9fafc;
    border-radius: 100px;
    padding: 20px 40px 20px 20px;

    @media (min-width: 1024px) {
        flex-direction: row;
        padding: 10px 16px;
        max-width: 320px;
    }

    @media (max-width: 425px) {
        border-radius: 40px;
    }
`;

export const ContainerImage = styled.div`
    position: relative;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 100%;
    border: 1px solid #d7dce5;
    min-width: 56px;
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
`;

export const Title = styled.h3`
    font-weight: 700;
    font-size: 16px;
    color: #5072eb;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 14px;
        line-height: 18px;
    }

    @media (min-width: 1024px) {
        padding-right: 24px;
    }
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #47506d;
    margin: 0;

    @media (min-width: 1280px) {
        font-size: 12px;
        line-height: 26px;
    }

    @media (min-width: 1024px) {
        padding-right: 12px;
    }
`;
