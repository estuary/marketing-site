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

  & > .keen-slider {
    height: fit-content !important;
  }
`;

export const Slides = styled.div`
  display: flex;
  align-items: flex-start;

  & > div:first-child {
    img:first-of-type {
      border-radius: 100%;
      overflow: hidden;
    }
  }
`

export const Slide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  margin: 0;
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
  gap: 40px;

  @media (max-width: 425px) {
    gap: 20px;
  }
`

export const Dots = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0;
  width: 100%;

  & .active {
    background: #5072EB;
  }
`

export const DotWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 0.75rem;
  width: 0.75rem;
  max-width: 0.75rem;
  border-radius: 50%;
  margin: 0;
`

export const Dot = styled.button`
  border: none;
  width: 0.75rem;
  max-width: 0.75rem;
  height: 0.75rem;
  background: #ffffff;
  border-radius: 50%;
  cursor: pointer;
`

export const AvatarWrapper = styled.div`
  width: 136px;
  height: 136px;
  background-color: #A3A7B5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 24px;
  overflow: hidden;
`

export const AvatarImg = styled(GatsbyImage)`
  min-width: 110px;
`

export const AvatarSvg = styled.img`
  padding: 16px;
`

export const Arrow = styled.button`
  background-color: transparent;
  border: 2px solid #5072EB;
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    border-color: #5072EB80;
  }
`
