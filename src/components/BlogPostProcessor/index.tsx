import clsx from 'clsx';

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
