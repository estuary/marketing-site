import Card from '../Grid/Card';
import Grid from '../Grid';
import { getSlugifiedText } from '../../../shared';

interface RelatedArticlesProps {
    posts: any;
}

const RelatedArticles = ({ posts }: RelatedArticlesProps) => {
    return (
        <Grid>
            {posts?.nodes?.map(({ id, slug, title, ...rest }: any) => (
                <Card
                    key={id}
                    data={{ ...rest, id, title, slug: `/blog/${slug}` }}
                    footerTag="Article"
                    linkId={`${getSlugifiedText(title)}-related-article/blog-post-page`}
                />
            ))}
        </Grid>
    );
};

export default RelatedArticles;
