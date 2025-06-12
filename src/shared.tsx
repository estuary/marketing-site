import { ReactNode } from 'react';
import ReactDOMServer from 'react-dom/server';

const TAG_REGEX = /<[^>]+>/g;
const WHITESPACE_REGEX = /\s+/g;

export const reactNodeToString = (node: ReactNode): string => {
    return ReactDOMServer.renderToStaticMarkup(<div>{node}</div>)
        .replace(TAG_REGEX, ' ')
        .replace(WHITESPACE_REGEX, ' ')
        .trim();
};
