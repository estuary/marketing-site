import clsx from 'clsx';
import { forwardRef, HTMLProps } from 'react';
import { baseButton, secondaryButton } from '../styles.module.less';
import { getSlugifiedText } from '../../../../shared';
import { CustomProps } from '../shared';

const LinkFilled = forwardRef<
    HTMLAnchorElement,
    HTMLProps<HTMLAnchorElement> & CustomProps
>(({ children, className, id, variant = 'primary', ...props }, ref) => (
    <a
        id={getSlugifiedText(id)}
        ref={ref}
        {...props}
        className={clsx(
            baseButton,
            variant === 'secondary' ? secondaryButton : null,
            className
        )}
    >
        {children}
    </a>
));

export default LinkFilled;
