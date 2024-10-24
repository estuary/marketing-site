import { Link } from 'gatsby';
import styled from 'styled-components';
import { globalMaxWidth } from '../../../globalStyles';

export const Container = styled.div`
    ${globalMaxWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

export const ImageWrapper = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
    @media (min-width: 1280px) {
        max-width: 50%;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    margin: 0;
    color: #ffffff;

    @media (max-width: 810px) {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 33.6px;
        margin: 0;
    }

    & > span {
        color: #5072eb;
    }
`;

export const Columns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    .column {
        display: flex;
        gap: 16px;
        padding: 35px 24px;
        border-radius: 16px;
        height: 100%;
        @media (max-width: 1280px) {
            flex-direction: column;
        }
    }
`;

export const StreamingEtlColumn = styled.div`
    border: 1px solid #5072eb40;
    background-color: #0a1f38;
`;

export const BatchEltColumn = styled.div`
    border: 1px solid #d7dce540;
    background-color: #04192b;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: auto;

    @media (max-width: 1280px) {
        text-align: center;
    }
`;

const BoxTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 28.8px;
    margin: 0;
`;

export const StreamingEtlTitle = styled(BoxTitle)`
    color: #5072eb;
`;

export const BatchEltTitle = styled(BoxTitle)`
    color: #ffffff;
`;

const BoxDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 30px;
    margin: 0;

    @media (min-width: 1281px) {
        max-width: 260px;
    }
`;

export const StreamingEtlDescription = styled(BoxDescription)`
    color: #ffffff;
`;

export const BatchEltDescription = styled(BoxDescription)`
    color: #d7dce5;
`;

const LogoWrapper = styled(Link)`
    position: absolute;
    width: 18.7%;
    height: 23.5%;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 18.5%;
        height: 23.3%;
    }

    @media (min-width: 769px) {
        &:hover {
            border-radius: 16%;
            border: 2px solid transparent;
            background: linear-gradient(to bottom, #6ed5d6, #7284ff) border-box;
            mask:
                linear-gradient(#fff 0 0) padding-box,
                linear-gradient(#fff 0 0);
            mask-composite: exclude;

            @media (max-width: 1280px) {
                border-radius: 17%;
            }
        }

        &:active {
            background: linear-gradient(to bottom, #6ed5d699, #7284ff99)
                border-box;
        }
    }

    &.left-icon {
        left: 74.6%;

        @media (max-width: 1280px) {
            left: 74.7%;
        }

        @media (max-width: 920px) {
            left: 74.9%;
        }
    }

    &.right-icon {
        right: 74.6%;

        @media (max-width: 1280px) {
            right: 74.7%;
        }
    }
`;

const CenteredLogoWrapper = styled(LogoWrapper)`
    top: 50%;
    transform: translateY(-50%);
`;

const SlightlyOffsetCenteredLogoWrapper = styled(LogoWrapper)`
    top: 50.5%;
    transform: translateY(-50%);
`;

const TopLogoWrapper = styled(LogoWrapper)`
    top: 8.4%;
`;

const BottomLogoWrapper = styled(LogoWrapper)`
    bottom: 8%;
`;

export const SnowflakeStreamingEtlLogoWrapper = styled(CenteredLogoWrapper)``;

export const SnowflakeBatchEltLogoWrapper = styled(
    SlightlyOffsetCenteredLogoWrapper
)``;

export const AmazonRedshiftStreamingEtlLogoWrapper = styled(LogoWrapper)`
    top: 68.5%;
`;

export const ElasticStreamingEtlLogoWrapper = styled(TopLogoWrapper)``;

export const MySQLStreamingEtlLogoWrapper = styled(CenteredLogoWrapper)``;

export const MySQLBatchElt1LogoWrapper = styled(TopLogoWrapper)`
    top: 8.6%;
`;

export const MySQLBatchElt2LogoWrapper = styled(BottomLogoWrapper)``;

export const MySQLBatchElt3LogoWrapper = styled(
    SlightlyOffsetCenteredLogoWrapper
)``;
