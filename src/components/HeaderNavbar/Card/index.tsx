import React from 'react';
import { Container, Divider, Wrapper } from './styles';

const HeaderCard = ({ show, children, customRef, ...props }) => {
    return (
        <Wrapper ref={customRef} $show={show} {...props}>
            <Divider />
            <Container>{children}</Container>
        </Wrapper>
    );
};

export default HeaderCard;
