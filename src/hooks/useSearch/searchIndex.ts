import lunr from 'lunr';
import { SearchBlock } from './shared';

const SPLIT_REGEX = /\s+/;

export function getSearchIndexFn(searchBlocks: SearchBlock[]) {
    return (index: lunr.Index, store: Record<string, any>, query: string) => {
        if (!query) return [];

        // We might want to look into handling case better
        //  but seems if you upper case stuff results don't come back
        const splitQuery = query
            .toLowerCase()
            .split(SPLIT_REGEX)
            .filter((term) => term.length > 0);

        return index
            .query((q: lunr.Query) => {
                for (const block of searchBlocks) {
                    q.term(splitQuery, block);
                }

                q.term(splitQuery, {
                    editDistance: Math.min(Math.max(0, q.term.length - 1), 3),
                });
            })
            .map((r) => store[r.ref]);
    };
}
