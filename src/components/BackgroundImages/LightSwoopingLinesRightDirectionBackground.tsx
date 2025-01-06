import { HTMLAttributes } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { backgroundImage, fullHeight } from './styles.module.less';
import { lightImgStyle } from './shared';
import BackgroundWrapper from './BackgroundWrapper';

const LightSwoopingLinesRightDirectionBackground = ({
    children,
    className,
}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <BackgroundWrapper isSection>
            <StaticImage
                alt=""
                src="../../images/swooping-lines-to-the-right.png"
                className={clsx(backgroundImage, fullHeight)}
                placeholder="blurred"
                quality={100}
                imgStyle={lightImgStyle}
            />
            <div className={className}>{children}</div>
        </BackgroundWrapper>
    );
};

export default LightSwoopingLinesRightDirectionBackground;
