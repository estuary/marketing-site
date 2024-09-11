import styled, { css } from 'styled-components';

export const Container = styled.div<{ $hasImage: boolean; $imgSize?: string }>`
    border-radius: 100%;
    overflow: hidden;
    background-color: #02a99e;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $imgSize }) => $imgSize};
    height: ${({ $imgSize }) => $imgSize};

    ${({ $hasImage }) =>
        !$hasImage &&
        css`
            padding: 12px;
            padding-top: 14px;

            span {
                font-size: 1rem;
                color: #ffffff !important;
            }
        `}

    img {
        width: ${({ $imgSize }) => $imgSize};
        height: ${({ $imgSize }) => $imgSize};
    }
`;
