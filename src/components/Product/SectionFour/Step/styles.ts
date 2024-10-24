import styled from 'styled-components';

const textColor = `
  color: #47506D;
`;
const iconWrapperSize = '40px';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid #d7dce5;
    border-radius: 24px;
    width: 100%;
    height: 100%;

    @media (min-width: 769px) {
        max-width: 392px;
    }
`;

export const Number = styled.h3`
    ${textColor};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 24px;
    margin: 16px 0 4px 0;
`;

export const Text = styled.p`
    ${textColor};
    font-weight: 400;
    font-size: 1rem;
    line-height: 30px;
    margin: 0;

    a {
        color: #5072eb;
        font-weight: 500;

        &:hover {
            color: #5072eb;
            text-underline-offset: 4px;
            text-decoration: underline;
        }
    }
`;

export const IconWrapper = styled.div`
    min-width: ${iconWrapperSize};
    min-height: ${iconWrapperSize};
    max-width: ${iconWrapperSize};
    max-height: ${iconWrapperSize};
    border-radius: 100%;
    background-color: #5072eb1a;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
