import { useState, useMemo, ChangeEvent } from 'react';
import lunr, { Index } from 'lunr';

export interface UseSearchProps<T> {
    indexJson: string;
    store: T[];
    defaultItems: T[];
    searchIndexFn: (
        index: Index,
        store: Record<string, any>,
        query: string
    ) => T[];
}

export function useSearch<T>({
    indexJson,
    store,
    defaultItems,
    searchIndexFn,
}: UseSearchProps<T>) {
    const index: Index = useMemo(
        () => lunr.Index.load(JSON.parse(indexJson)),
        [indexJson]
    );

    const [query, setQuery] = useState('');

    const results = useMemo(
        () => searchIndexFn(index, store as any, query),
        [query, index, store, searchIndexFn]
    );

    return {
        query,
        handleQueryChange: (evt: ChangeEvent<HTMLInputElement>) =>
            setQuery(evt.target.value),
        results: query.length > 0 ? results : defaultItems,
        noResults: query.length > 0 && results.length < 1,
    };
}
