import styled from 'styled-components';

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    margin: 0;
    color: #ffffff;

    @media (max-width: 768px) {
        font-size: 2rem;
        font-weight: 700;
        line-height: 38.4px;
        margin: 0;
    }
`;

export const FormLabel = styled.label`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: #ffffff;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const FormFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`;

export const ImageWrapper = styled.div`
    max-width: 536px;
    width: 100%;
`;

export const IconWrapper = styled.div`
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #d7dce526;
    border-radius: 8px;
    background-color: #ffffff05;
    padding: 20px;

    @media (max-width: 425px) {
        width: 72px;
        height: 72px;
    }
`;

export const TermsAndConditions = styled.p`
    margin: 0;
    color: #ffffff;

    & > a {
        color: #5072eb;

        &:hover {
            text-underline-offset: 4px;
            text-decoration: underline;
        }
    }
`;
