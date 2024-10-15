import styled from 'styled-components';

import { OutboundLinkFilled } from '../../../components/OutboundLink';

import StraightLinesBackground from '../../../components/BackgroundImages/StraightLinesBackground';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';

export const Wrapper = styled.section`
    ${sectionTopBottomPadding}
    ${globalMaxWidth}

    .background {
        overflow: hidden;
    }
`;

export const ContainerWrapper = styled.div`
    border-radius: 24px;
    overflow: hidden;
`;

export const Container = styled(StraightLinesBackground)`
    padding: 40px;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 24px;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        min-height: 400px;
    }

    @media (min-width: 1280px) {
        padding: 48px 90px;
    }
`;

export const ContainerImage = styled.div`
    position: relative;
    flex: 1;
    max-width: 335px;
    margin: 0 auto;
    margin-bottom: 40px;

    @media (min-width: 1024px) {
        max-width: 100%;

        > div {
            margin-left: 60px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    flex: 1;
`;

export const Title = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    margin: 0;
    color: #fff;

    span {
        color: #5072eb;
    }

    @media (min-width: 1280px) {
        font-size: 60px;
        line-height: 72px;
    }
`;

export const Button = styled(OutboundLinkFilled)`
    width: 100%;

    @media (min-width: 1280px) {
        width: 189px;
    }
`;
