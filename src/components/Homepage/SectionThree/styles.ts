import styled from 'styled-components';
import { LinkFilled, globalMaxWidth } from '../../../globalStyles';

export const Wrapper = styled.div`
    ${globalMaxWidth}

    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding-bottom: 48px;
`;

export const CaseStudyLogoWrapper = styled.div`
    background-color: #a3a7b5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    max-width: 136px;
    max-height: 136px;
    min-width: 136px;
    min-height: 136px;
    padding: 8px;

    @media (max-width: 768px) {
        max-width: 100px;
        max-height: 100px;
        min-width: 100px;
        min-height: 100px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 72px;
    color: #5072eb;
    margin: 0 0 60px 0;
    text-transform: uppercase;
`;

export const CaseStudyTitle = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    line-height: 43.2px;
    color: #ffffff;
    margin: 0;
    text-align: center;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

export const CaseStudyDescription = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    line-height: normal;
    color: #ffffff;
    margin: 0;
    text-align: center;
    padding: 0 24px;

    @media (min-width: 1630px) {
        min-width: 355px;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const Button = styled(LinkFilled)`
    width: 100%;
    max-width: 275px;
`;
