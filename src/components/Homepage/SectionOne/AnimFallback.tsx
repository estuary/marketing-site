import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { FlowAnimationPlaceholderContainer } from './styles';

const AnimFallback = () => (
    <FlowAnimationPlaceholderContainer>
        <StaticImage
            placeholder="none"
            alt="estuary logo"
            src="../../../images/hero-anim-placeholder.png"
            layout="constrained"
            loading="eager"
        />
    </FlowAnimationPlaceholderContainer>
);

export default AnimFallback;
