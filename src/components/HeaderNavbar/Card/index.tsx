import React from 'react';
import { Container, Divider, MenuBackgroundDesktop, Wrapper } from './styles';

const HeaderCard = ({ show, children, customRef, ...props }) => {
    return (
        <MenuBackgroundDesktop $show={show}>
            <Wrapper ref={customRef} {...props}>
                <Divider />
                <Container>{children}</Container>
            </Wrapper>
        </MenuBackgroundDesktop>
    );
};

export default HeaderCard;
