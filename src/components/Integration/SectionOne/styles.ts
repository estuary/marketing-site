import styled from 'styled-components';
import { globalMaxWidth, sectionTopBottomPadding } from '../../../globalStyles';
import OpenHubspotModal from '../../HubSpot/OpenModal';
import { OutboundLinkFilled } from '../../OutboundLink';

export const MainContent = styled.div`
    ${globalMaxWidth}

    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 60px;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    max-width: 620px;
`;

export const PreTitleWrapper = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5072eb1a;
    padding: 10px;
    border-radius: 50%;
    max-width: 48px;

    @media (max-width: 768px) {
        max-width: 36px;
    }
`;

export const PreTitle = styled.span`
    font-size: 1.5rem;
    line-height: 28.8px;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 24px;
    }
`;

export const Title = styled.h1`
    font-size: 3.75rem;
    line-height: 72px;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    margin: 28px 0 36px 0;

    @media (max-width: 768px) {
        line-height: 48px;
        font-size: 2.5rem;
        font-weight: 700;
    }

    & > span {
        color: #5072eb;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 24px;

    @media (max-width: 425px) {
        flex-direction: column;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;

    @media (min-width: 426px) {
        max-width: 269px;
    }
`;

export const HelpText = styled.span`
    text-align: center;
    font-size: 0.875rem;
    line-height: 16.8px;
    font-weight: 300;
    color: #d7dce5;
`;

export const PrimaryButton = styled(OutboundLinkFilled)`
    padding: 16px 24px !important;
`;

export const SecondaryButton = styled(OpenHubspotModal)`
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #5072eb;
    padding: 16px 24px;
`;

export const ImageWrapper = styled.div`
    margin: auto;
    position: relative;

    @media (max-width: 768px) {
        display: none;
    }

    .connector-logo {
        position: absolute;
        max-width: 11%;
        max-height: 11%;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`;

export const SourceLogo = styled.div`
    top: 44%;
    left: 12%;
`;

export const DestinationLogo = styled.div`
    top: 42%;
    right: 12%;
`;

export const MetricCardsList = styled.ul`
    ${globalMaxWidth}
    ${sectionTopBottomPadding}

    margin-top: 0;
    margin-bottom: 0;
    padding-top: 80px;
    padding-bottom: 80px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;

    @media (max-width: 1536px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    @media (max-width: 840px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;
