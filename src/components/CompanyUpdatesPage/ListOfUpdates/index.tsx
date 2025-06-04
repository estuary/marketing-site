import { graphql, useStaticQuery } from 'gatsby';
import Container from '../../Container';
import VerticalList from '../../VerticalList';
import { container } from './styles.module.less';

const ListOfUpdates = () => {
    const {
        allStrapiCompanyUpdatePost: { nodes: allCompanyUpdatePosts },
    } = useStaticQuery(graphql`
        query GetCompanyUpdatePosts {
            allStrapiCompanyUpdatePost(
                sort: { publishedAt: DESC }
                filter: { publishedAt: { ne: null } }
            ) {
                nodes {
                    id
                    title
                    publishedAt(formatString: "MMMM D, YYYY")
                    postedDate: updatedAt(formatString: "MMMM D, YYYY")
                    description
                    slug
                    picture: hero {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                                metaImg: gatsbyImageData(
                                    layout: FIXED
                                    width: 500
                                )
                            }
                        }
                        alternativeText
                    }
                }
            }
        }
    `);

    const companyUpdatePostsWithPrefixedSlugs = allCompanyUpdatePosts.map(
        (post) => ({
            ...post,
            slug: `company-updates/${post.slug}/`,
        })
    );

    return (
        <section>
            <Container isVertical className={container}>
                <h2>The latest product updates</h2>
                <VerticalList
                    items={companyUpdatePostsWithPrefixedSlugs}
                    pageId="company-updates-page"
                />
            </Container>
        </section>
    );
};

export default ListOfUpdates;
