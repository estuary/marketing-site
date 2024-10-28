import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { container, vertical, reverse } from './styles.module.less';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    isVertical?: boolean;
    isReverseColumnOnMobile?: boolean;
}

const Container = ({
    children,
    className,
    isVertical,
    isReverseColumnOnMobile,
}: ContainerProps) => {
    return (
        <div
            className={clsx(
                container,
                className,
                isVertical ? vertical : null,
                isReverseColumnOnMobile ? reverse : null
            )}
        >
            {children}
        </div>
    );
};

export default Container;
