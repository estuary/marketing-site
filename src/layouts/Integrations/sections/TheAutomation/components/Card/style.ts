import styled from 'styled-components';

export const Container: any = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }: any) => ($reverse ? 'row-reverse' : 'row')};
  gap: 16px;
  align-items: center;
  border: 1px solid #d7dce5;
  background-color: #f9fafc;
  border-radius: 100px;
  padding: ${({ $reverse }: any) => ($reverse ? '20px 20px 20px 40px' : '20px 40px 20px 20px')};

  @media (min-width: 1024px) {
    flex-direction: ${({ $reverseDesktop }: any) => ($reverseDesktop ? 'row-reverse' : 'row')};
    padding: ${({ $reverseDesktop }: any) => ($reverseDesktop ? '16px 16px 16px 40px' : '16px 40px 16px 16px')};
    max-width: 450px;
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  width: 63px;

  @media (min-width: 1024px) {
    width: 80px;
  }

  @media (min-width: 1280px) {
    width: 126px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 16px;
  color: #5072eb;
  margin: 0;

  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #47506d;
  margin: 0;

  @media (min-width: 1280px) {
    font-size: 16px;
  }
`;
