import styled from 'styled-components';
import { globalMaxWidth } from '../../../globalStyles';
import OpenHubspotModal from '../../HubSpot/OpenModal';
import { OutboundLinkFilled } from '../../OutboundLink';

export const Container = styled.div`
    ${globalMaxWidth};
    background-color: #04192b;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    margin-bottom: 30px;

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
    }
`;

export const Cards = styled.div`
    display: flex;
    margin-top: 40px;
    gap: 20px;

    @media (max-width: 670px) {
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    width: 45%;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 3.75rem;
    line-height: 72px;
    margin: 0;
    color: #5072eb;

    @media (max-width: 768px) {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 48px;
    }

    @media (max-width: 425px) {
        font-weight: 600;
        font-size: 2.25rem;
        line-height: 43.2px;
    }
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 30px;
    color: #ffffff;
    margin: 24px 0;

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 30px;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 6px;

    & button,
    a {
        white-space: nowrap;
    }

    @media (max-width: 1024px) {
        margin: 0;
    }

    @media (max-width: 360px) {
        flex-direction: column;
    }
`;

export const PrimaryButton = styled(OutboundLinkFilled)`
    padding: 16px 24px !important;

    @media (max-width: 1024px) {
        width: 50%;
        padding-left: 0;
        padding-right: 0;
    }

    @media (max-width: 360px) {
        width: 100%;
    }
`;

export const SecondaryButton = styled(OpenHubspotModal)`
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #5072eb;
    padding: 16px 24px;

    @media (max-width: 1024px) {
        width: 50%;
        padding-left: 0;
        padding-right: 0;
    }

    @media (max-width: 360px) {
        width: 100%;
    }
`;
