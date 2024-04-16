import styled, { css } from "styled-components"

export const Container = styled.div<{ $hasImage: boolean }>`
  max-width: 36px;
  border-radius: 100%;
  overflow: hidden;

  background-color: #02a99e;
  color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ $hasImage }) =>
    !$hasImage
    && css`
        padding: 12px;
        padding-top: 14px;

        span {
          font-size: 1rem;
        }
      `
  }
`
