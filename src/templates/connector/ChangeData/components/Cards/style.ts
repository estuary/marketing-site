import styled from 'styled-components';

import CdcBackground from '../../../../../components/BackgroundImages/CdcBackground';

interface ContainerCardsProps {
    $reverseDesktop: boolean;
}

export const Container = styled(CdcBackground)`
    display: flex;
    flex-direction: column;
    gap: 120px;

    @media (min-width: 1170px) {
        flex-direction: column-reverse;
    }
`;

export const ContainerCards: any = styled.div<ContainerCardsProps>`
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;

    @media (min-width: 1170px) {
        display: flex;
        flex-direction: ${({ $reverseDesktop }) =>
            $reverseDesktop ? 'column' : 'row'};
        justify-content: space-around;

        > div:nth-child(2) {
            position: relative;
            top: 50px;
        }
    }

    @media (min-width: 1025px) {
        align-items: center;
    }

    @media (max-width: 425px) {
        div {
            border-radius: 24px;
            padding: 12px;
        }
    }
`;
