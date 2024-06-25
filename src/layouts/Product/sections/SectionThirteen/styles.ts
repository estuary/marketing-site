import styled from 'styled-components';
import { globalMaxWidth } from '../../../../globalStyles';

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

    @media (max-width: 768px) {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 33.6px;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: #ffffff;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const Form = styled.form`
    ${globalMaxWidth};
    display: flex;
    align-items: center;
    gap: 60px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
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

export const InputAndButton = styled.div`
    display: flex;
    gap: 24px;
    position: relative;

    @media (max-width: 425px) {
        flex-direction: column;
    }
`;

export const Input = styled.input`
    max-width: 492px;
    min-width: 205px;
    width: 100%;
    height: 56px;
    border: 1px solid #d7dce5;
    border-radius: 4px;
    text-indent: 24px;
    padding-left: 24px;

    &::placeholder {
        color: #47506d;
        line-height: 20px;
    }

    &:focus {
        outline: none;
    }
`;

export const InputIconWrapper = styled.div`
    width: 21px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    padding: 1px;

    @media (max-width: 425px) {
        top: 20.5%;
    }
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
