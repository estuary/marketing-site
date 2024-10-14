import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';

export const Wrapper = styled.div`
    ${globalMaxWidth}
    ${sectionTopBottomPadding}

    padding-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 425px) {
        padding-right: 0;
    }
`;

export const Title = styled.h2`
    ${globalMaxWidth}

    padding-left: 0;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    color: #5072eb;
    text-transform: uppercase;
    margin: 0;

    span {
        color: #ffffff;
    }

    @media (max-width: 425px) {
        padding-left: 0;
        padding-right: 20px;
        font-size: 1.75rem;
        line-height: 33.6px;
    }
`;

export const Description = styled.p`
    ${globalMaxWidth}

    padding-left: 0;
    width: 100%;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: #ffffff;
    margin: 24px 0 60px 0;
    max-width: 940px;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 1rem;
    }

    @media (max-width: 425px) {
        padding-left: 0;
        padding-right: 20px;
        line-height: 30px;
        margin: 16px 0 40px 0;
    }
`;
