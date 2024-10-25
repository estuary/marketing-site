import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
    & > p,
    li {
        color: #ffffff;
        max-width: 252px;
        height: 100%;
        font-size: 1rem;
        font-weight: 400;
        line-height: 120%;
        margin-top: 0;
        margin-bottom: 0;

        @media (max-width: 580px) {
            max-width: 100%;
        }
    }

    & > ul {
        margin-top: 0;
        margin-bottom: 0;
    }
`;
