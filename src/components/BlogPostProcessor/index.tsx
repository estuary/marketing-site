import clsx from 'clsx';
import * as React from 'react';

export const ProcessedPost = ({
    body,
    className,
}: {
    body: string;
    className?: string;
}) => {
    return (
        <div
            className={clsx('dynamic-html', className)}
            dangerouslySetInnerHTML={{ __html: body }}
        />
    );
};
