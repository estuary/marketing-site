import styled from 'styled-components';
import { LinkFilled, globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';

export const Container = styled.section`
  background-color: #FDFDFE;
`;

export const Wrapper = styled.div`
  ${globalMaxWidth}
  ${sectionTopBottomPadding}
    
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column; 
    align-items: flex-start;
  }

  @media (max-width: 425px) {
    gap: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 48px;
  color: #5072EB;
  margin: 0;
  text-transform: uppercase;

  & span:nth-child(odd) {
    color: #04192B;
  }

  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }
`

export const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 30px;
  margin: 0;
  color: #47506D;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 980px) {
    max-width: 480px;
  }
`

export const Button = styled(LinkFilled)`
  padding: 16px 24px;
  width: fit-content;

  @media (max-width: 425px) {
    width: 100%;
  }
`

export const IconWrapper = styled.div`
  padding: 18px;
  border: 1px solid #D7DCE5;
  border-radius: 8px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`

export const LeftColumn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
