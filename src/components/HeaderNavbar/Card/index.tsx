import React from 'react';
import { Container, Divider, MenuBackground, Wrapper } from './styles';

const HeaderCard = ({ show, children, customRef, ...props }) => {
    return (
        <MenuBackground ref={customRef} $show={show}>
            <Wrapper {...props}>
                <Divider />
                <Container>{children}</Container>
            </Wrapper>
        </MenuBackground>
    );
};

export default HeaderCard;
