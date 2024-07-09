import { Link } from 'gatsby';
import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import CaptureIcon from '../../../svgs/capture.svg';
import RealTimeDelivery from '../../../svgs/real-time-delivery.svg';
import StoreAndTransformIcon from '../../../svgs/store-and-transform.svg';

export const Container = styled.section`
    ${globalMaxWidth}
    ${sectionTopBottomPadding}

  display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 810px) {
        margin: 16px;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 48px;
    color: #47506d;

    @media (max-width: 810px) {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 33.6px;
        margin: 0;
    }

    & span:nth-child(odd) {
        color: #5072eb;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    max-width: 75%;
    margin: 24px 0 0 0;
    color: #04192b;

    @media (max-width: 810px) {
        font-size: 1rem;
    }
`;

export const Steps = styled.div`
    display: flex;
    gap: 54px;

    & > div:nth-child(2) {
        margin-top: 57px;
    }

    & > div:nth-child(3) {
        margin-right: 32px;
    }

    @media (max-width: 1460px) {
        gap: 64px;
    }

    @media (max-width: 1304px) {
        gap: 74px;
    }

    @media (max-width: 1188px) {
        flex-direction: column;
        margin-right: 24px;
        gap: 17px;

        & > div:nth-child(2) {
            margin-top: 0;
        }

        & > div:nth-child(3) {
            margin-right: 0;
        }
    }

    @media (max-width: 810px) {
        margin-right: 32px;
    }

    @media (max-width: 440px) {
        margin-right: 54px;
    }

    @media (max-width: 358px) {
        margin-right: 0;
    }
`;

const lineBaseStyling = `
  content: "";
  position: absolute;
  right: -11px;
  height: 62px;
  width: 4px;
  border-right: 4px dotted #D7DCE5;

  @media (max-width: 1565px) {
    right: -18px;
    height: 78px;
  }

  @media (max-width: 1313px) {
    right: -18px;
    height: 90px;
  }

  @media (max-width: 1188px) {
    right: -8px;
    height: 46px;
  }

  @media (max-width: 829px) {
    right: -12px;
    height: 62px;
  }

  @media (max-width: 503px) {
    right: -20px;
    height: 78px;
  }

  @media (max-width: 438px) {
    right: -22px;
    height: 88px;
  }

  @media (max-width: 425px) {
    right: -20px;
    height: 78px;
  }

  @media (max-width: 390px) {
    right: -22px;
    height: 88px;
  }

  @media (max-width: 358px) {
    display: none;
  }
`;

export const Step = styled.div`
    display: flex;
    gap: 16px;
    width: 33%;
    height: 130px;
    border: 4px dotted #d7dce5;
    border-radius: 16px;
    padding: 16px;
    padding-right: 2px;
    position: relative;
    border-right: none;

    @media (max-width: 1565px) {
        height: 160px;
    }

    @media (max-width: 1313px) {
        height: 185px;
    }

    @media (max-width: 1188px) {
        width: 100%;
        height: 100px;
    }

    @media (max-width: 829px) {
        height: 130px;
    }

    @media (max-width: 503px) {
        height: 160px;
    }

    @media (max-width: 438px) {
        height: 180px;
    }

    @media (max-width: 425px) {
        height: 160px;
    }

    @media (max-width: 390px) {
        height: 180px;
    }

    @media (max-width: 358px) {
        height: fit-content;
        border-right: 4px dotted #d7dce5;
        padding-right: 16px;
    }

    &::after {
        ${lineBaseStyling}
        transform: rotate(-25deg);
        top: 0;
    }

    &::before {
        ${lineBaseStyling}
        transform: rotate(25deg);
        bottom: 0;
    }
`;

export const StepTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 24px;
    color: #47506d;
    text-transform: uppercase;
    margin: 0;

    span {
        color: #625eff;
        margin-right: 16px;

        @media (max-width: 810px) {
            margin-right: 12px;
        }
    }

    @media (max-width: 810px) {
        font-size: 1rem;
        line-height: 19.2px;
    }
`;

export const StepDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 30px;
    color: #47506d;
    margin: 12px 0 0 0;
`;

export const StepIcon = styled.div`
    border: 1px solid #d7dce5;
    border-radius: 8px;
    padding: 12px;
    height: fit-content;
`;

const IconBaseStyling = `
  display: block;
  color: #47506D;
`;

export const StepOneIcon = styled(CaptureIcon)`
    ${IconBaseStyling}
`;

export const StepTwoIcon = styled(StoreAndTransformIcon)`
    ${IconBaseStyling}
`;

export const StepThreeIcon = styled(RealTimeDelivery)`
    ${IconBaseStyling}
`;

export const FlowImageWrapper = styled.div`
    margin: auto;
    position: relative;
`;

