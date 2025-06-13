import { ReactNode } from 'react';
import ReactDOMServer from 'react-dom/server';
import { htmlToText } from 'html-to-text';

export const reactNodeToParagraphs = (node: ReactNode): string => {
    const rawParagraphs = htmlToText(
        ReactDOMServer.renderToStaticMarkup(<div>{node}</div>),
        {
            wordwrap: false,
            baseElements: { selectors: ['p'] },
            selectors: [{ selector: 'a', format: 'inline' }],
            preserveNewlines: true,
        }
    );

    return rawParagraphs
        .split(/\n{2,}/)
        .map((p: string) => p.trim())
        .filter(Boolean)
        .join('\n\n');
};
