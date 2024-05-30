import { styled } from 'styled-components';
import { globalMaxWidth } from '../../../globalStyles';

interface ContainerProps {
  show?: boolean;
}

export const Wrapper = styled.div<ContainerProps>`
  width: 100%;
  background-color: #04192B;
  position: fixed;
  top: 116px;
  z-index: 10;
  display: ${(props) => (props.show ? 'flex' : 'none')};;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 7px 15px 7px rgba(0, 0, 0, 0.07);
`;

export const Container = styled.div`
  ${globalMaxWidth};

  font-family: 'Inter', sans-serif;

  display: flex;
  justify-content: space-between;
  gap: 38px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #04192B;
  width: 100%;
  
  .card-title {
    color: #A4B6F4B2;
    font-size: 1rem;
    line-height: 19.2px;
    margin: 0 0 16px 0;
    font-weight: 600;
  }

  .content {
    display: flex;
    flex-direction: column;
    min-width: max-content;
  }

  .container-image {
    margin-top: 10px;
  }

  .cta-button {
    font-family: 'Inter', sans-serif;
    font-size: 12px;

    display: block;
    width: max-content;
    margin: 0 auto;
    margin-top: 14px;
    padding: 7px 45px;
  }

  .card-item {
    display: flex;
    gap: 16px;
    padding: 12px;

    .title {
      color: #ffffff;
      margin: 0;
      font-size: 16px;
      font-weight: 700;
      line-height: 28px;
    }

    .description {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 30px;
      color: #ffffff;
      margin: 0;
      max-width: 280px;
    }

    .icon {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    @media (min-width: 1024px) {
      &:hover {
        border-radius: 2px;
        background: #f8f8f8;

        .title {
          color: #ffffff;
        }
      }
    }
  }
`;

export const Divider = styled.div`
  ${globalMaxWidth};

  background-clip: content-box;
  background-color: #1B3465;
  width: 100%;
  height: 1px;
`
