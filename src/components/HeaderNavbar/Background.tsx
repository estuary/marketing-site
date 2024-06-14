import React from 'react';
import { MenuBackground } from './styles';

function HeaderNavBarBackground({ menuOpen }) {
    if (menuOpen) {
        return <MenuBackground />;
    }

    return null;
}

export default HeaderNavBarBackground;
