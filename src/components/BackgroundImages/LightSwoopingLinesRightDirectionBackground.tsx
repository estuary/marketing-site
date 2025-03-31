import { HTMLAttributes } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { backgroundImage, fullHeight } from './styles.module.less';
import { lightImgStyle } from './shared';
import BackgroundWrapper from './BackgroundWrapper';

interface LightSwoopingLinesRightDirectionBackgroundProps
    extends HTMLAttributes<HTMLDivElement> {
    loading?: 'eager' | 'lazy';
}

const LightSwoopingLinesRightDirectionBackground = ({
    children,
    className,
    loading,
}: LightSwoopingLinesRightDirectionBackgroundProps) => {
    return (
        <BackgroundWrapper isSection>
            <StaticImage
                alt=""
                src="../../images/swooping-lines-to-the-right.png"
                className={clsx(backgroundImage, fullHeight)}
                placeholder="blurred"
                quality={100}
                imgStyle={lightImgStyle}
                loading={loading}
            />
            <div className={className}>{children}</div>
        </BackgroundWrapper>
    );
};

export default LightSwoopingLinesRightDirectionBackground;
