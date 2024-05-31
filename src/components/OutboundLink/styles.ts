import styled from 'styled-components';
import {
    BaseButtonFilledStyling,
    BaseButtonPrimaryStyling,
} from '../../globalStyles';

export const AnchorFilled = styled.a`
    ${BaseButtonFilledStyling}
`;

type AnchorOutlinedProps = {
    theme: 'light' | 'dark';
};

export const AnchorOutlined = styled.a<AnchorOutlinedProps>`
    ${BaseButtonPrimaryStyling}
    background-color: ${(props) =>
        props.theme === 'dark' ? 'transparent' : 'initial'};
    color: ${(props) => (props.theme === 'dark' ? '#FFFFFF' : 'initial')};
`;
