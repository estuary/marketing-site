import styled from 'styled-components';
import { globalMaxWidth } from '../../../../globalStyles';

export const Container = styled.div`
    ${globalMaxWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    margin: 0;
    color: #5072eb;

    @media (max-width: 768px) {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 33.6px;
        margin: 0;
    }
`;

export const Columns = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const Boxes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: row;
    }

    @media (max-width: 600px) {
        flex-direction: column;

        a {
            width: 100%;
        }
    }
`;

export const GetStartedBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f6f8fe;
    border: 1px solid #a4b6f4;
    border-radius: 16px;
    gap: 24px;
    width: 100%;
    padding: 36px;

    @media (max-width: 1380px) {
        padding: 24px;
        width: fit-content;
    }

    @media (max-width: 1310px) {
        flex-direction: column;
        text-align: center;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ContactUsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fdfdfe;
    border: 1px solid #d7dce5;
    border-radius: 16px;
    gap: 24px;
    width: 100%;
    padding: 36px;

    @media (max-width: 1380px) {
        padding: 24px;
        width: fit-content;
    }

    @media (max-width: 1310px) {
        flex-direction: column;
        text-align: center;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;

    @media (min-width: 769px) {
        max-width: 308px;
    }
`;

export const BoxTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 28.8px;
    color: #47506d;
    margin: 0;
`;

export const BoxDescription = styled.p`
    color: #47506d;
    margin: 0;
    line-height: 30px;
    font-size: 1rem;
    font-weight: 400;
`;

export const ImageWrapper = styled.div`
    max-width: 515px;
`;

export const IconWrapper = styled.div`
    min-width: 20px;
    min-height: 20px;
`;
