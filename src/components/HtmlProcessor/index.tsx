import clsx from 'clsx';

export const ProcessedHtml = ({
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
