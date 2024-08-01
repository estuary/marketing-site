import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

interface ContainerCardsProps {
    $reverseDesktop: boolean;
    $isBottomCard?: boolean;
}

export const Container = styled(BackgroundImage)`
    display: flex;
    flex-direction: column;
    gap: 219px;
    background-size: 378px;

    @media (min-width: 1024px) {
        flex-direction: column-reverse;
    }
`;

export const ContainerCards: any = styled.div<ContainerCardsProps>`
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: ${({ $reverseDesktop }) =>
            $reverseDesktop ? 'column' : 'row'};
        justify-content: space-around;

        > div:nth-child(2) {
            position: relative;
            top: 50px;
        }
    }

    @media (max-width: 425px) {
        margin-top: ${({ $isBottomCard }) => ($isBottomCard ? '-200px' : '0')};
    }
`;
