import styled from 'styled-components';
import OpenHubspotModal from '../../../../components/HubSpot/OpenModal';
import { OutboundLinkFilled } from '../../../../components/OutboundLink';
import { globalMaxWidth } from '../../../../globalStyles';

export const Container = styled.div`
    ${globalMaxWidth};
    background-color: #04192b;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    margin-bottom: 60px;
`;

export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const ImageContainer = styled.div`
    width: 45%;
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
`;

export const Description = styled.p`
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 30px;
    color: #ffffff;
    margin: 24px 0;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 16px;

    & button,
    a {
        white-space: nowrap;
    }

    @media (max-width: 810px) {
        margin: 0;
    }
`;

export const PrimaryButton = styled(OutboundLinkFilled)`
    padding: 16px 24px !important;

    @media (max-width: 810px) {
        width: 50%;
        padding-left: 0;
        padding-right: 0;
    }
`;

export const SecondaryButton = styled(OpenHubspotModal)`
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #5072eb;
    padding: 16px 24px;

    @media (max-width: 810px) {
        width: 50%;
        padding-left: 0;
        padding-right: 0;
    }
`;
