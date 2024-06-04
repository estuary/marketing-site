import styled from 'styled-components';
import {
    BaseButtonFilledStyling,
    baseButtonPrimaryStyling,
} from '../../globalStyles';

export const AnchorFilled = styled.a`
    ${BaseButtonFilledStyling}
`;

type AnchorOutlinedProps = {
    theme: 'light' | 'dark';
    $fullWidth?: boolean;
};

export const AnchorOutlined = styled.a<AnchorOutlinedProps>`
    ${(props) => baseButtonPrimaryStyling(props.theme)};
    width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
`;
