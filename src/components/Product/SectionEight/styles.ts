import styled, { css } from 'styled-components';

const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const flexColumnCenter = css`
    ${flexCenter};
    flex-direction: column;
`;

const textStyles = css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 30px;
    color: #47506d;
    text-align: center;
    margin: 0;
`;

export const CaseStudies = styled.div`
    ${flexColumnCenter};
    gap: 18px;
    height: 100%;
`;

export const IconWrapper = styled.div`
    ${flexCenter};
    width: 64px;
    height: 64px;
`;

export const BottomCaseStudies = styled.div`
    display: flex;
    gap: 16px;

    @media (max-width: 425px) {
        flex-direction: column;
    }
`;

const CaseStudyBase = styled.div`
    ${flexColumnCenter};
    padding: 16px;
    gap: 16px;
    border-radius: 24px;
    background-color: #ffffff;

    & > h3 {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 28.8px;
        text-align: center;
        margin: 0;
    }

    & > p {
        ${textStyles};
    }
`;

export const TopCaseStudy = styled(CaseStudyBase)`
    border: 1px solid #e2e8fb;

    & > h3 {
        color: #5072eb;
    }
`;

export const BottomCaseStudy = styled(CaseStudyBase)`
    border: 1px solid #a4b6f4;
    background-color: #5072eb1a;
    flex: 1;

    & > h3 {
        color: #04192b;
    }
`;
