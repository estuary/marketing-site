import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { backgroundImage, fullHeight } from './styles.module.less';
import { backgroundColors } from './shared';
import BackgroundWrapper from './BackgroundWrapper';

const LightSwoopingLinesRightDirectionBackground = ({
    children,
    className,
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <BackgroundWrapper isSection>
            <StaticImage
                alt=""
                src="../../images/swooping-lines-to-the-right.png"
                className={clsx(backgroundImage, fullHeight)}
                placeholder="blurred"
                quality={100}
                backgroundColor={backgroundColors.light}
            />
            <div className={className}>{children}</div>
        </BackgroundWrapper>
    );
};

export default LightSwoopingLinesRightDirectionBackground;
