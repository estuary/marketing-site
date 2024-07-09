import { Link } from 'gatsby';
import styled from 'styled-components';
import { globalMaxWidth } from '../../../globalStyles';

export const Container = styled.div`
    ${globalMaxWidth}
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;

    @media (max-width: 840px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const IconsWrapper = styled.div`
    display: flex;
    gap: 24px;
`;

export const IconWrapper = styled.div`
    width: 90px;
    height: 90px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff05;
    border: 1px solid #d7dce526;
    border-radius: 8px;

    @media (max-width: 1280px) {
        width: 72px;
        height: 72px;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    margin: 0;
    color: #ffffff;
    max-width: 600px;

    @media (max-width: 810px) {
        font-size: 2rem;
        font-weight: 700;
        line-height: 38.4px;
        margin: 0;
    }

    @media (max-width: 425px) {
        font-size: 1.75rem;
        line-height: 33.6px;
    }

    & > span {
        color: #5072eb;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    color: #ffffff;
    margin: 0;

    @media (max-width: 810px) {
        font-size: 1rem;
    }
`;

export const TabContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 49px;
`;

export const TabImageWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 4px;

    @media (max-width: 425px) {
        flex-direction: column;
    }
`;

export const Connectors = styled.div<{ $tab: 'analytics' | 'ops' | 'ai' }>`
    position: relative;
    z-index: 2;
    margin-left: ${(props) => (props.$tab === 'analytics' ? '-6%' : '-2%')};

    @media (max-width: 425px) {
        margin: 6% 0 0 0;
    }

    .trio-group-logo {
        top: 50.5%;
        width: 19%;

        @media (max-width: 1024px), (min-width: 425px) {
            height: 45%;
            width: 18.5%;
        }
    }
`;

export const LogoWrapper = styled(Link)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 14.5%;
    height: 43%;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: 1280px) {
        height: 43.4%;
        width: 14.6%;
    }

    @media (max-width: 1024px) {
        height: 43.6%;
    }

    &:hover {
        border-radius: 14%;
        border: 2px solid transparent;
        background: linear-gradient(to bottom, #6ed5d6, #7284ff) border-box;
        mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
        mask-composite: exclude;

        @media (max-width: 425px) {
            border-radius: 18%;
        }
    }

    &:active {
        background: linear-gradient(to bottom, #6ed5d699, #7284ff99) border-box;
    }
`;

export const GoogleBigQueryLogoWrapper = styled(LogoWrapper)`
    right: 73.8%;

    @media (max-width: 900px) {
        right: 74.2%;
    }
`;

export const DatabricksLogoWrapper = styled(LogoWrapper)`
    right: 53.2%;
`;

export const AmazonRedshiftLogoWrapper = styled(LogoWrapper)`
    left: 53.4%;

    @media (max-width: 1280px) {
        left: 53%;
    }

    @media (max-width: 1024px) {
        left: 53%;
    }
`;

export const SnowflakeLogoWrapper = styled(LogoWrapper)`
    left: 74.2%;

    @media (max-width: 1280px) {
        left: 74%;
    }
`;

const trioGroupFirstLogo = `
    right: 67.3%;

    @media (max-width: 1024px), (min-width: 425px) {
        right: 67%;
    }
`;

const trioGroupSecondLogo = `
    right: 40.5%;

    @media (max-width: 840px) {
        right: 41%;
    }
`;

const trioGroupThirdLogo = `
    right: 14.5%;
`;

export const ElasticLogoWrapper = styled(LogoWrapper)`
    ${trioGroupFirstLogo}
`;

export const MongoDBLogoWrapper = styled(LogoWrapper)`
    ${trioGroupSecondLogo}
`;

export const DynamoDBLogoWrapper = styled(LogoWrapper)`
    ${trioGroupThirdLogo}
`;

export const PineconeLogoWrapper = styled(LogoWrapper)`
    ${trioGroupFirstLogo}
`;

export const OpenAiLogoWrapper = styled(LogoWrapper)`
    ${trioGroupSecondLogo}
`;

export const DatabricksAILogoWrapper = styled(LogoWrapper)`
    ${trioGroupThirdLogo}
`;

export const TabFooterText = styled.p`
    color: #ffffff;
    margin: 32px 0 0 0;
    max-width: 397px;
    text-align: center;
    min-height: 100px;
`;

export const TabsWrapper = styled.div`
    height: 100%;
`;
