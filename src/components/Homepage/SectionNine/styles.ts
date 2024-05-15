import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import overlayVectorRight from "../../../images/overlay-vector-right.png";

export const Container = styled.section`
  background-color: #04192b;
  background-image: url(${overlayVectorRight});
  background-repeat: no-repeat;
  background-position: center -520px;
  width: 100%;
`;

export const Wrapper = styled.div`
  ${globalMaxWidth}
  ${sectionTopBottomPadding}

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Slides = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`

export const Slide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`

export const Title = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 24px;
  color: #5072EB;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 425px) {
    font-size: 1.75rem;
    line-height: 33.6px;
  }
`

export const Description = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 44.8px;
  color: #ffffff;
  margin: 24px 0 60px 0;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 1rem;
    line-height: 30px;
    font-weight: 500;
  }
`

export const Slider = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const Dots = styled.div`
  display: flex;
  padding: 10px 0;

  & .active {
    background: #5072EB;
  }
`

export const Dot = styled.button`
  border: none;
  width: 12px;
  height: 12px;
  background: #ffffff;
  border-radius: 100%;
  margin: 0 10px;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 10px;
    height: 10px;
  }
`

export const Avatar = styled(GatsbyImage)`
  border-radius: 100%;
`

export const Arrow = styled.button`
  background-color: transparent;
  border: 2px solid #5072EB;
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    border-color: #5072EB80;
  }
`
