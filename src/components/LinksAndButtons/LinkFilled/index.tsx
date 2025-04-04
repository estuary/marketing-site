import clsx from 'clsx';
import { forwardRef, HTMLProps } from 'react';
import { baseButton } from '../styles.module.less';
import { getSlugifiedText } from '../../../../shared';

const LinkFilled = forwardRef<HTMLAnchorElement, HTMLProps<HTMLAnchorElement>>(
    ({ children, className, id, ...props }, ref) => (
        <a
            id={getSlugifiedText(id)}
            ref={ref}
            {...props}
            className={clsx(baseButton, className)}
        >
            {children}
        </a>
    )
);

export default LinkFilled;
