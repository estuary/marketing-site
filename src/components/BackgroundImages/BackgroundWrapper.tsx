import clsx from 'clsx';
import { ReactNode } from 'react';
import { sectionTopBottomPadding } from '../../globalStyles/sections.module.less';
import { wrapper } from './styles.module.less';

interface BackgroundWrapperProps {
    children: ReactNode;
    isSection?: boolean;
    className?: string;
}

const BackgroundWrapper = ({
    children,
    isSection = false,
    className,
}: BackgroundWrapperProps) => {
    const HtmlElementTag = isSection ? 'section' : 'div';

    return (
        <HtmlElementTag
            className={clsx(
                wrapper,
                isSection ? sectionTopBottomPadding : null,
                className
            )}
            style={{ backgroundColor: 'transparent' }}
        >
            {children}
        </HtmlElementTag>
    );
};

export default BackgroundWrapper;
