import React from 'react';
import { wrapper } from './styles.module.less';

interface BackgroundWrapperProps {
    children: React.ReactNode;
}

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
    return <div className={wrapper}>{children}</div>;
};

export default BackgroundWrapper;