export const LogoWrapper = styled(Link)`
    position: absolute;
    top: 6.95%;
    right: 91.85%;
    width: 4.45%;
    height: 8.7%;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 14.5%;
        height: 3.6%;
        top: 2.53%;
        right: 74%;
    }

    &:hover {
        border-radius: 8px;
        border: 2px solid transparent;
        background: linear-gradient(to bottom, #6ed5d6, #7284ff) border-box;
        mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
        mask-composite: exclude;

        @media (max-width: 1280px) {
            border-radius: 14%;
        }
    }

    &:active {
        background: linear-gradient(to bottom, #6ed5d699, #7284ff99) border-box; /*3*/
    }
`;

export const OracleLogoWrapper = styled(LogoWrapper)``;

export const MySQLLogoWrapper = styled(LogoWrapper)`
    right: 85.25%;

    @media (max-width: 768px) {
        right: 55.2%;
    }
`;

export const PostgresLogoWrapper = styled(LogoWrapper)`
    right: 78.75%;

    @media (max-width: 768px) {
        right: 36.6%;
    }
`;

export const AmazonS3LogoWrapper = styled(LogoWrapper)`
    top: 32.5%;
    right: 91.85%;

    @media (max-width: 768px) {
        top: 13.7%;
        right: 73.7%;
    }
`;

export const GoogleStorageLogoWrapper = styled(LogoWrapper)`
    top: 32.5%;
    right: 85.25%;

    @media (max-width: 768px) {
        top: 13.7%;
        right: 55.2%;
    }
`;

export const AzureBlobStorageLogoWrapper = styled(LogoWrapper)`
    top: 32.5%;
    right: 78.75%;

    @media (max-width: 768px) {
        top: 13.7%;
        right: 36.7%;
    }
`;

export const NetsuiteLogoWrapper = styled(LogoWrapper)`
    top: 58.3%;
    right: 91.85%;

    @media (max-width: 768px) {
        top: 24.9%;
        right: 74%;
    }
`;

export const HubspotLogoWrapper = styled(LogoWrapper)`
    top: 58.3%;
    right: 85.25%;

    @media (max-width: 768px) {
        top: 24.9%;
        right: 55.2%;
    }
`;

export const SalesforceLogoWrapper = styled(LogoWrapper)`
    top: 58.3%;
    right: 78.75%;

    @media (max-width: 768px) {
        top: 24.9%;
        right: 36.6%;
    }
`;

export const HttpWebhookLogoWrapper = styled(LogoWrapper)`
    top: 84.37%;
    right: 91.85%;

    @media (max-width: 768px) {
        top: 35.8%;
        right: 73.8%;
    }
`;

export const AmazonKinesisLogoWrapper = styled(LogoWrapper)`
    top: 84.37%;
    right: 85.3%;

    @media (max-width: 768px) {
        top: 35.8%;
        right: 55.3%;
    }
`;

export const ApacheKafkaLogoWrapper = styled(LogoWrapper)`
    top: 84.37%;
    right: 78.7%;

    @media (max-width: 768px) {
        top: 35.85%;
        right: 36.6%;
    }
`;

export const SnowflakeLogoWrapper = styled(LogoWrapper)`
    top: 19%;
    right: 16.85%;

    @media (max-width: 768px) {
        top: 71.7%;
        right: 47.8%;
    }
`;

export const GoogleBigQueryLogoWrapper = styled(LogoWrapper)`
    top: 19%;
    right: 10.25%;

    @media (max-width: 768px) {
        top: 71.7%;
        right: 29.1%;
    }
`;

export const AmazonRedshiftLogoWrapper = styled(LogoWrapper)`
    top: 19%;
    right: 3.7%;

    @media (max-width: 768px) {
        top: 71.7%;
        right: 10.48%;
    }
`;

export const ElasticLogoWrapper = styled(LogoWrapper)`
    top: 45.5%;
    right: 16.85%;

    @media (max-width: 768px) {
        top: 82.78%;
        right: 47.8%;
    }
`;

export const MongoDBLogoWrapper = styled(LogoWrapper)`
    top: 45.5%;
    right: 10.25%;

    @media (max-width: 768px) {
        top: 82.84%;
        right: 29.1%;
    }
`;

export const DynamoDBLogoWrapper = styled(LogoWrapper)`
    top: 45.5%;
    right: 3.7%;

    @media (max-width: 768px) {
        top: 82.8%;
        right: 10.48%;
    }
`;

export const PineconeLogoWrapper = styled(LogoWrapper)`
    top: 72%;
    right: 16.85%;

    @media (max-width: 768px) {
        top: 94%;
        right: 47.8%;
    }
`;

export const OpenAiLogoWrapper = styled(LogoWrapper)`
    top: 72%;
    right: 10.25%;

    @media (max-width: 768px) {
        top: 94%;
        right: 29%;
    }
`;

export const DatabricksLogoWrapper = styled(LogoWrapper)`
    top: 72%;
    right: 3.7%;

    @media (max-width: 768px) {
        top: 94%;
        right: 10.4%;
    }
`;
