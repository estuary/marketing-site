import { BaseHTMLAttributes } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { backgroundImage, cdcBackgroundImage } from './styles.module.less';
import BackgroundWrapper from './BackgroundWrapper';

const CdcBackground = ({
    children,
    className,
}: BaseHTMLAttributes<HTMLDivElement>) => {
    return (
        <BackgroundWrapper>
            <StaticImage
                alt=""
                src="../../images/lp-connector/change-data/background.png"
                className={clsx(backgroundImage, cdcBackgroundImage)}
                placeholder="blurred"
                quality={100}
            />
            <div className={className}>{children}</div>
        </BackgroundWrapper>
    );
};

export default CdcBackground;
