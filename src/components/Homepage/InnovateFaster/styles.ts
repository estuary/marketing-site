import styled from 'styled-components';
import { globalMaxWidth } from '../../../globalStyles';
import Container from '../../Container';

// TODO: Remove these !important when replacing styled-compoents with a Less CSS module
export const Wrapper = styled(Container)`
    padding-right: 0 !important;

    @media (max-width: 425px) {
        padding-right: 0 !important;
    }

    h2 {
        ${globalMaxWidth}
        padding-left: 0;

        @media (max-width: 425px) {
            padding-left: 0;
            padding-right: 20px;
            font-size: 1.75rem;
        }
    }

    p {
        ${globalMaxWidth}

        padding-left: 0;
        width: 100%;
        margin: 0;
        text-align: center;

        @media (max-width: 425px) {
            padding-left: 0;
            padding-right: 20px;
        }
    }
`;
