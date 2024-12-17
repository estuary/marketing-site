import { BaseHTMLAttributes } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { fullWidth, backgroundImage, fullHeight } from './styles.module.less';

const CirclesBackground = ({
    children,
    className,
}: BaseHTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={fullWidth}>
            <StaticImage
                alt=""
                src="../../images/circles-background.png"
                className={clsx(backgroundImage, fullHeight)}
                placeholder="blurred"
                quality={100}
            />
            <div className={className}>{children}</div>
        </div>
    );
};

export default CirclesBackground;
