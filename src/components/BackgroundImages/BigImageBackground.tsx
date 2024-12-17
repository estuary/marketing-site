import { BaseHTMLAttributes } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { backgroundImage, bigVector } from './styles.module.less';
import BackgroundWrapper from './BackgroundWrapper';

const BigImageBackground = ({
    children,
    className,
}: BaseHTMLAttributes<HTMLDivElement>) => {
    return (
        <BackgroundWrapper>
            <StaticImage
                alt=""
                src="../../images/blogs-bg.png"
                className={clsx(backgroundImage, bigVector)}
                placeholder="blurred"
                quality={100}
            />
            <div className={className}>{children}</div>
        </BackgroundWrapper>
    );
};

export default BigImageBackground;
