import clsx from 'clsx';
import { ReactNode } from 'react';
import { sectionTopBottomPadding } from '../../globalStyles/sections.module.less';
import { wrapper } from './styles.module.less';

interface BackgroundWrapperProps {
    children: ReactNode;
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
            style={{ backgroundColor: 'transparent' }}
        >
            {children}
        </HtmlElementTag>
    );
};

export default BackgroundWrapper;
