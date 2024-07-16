import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import overlayVectorRight from '../../../images/overlay-vector-right.png';

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
`;
