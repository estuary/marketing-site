import { TextField } from '@mui/material';
import { styled } from 'styled-components';
import { OutboundLink } from '../../../components/OutboundLink';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;

    span {
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 30px;
        color: #04192b;
    }

    @media (max-width: 1150px) {
        margin-bottom: 0;
    }
`;

export const SocialButtonsWrapper = styled.div`
    display: flex;
    gap: 14px;
    flex-wrap: wrap;

    @media (max-width: 1150px) {
        gap: 20px;
    }
`;

const baseSocialButtonStyling = `
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #D7DCE5;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: #FFFFFF;
  cursor: pointer;

  &:hover {
    background-color: #f9fafc;
  }

  @media (max-width: 1150px) {
    width: 48px;
    height: 48px;
  }
`;

export const CopyButton = styled.button<{ $isCopied: boolean }>`
    ${baseSocialButtonStyling}

    transition: background-color, border 300ms ease-in-out;

    background-color: ${(props) => (props.$isCopied ? '#00A99D30' : '#FFFFFF')};
    border-color: ${(props) => (props.$isCopied ? '#00A99D' : '#D7DCE5')};

    &:hover {
        background-color: ${(props) =>
            props.$isCopied ? '#00A99D30' : '#f9fafc'};
        border-color: ${(props) => (props.$isCopied ? '#00A99D' : '#D7DCE5')};
    }
`;

export const SocialLink = styled(OutboundLink)`
    ${baseSocialButtonStyling}
`;

export const FailedCopyInput = styled(TextField)`
    width: 100%;

    .MuiInputBase-input {
        padding: 12px;
    }
`;
