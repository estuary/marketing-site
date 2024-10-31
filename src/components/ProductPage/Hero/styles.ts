import styled from 'styled-components';
import { globalMaxWidth } from '../../../globalStyles';

export const Cards = styled.div`
    ${globalMaxWidth};
    display: flex;
    margin-top: 40px;
    gap: 20px;

    @media (max-width: 670px) {
        flex-direction: column;
    }
`;
