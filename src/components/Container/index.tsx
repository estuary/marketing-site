import { ReactNode } from 'react';
import clsx from 'clsx';
import { container, vertical, reverse, lightText } from './styles.module.less';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    isVertical?: boolean;
    isReverseColumnOnMobile?: boolean;
    isDarkTheme?: boolean;
}

const Container = ({
    children,
    className,
    isVertical,
    isReverseColumnOnMobile,
    isDarkTheme,
}: ContainerProps) => {
    return (
        <div
            className={clsx(
                container,
                className,
                isVertical ? vertical : null,
                isReverseColumnOnMobile ? reverse : null,
                isDarkTheme ? lightText : null
            )}
        >
            {children}
        </div>
    );
};

export default Container;
