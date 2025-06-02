import { useState, useMemo, ChangeEvent } from 'react';
import lunr, { Index } from 'lunr';
import { searchIndex } from '../../shared';

export interface UseSearchProps {
    indexJson: string;
    store: string[];
    defaultItems: any[];
}

export const useSearch = ({
    indexJson,
    store,
    defaultItems,
}: UseSearchProps) => {
    const index: Index = useMemo(
        () => lunr.Index.load(JSON.parse(indexJson)),
        [indexJson]
    );

    const [query, setQuery] = useState('');

    const results = useMemo(
        () => searchIndex(index, store, query),
        [query, index, store]
    );

    return {
        query,
        handleQueryChange: (evt: ChangeEvent<HTMLInputElement>) =>
            setQuery(evt.target.value),
        results: query.length > 0 ? results : defaultItems,
        noResults: query.length > 0 && results.length < 1,
    };
};
