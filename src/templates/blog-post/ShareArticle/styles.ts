import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;

    span {
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 30px;
        color: #04192b;
    }

    @media (max-width: 1150px) {
        margin-bottom: 0;
    }
`;

export const SocialButtonsWrapper = styled.div`
    display: flex;
    gap: 14px;
    flex-wrap: wrap;

    @media (max-width: 1150px) {
        gap: 20px;
    }
`;

export const FailedCopyInput = styled(TextField)`
    width: 100%;

    .MuiInputBase-input {
        padding: 12px;
    }
`;
