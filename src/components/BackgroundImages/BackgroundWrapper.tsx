import React from 'react';
import clsx from 'clsx';
import { sectionTopBottomPadding } from '../../globalStyles/wrappers.module.less';
import { wrapper } from './styles.module.less';

interface BackgroundWrapperProps {
    children: React.ReactNode;
    isSection?: boolean;
}

const BackgroundWrapper = ({
    children,
    isSection = false,
}: BackgroundWrapperProps) => {
    const HtmlElementTag = isSection ? 'section' : 'div';

    return (
        <HtmlElementTag
            className={clsx(
                wrapper,
                isSection ? sectionTopBottomPadding : null
            )}
        >
            {children}
        </HtmlElementTag>
    );
};

export default BackgroundWrapper;
