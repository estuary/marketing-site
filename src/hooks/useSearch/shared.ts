export type SearchBlock = {
    fields: string[];
    boost: number;
    wildcard: lunr.Query.wildcard;
    usePipeline: boolean;
};
