import lunr from 'lunr';
import { SearchBlock } from './shared';

const exactOptions = {
    wildcard: lunr.Query.wildcard.NONE,
    usePipeline: true,
};

const trailingOptions = {
    wildcard: lunr.Query.wildcard.TRAILING,
    usePipeline: true,
};

export const successStoriesSearchBlocks: SearchBlock[] = [
    { fields: ['searchable_tags'], boost: 40, ...exactOptions },
    { fields: ['metaTitle'], boost: 30, ...exactOptions },
    { fields: ['metaDescription'], boost: 30, ...exactOptions },
    { fields: ['title'], boost: 40, ...exactOptions },
    { fields: ['description'], boost: 30, ...exactOptions },
    { fields: ['title', 'slug'], boost: 15, ...trailingOptions },
    { fields: ['linkOneLiner'], boost: 30, ...exactOptions },
    { fields: ['topicsText'], boost: 30, ...exactOptions },
    {
        fields: ['sideContentText', 'aboutDescriptionText', 'bodyText'],
        boost: 10,
        ...trailingOptions,
    },
];

export const blogPostsSearchBlocks: SearchBlock[] = [
    { fields: ['searchable_tags'], boost: 35, ...exactOptions },
    { fields: ['authorsText'], boost: 30, ...exactOptions },
    { fields: ['title'], boost: 40, ...exactOptions },
    { fields: ['description'], boost: 30, ...exactOptions },
    { fields: ['title', 'slug'], boost: 15, ...trailingOptions },
];
