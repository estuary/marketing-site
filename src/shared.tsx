import { ReactNode } from 'react';
import ReactDOMServer from 'react-dom/server';
import { htmlToText } from 'html-to-text';

const WHITESPACE_REGEX = /\s+/g;

export const reactNodeToString = (node: ReactNode): string => {
    return htmlToText(ReactDOMServer.renderToStaticMarkup(<div>{node}</div>), {
        wordwrap: false,
        selectors: [{ selector: 'img', format: 'skip' }],
    })
        .replace(WHITESPACE_REGEX, ' ')
        .trim();
};
