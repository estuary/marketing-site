import styled from 'styled-components';
import {
    LinkOutlined,
    globalMaxWidth,
    sectionTopBottomPadding,
} from '../../../globalStyles';

export const Wrapper = styled.div`
    ${globalMaxWidth}
    ${sectionTopBottomPadding}

    display: flex;
    flex-direction: column;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    border: 1px solid #5072eb99;
    border-radius: 24px;
    background-color: #0e2443;
    padding: 42px 24px;
    max-width: 30%;
    width: 100%;
    min-height: 420px;

    @media (max-width: 960px) {
        max-width: 100%;
        min-height: 200px;
    }
`;

export const Cards = styled.div`
    display: flex;
    gap: 32px;
    justify-content: center;
    padding-bottom: 48px;

    @media (max-width: 1280px) {
        gap: 40px;
    }

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const CaseStudyLogoWrapper = styled.div`
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    max-width: 160px;
    max-height: 80px;
    min-width: 160px;
    min-height: 80px;
    padding: 8px;

    @media (max-width: 768px) {
        max-width: 100px;
        max-height: 60px;
        min-width: 100px;
        min-height: 60px;
    }
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 72px;
    color: #5072eb;
    margin: 0 0 60px 0;
    text-transform: uppercase;
`;

export const CaseStudyDescription = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: #ffffff;
    margin: 0;
    text-align: center;

    @media (max-width: 1280px) {
        font-size: 1rem;
    }

    @media (max-width: 980px) {
        max-width: 480px;
    }
`;

export const Button = styled(LinkOutlined)`
    width: 100%;
    background-color: transparent;
    color: #ffffff;
`;
