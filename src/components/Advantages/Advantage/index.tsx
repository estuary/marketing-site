import CheckIcon from '@mui/icons-material/Check';
import React, { ReactNode } from 'react';
import { Container, IconWrapper, Title } from './styles';

type AdvantageProps = {
    title: ReactNode;
    isDarkTheme?: boolean;
};

const Advantage = ({ title, isDarkTheme = false }: AdvantageProps) => {
    return (
        <Container>
            <IconWrapper>
                <CheckIcon fontSize="large" htmlColor="#5072EB" />
            </IconWrapper>
            <Title $isDarkTheme={isDarkTheme}>{title}</Title>
        </Container>
    );
};

export default Advantage;
