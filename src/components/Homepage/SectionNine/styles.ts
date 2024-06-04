import { GatsbyImage } from 'gatsby-plugin-image';
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

export const Slide = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    margin: 0;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 24px;
    color: #5072eb;
    text-transform: uppercase;
    margin: 0;

    @media (max-width: 425px) {
        font-size: 1.75rem;
        line-height: 33.6px;
    }
`;

export const Description = styled.p`
    font-size: 2rem;
    font-weight: 300;
    line-height: 44.8px;
    color: #ffffff;
    margin: 24px 0 60px 0;
    text-align: center;

    @media (max-width: 425px) {
        font-size: 1rem;
        line-height: 30px;
        font-weight: 500;
    }
`;

export const AvatarWrapper = styled.div`
    width: 136px;
    height: 136px;
    background-color: #a3a7b5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    padding: 24px;
    overflow: hidden;
`;

export const AvatarImg = styled(GatsbyImage)<{
    $isSeattleDataGuyLogo?: boolean;
}>`
    min-width: 110px;
    border-radius: ${({ $isSeattleDataGuyLogo }) =>
        $isSeattleDataGuyLogo ? '100%' : '0'};
`;

export const AvatarSvg = styled.img`
    padding: 16px;
`;
