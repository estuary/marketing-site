import React from 'react';
import { Container, Divider, Wrapper } from './styles';

const HeaderCard = ({ children, ...props }) => {
    return (
        <Wrapper {...props}>
            <Divider />
            <Container>{children}</Container>
        </Wrapper>
    );
};

export default HeaderCard;
