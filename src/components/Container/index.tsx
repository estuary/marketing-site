import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { container, vertical } from './styles.module.less';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    isVertical?: boolean;
}

const Container = ({ children, className, isVertical }: ContainerProps) => {
    return (
        <div
            className={clsx(container, className, isVertical ? vertical : null)}
        >
            {children}
        </div>
    );
};

export default Container;
