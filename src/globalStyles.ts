import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

/* TODO: Transfer the global styles from style.less to this styled-components file */

type LinkOutlinedProps = {
    theme?: 'light' | 'dark';
};

export const globalMaxWidth = `
  max-width: calc(1280px + 2 * min(10vw,160px));
  
  margin-left: auto;
  margin-right: auto;

  padding-left: calc(min(10vw,160px));
  padding-right: calc(min(10vw,160px));

  @media (max-width: 425px) {
      padding-left: calc(min(10vw,20px));
      padding-right: calc(min(10vw,20px));
  }
`;

export const sectionTopBottomPadding = `
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: 425px) {
      padding-top: 40px;
      padding-bottom: 40px;
  }
`;

export const BaseButtonStyling = `
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 20px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;

  @media (max-width: 425px) {
    font-size: 0.875rem;
  }

  &:hover {
    background-color: #625EFF;
    border-color: #625EFF;
    color: #FFFFFF;
  }

  &:active {
    background-color: #5072EB;
    border-color: #5072EB;
  }

  &:disabled {
    background-color: #D7DCE5;
    border-color: #D7DCE5;
  }
`;

export const BaseButtonFilledStyling = `
  ${BaseButtonStyling}

  background-color: #5072EB;
  border: 2px solid #5072EB;
  color: #FFFFFF;
`;

export const baseButtonPrimaryStyling = (
    theme: 'light' | 'dark' | undefined
) => {
    const lightStyles = css`
        color: #5072eb;
        background-color: #fdfdfe;
        border: 2px solid #5072eb;
    `;

    switch (theme) {
        case 'light':
            return lightStyles;
        case 'dark':
            return css`
                color: #ffffff;
                background-color: transparent;
                border: 2px solid #5072eb;
            `;
        default:
            return lightStyles;
    }
};

export const BaseButtonSecondaryStyling = `
  ${BaseButtonStyling}

  background-color: #FDFDFE;
  border: 2px solid #D0D9F9;
  color: #5072EB;
`;

export const LinkFilled = styled(Link)`
    ${BaseButtonFilledStyling}
`;

export const LinkOutlined = styled(Link)<LinkOutlinedProps>`
    ${(props) => baseButtonPrimaryStyling(props.theme)}
`;

export const ButtonFilled = styled.button`
    ${BaseButtonFilledStyling}
`;

export const ButtonOutlinedPrimary = styled.button<LinkOutlinedProps>`
    ${(props) => baseButtonPrimaryStyling(props.theme)}
`;

export const ButtonOutlinedSecondary = styled.button`
    ${BaseButtonSecondaryStyling}
`;
