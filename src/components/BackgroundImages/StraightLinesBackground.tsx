import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { backgroundImage, fullHeight } from './styles.module.less';
import { darkImgStyle } from './shared';
import BackgroundWrapper from './BackgroundWrapper';

interface StraightLinesBackground extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    wrapperClassName?: string;
}

const StraightLinesBackground = ({
    children,
    className,
    wrapperClassName,
}: StraightLinesBackground) => {
    return (
        <BackgroundWrapper className={wrapperClassName}>
            <StaticImage
                alt=""
                src="../../images/lp-connector/real-time/Vector.png"
                className={clsx(backgroundImage, fullHeight)}
                placeholder="blurred"
                quality={100}
                imgStyle={darkImgStyle}
            />
            <div className={className}>{children}</div>
        </BackgroundWrapper>
    );
};

export default StraightLinesBackground;
