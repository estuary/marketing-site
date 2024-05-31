import { styled } from 'styled-components';

export const CardItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 12px;
  border: 1px solid transparent;
  border-radius: 16px;
  transition: 200ms ease-in-out;
  width: 100%;

  .header-chevron-icon {
    display: none;
  }

  @media (min-width: 1024px) {
    &:hover {
      border-color: #625EFF;

      .header-chevron-icon {
        display: block;
        color: #625EFF;
      }
    }

    &:active {
      border-color: #625EFF80;

      .header-chevron-icon {
        color: #625EFF80;
      }
    }
  }
`;

export const Title = styled.p`
  color: #ffffff;
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
`

export const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 30px;
  color: #ffffff;
  margin: 0;
  max-width: 280px;
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Icon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 28px;
  max-width: 28px;
  min-height: 28px;
  max-height: 28px;
  border: 1px solid #5072EB80;
  border-radius: 100%;
`

export const Content = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`
