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

                // TODO spelling alterations - previously we used this setting
                //  but this returned A LOT of stuff that just was not related.
                // Example :
                //  searching "pinecone" would return "pipeline" because it is off by 3 alterations
                // q.term(splitQuery, {
                //     editDistance: Math.min(Math.max(0, term.length - 1), 3),
                // });
            })
            .map((r) => store[r.ref]);
    };
}
