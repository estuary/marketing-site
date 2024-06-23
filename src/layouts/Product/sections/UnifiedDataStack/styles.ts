import styled from 'styled-components';

export const CaseStudies = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    height: 100%;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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

export const TopCaseStudy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 16px;
    border: 1px solid #e2e8fb;
    border-radius: 24px;
    background-color: #ffffff;

    & > h3 {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 28.8px;
        color: #5072eb;
        text-align: center;
        margin: 0;
    }

    & > p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 30px;
        color: #47506d;
        text-align: center;
        margin: 0;
    }
`;

export const BottomCaseStudy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;
    border: 1px solid #a4b6f4;
    border-radius: 24px;
    background-color: #5072eb1a;
    flex: 1;

    & > h3 {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 28.8px;
        color: #04192b;
        text-align: center;
        margin: 0;
    }

    & > p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 30px;
        color: #47506d;
        text-align: center;
        margin: 0;
    }
`;
