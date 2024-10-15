import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';

export const Wrapper = styled.div`
    ${globalMaxWidth}
    ${sectionTopBottomPadding}

    h2 {
        font-size: 2.5rem;
        font-weight: 600;
        color: #5072eb;
        text-align: center;
        margin-bottom: 60px;
        text-transform: uppercase;

        @media (max-width: 425px) {
            font-size: 1.75rem;
        }
    }
`;
