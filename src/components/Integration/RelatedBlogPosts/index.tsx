import { getSlugifiedText } from '../../../../shared';
import Container from '../../Container';
import Grid from '../../Grid';
import Card from '../../Grid/Card';
import { sectionTitle } from '../styles.module.less';
import { cardImageContainer } from './styles.module.less';

interface RelatedBlogPostsProps {
    relatedArticles: any[];
    sourceConnectorSlugifiedTitle?: string;
    destConnectorSlugifiedTitle?: string;
}

const RelatedBlogPosts = ({
    relatedArticles,
    sourceConnectorSlugifiedTitle,
    destConnectorSlugifiedTitle,
}: RelatedBlogPostsProps) => {
    return (
        <section>
            <Container isDarkTheme isVertical>
                <h2 className={sectionTitle}>
                    RELATED ARTICLE{relatedArticles.length > 1 ? 'S' : null}
                </h2>
                <Grid>
                    {relatedArticles.map(
                        ({ id, slug, title, tags, ...rest }: any) => (
                            <Card
                                key={id}
                                data={{
                                    ...rest,
                                    id,
                                    title,
                                    slug: `/blog/${slug}`,
                                    tags: tags.filter((tag) =>
                                        [
                                            sourceConnectorSlugifiedTitle,
                                            destConnectorSlugifiedTitle,
                                        ].includes(tag.slug)
                                    ),
                                }}
                                footerTag="Article"
                                linkId={`${getSlugifiedText(title)}-article/related-articles-section/integration-page`}
                                isDarkTheme
                                containerClassName={cardImageContainer}
                                target="_blank"
                            />
                        )
                    )}
                </Grid>
            </Container>
        </section>
    );
};

export default RelatedBlogPosts;
