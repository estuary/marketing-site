import * as React from 'react';

export const ProcessedPost = ({ body }: { body: string }) => {
    // return (JSON.stringify(body,null,4))
    return (
        <div
            className="dynamic-html"
            dangerouslySetInnerHTML={{ __html: body }}
        />
    );
};
