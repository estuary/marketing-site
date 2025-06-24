import Card from '../Grid/Card';
import Grid from '../Grid';
import { getSlugifiedText } from '../../../shared';
import { container } from './styles.module.less';

const orderByUpdateDate = (a, b) =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();

const RelatedArticles = ({ relatedPosts }) => {
    if (!relatedPosts || relatedPosts.length < 1) {
        return null;
    }

    return (
        <Grid className={container}>
            {relatedPosts
                .sort(orderByUpdateDate)
                .map(({ id, slug, title, ...rest }) => (
                    <Card
                        key={id}
                        data={{ ...rest, id, title, slug: `/blog/${slug}` }}
                        footerTag="Article"
                        linkId={`${getSlugifiedText(title)}-related-article/blog-post-page`}
                        target="_blank"
                    />
                ))}
        </Grid>
    );
};

export default RelatedArticles;
