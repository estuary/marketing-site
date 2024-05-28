import styled from 'styled-components';
import Vector from '../images/lp-connector/hero/Vector.png';
import { sectionTopBottomPadding } from '../globalStyles';

// TODO (use SVG) - we could use the SVG `images/blog-post-background.svg` to save some
//  size on load
export const SwoopingLinesBackground = styled.section`
  ${sectionTopBottomPadding}

  background-color: #f9fafc;

  @media (min-width: 1024px) {
    background-image: url(${Vector});
    background-size: cover;
    background-position: top -32px right;
    background-repeat: no-repeat;
  }
`;
