import { Link } from 'gatsby';
import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';

export const Container = styled.section`
  background-color: #FDFDFE;
`;

export const Wrapper = styled.div`
  ${globalMaxWidth}
  ${sectionTopBottomPadding}
    
  display: flex;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse; 
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 48px;
  color: #5072EB;
  margin: 0;
  text-transform: uppercase;

  span {
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

export const Button = styled(Link)`
  border: 2px solid #5072EB;
  border-radius: 4px;
  padding: 16px 24px;
  background-color: #5072EB;
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 12px;
  width: fit-content;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const AdvantagesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`

export const AdvantageWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const Advantage = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 30px;
  color: #47506D;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const RightColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 536px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`

export const IconWrapper = styled.div`
  padding: 18px;
  border: 1px solid #D7DCE5;
  border-radius: 8px;
  width: fit-content;
`