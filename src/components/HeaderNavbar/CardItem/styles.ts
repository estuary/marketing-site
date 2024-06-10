import { styled } from 'styled-components';

export const CardItem = styled.div`
    display: flex;
    gap: 16px;
    padding: 12px;
    border: 1px solid transparent;
    border-radius: 16px;
    transition: border 200ms ease-in-out;
    width: 100%;

    .header-chevron-icon {
        display: none;
    }

    @media (max-width: 1024px) {
        padding: 0;
    }

    @media (min-width: 1024px) {
        &:hover {
            border-color: #625eff;

            .header-chevron-icon {
                display: block;
                color: #625eff;
            }
        }

        &:active {
            border-color: #625eff80;

            .header-chevron-icon {
                color: #625eff80;
            }
        }
    }
`;

const textColor = '#ffffff';

export const Title = styled.span`
    color: ${textColor};
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    line-height: 28px;

    @media (max-width: 1024px) {
        font-size: 0.875rem;
    }
`;

export const Description = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 30px;
    color: ${textColor};
    margin: 0;
    max-width: 280px;

    @media (max-width: 1024px) {
        font-size: 0.75rem;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Icon = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    min-width: 28px;
    height: 28px;
    border: 1px solid #5072eb80;
    border-radius: 100%;
`;

export const Content = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
    padding: 12px 0;

    @media (max-width: 768px) {
        padding: 8px 0 0;
    }

    @media (max-height: 1024px) {
        padding: 0;
    }
`;

export const CardTitle = styled.span`
    color: #a4b6f4b2;
    font-size: 1rem;
    line-height: 19.2px;
    margin: 0 0 16px 0;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 0.875rem;
        margin-top: 8px;
    }
`;
