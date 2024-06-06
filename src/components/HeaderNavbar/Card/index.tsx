import { useMediaQuery } from '@mui/material';
import React from 'react';
import { isMobile as isRealMobile } from 'react-device-detect';
import { Container, Divider, MenuBackgroundDesktop, Wrapper } from './styles';

const HeaderCard = ({ show, children, customRef, ...props }) => {
    const isSmallScreen = useMediaQuery('(max-width:1024px)');
    const isMobile = isRealMobile || isSmallScreen;

    if (isMobile) {
        return (
            <Wrapper ref={customRef} {...props}>
                <Divider />
                <Container>{children}</Container>
            </Wrapper>
        );
    }

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
