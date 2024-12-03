import { graphql } from 'gatsby';
import * as React from 'react';
import dayjs from 'dayjs';
import reltime from 'dayjs/plugin/relativeTime';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import { GatsbyImage } from 'gatsby-plugin-image';
import SwoopingLinesBackground from '../../components/BackgroundImages/LightSwoopingLinesRightDirectionBackground';
import { PopularArticles } from '../../components/BlogPopularArticles';
import { ProcessedPost } from '../../components/BlogPostProcessor';
import Breadcrumbs from '../../components/Breadcrumbs';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import logoUrl from '../../images/estuary.png';
import ReadingTimeIcon from '../../svgs/time.svg';
import { dashboardRegisterUrl } from '../../../shared';
import BlogBanner from '../../components/BlogBanner';
import ArticleSidebar from '../../components/ArticleSidebar';
import Container from '../../components/Container';
import HeroSectionDetails from '../../components/HeroSectionDetails';
import ShareArticle from '../../components/ShareArticle';
import {
    blogPost,
    blogPostHeaderWrapper,
    headerInfo,
    postInfo,
    dateAndReadWrapper,
    iconInfoWrapper,
    blogPostDate,
    heroImage,
    shareArticleMobile,
    blogPostContent,
    blogPostContentWrapper,
    mainContent,
    popularArticlesWrapper,
    blogPostBreadcrumbsWrapper,
} from './styles.module.less';

dayjs.extend(reltime);

const CompanyUpdatePostTemplate = ({ data: { post } }) => {
    const hasBeenUpdated = post?.updatedAt
        ? post?.publishedAt !== post?.updatedAt
        : false;

    return (
        <Layout>
            <div className={blogPostBreadcrumbsWrapper}>
                <Breadcrumbs
                    breadcrumbs={[
                        {
                            title: 'Home',
                            href: '/',
                        },
                        {
                            title: 'Company Updates',
                            href: '/company-updates',
                        },
                        {
                            title: post.title,
                        },
                    ]}
                />
            </div>
            <article
                className={blogPost}
                itemScope
                itemType="http://schema.org/Article"
            >
                <SwoopingLinesBackground>
                    <Container className={blogPostHeaderWrapper}>
                        <div className={headerInfo}>
                            <div className={postInfo}>
                                <div className={dateAndReadWrapper}>
                                    <div className={iconInfoWrapper}>
                                        <ReadingTimeIcon color="#47506D" />
                                        <span className={blogPostDate}>
                                            {
                                                post.body.data
                                                    .childMarkdownRemark.fields
                                                    .readingTime.text
                                            }
                                        </span>
                                    </div>
                                    <div className={iconInfoWrapper}>
                                        <CalendarTodayOutlined fontSize="small" />
                                        <span className={blogPostDate}>
                                            <span>
                                                {hasBeenUpdated
                                                    ? `Published ${post.publishedAt}`
                                                    : post.publishedAt}
                                            </span>
                                            {hasBeenUpdated ? (
                                                <span>
                                                    Updated {post.updatedAt}
                                                </span>
                                            ) : null}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <HeroSectionDetails
                                title={post.title}
                                description={post.description}
                            />
                        </div>
                        {post.hero ? (
                            <GatsbyImage
                                alt={post.title}
                                className={heroImage}
                                image={
                                    post.hero.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                loading="eager"
                            />
                        ) : null}
                        <div className={shareArticleMobile}>
                            <ShareArticle
                                article={{
                                    title: post.title,
                                    slug: post.slug,
                                }}
                            />
                        </div>
                    </Container>
                </SwoopingLinesBackground>

                {post.body ? (
                    <section className={blogPostContent}>
                        <div className={blogPostContentWrapper}>
                            <div className={mainContent}>
                                <ProcessedPost
                                    body={post.body.data.childHtmlRehype.html}
                                />
                                <BlogBanner
                                    title={
                                        <h3>
                                            Start streaming your data{' '}
                                            <span>for free</span>
                                        </h3>
                                    }
                                    button={{
                                        title: 'Build a Pipeline',
                                        href: dashboardRegisterUrl,
                                    }}
                                />
                            </div>
                            <ArticleSidebar
                                article={{
                                    title: post.title,
                                    slug: post.slug,
                                }}
                                tableOfContents={
                                    post.body.data.childHtmlRehype
                                        .tableOfContents
                                }
                            />
                        </div>
                    </section>
                ) : null}
                <section className={popularArticlesWrapper}>
                    <h2>Popular Articles</h2>
                    <PopularArticles />
                </section>
            </article>
        </Layout>
    );
};

export const Head = ({
    data: {
        post,
        site: {
            siteMetadata: { siteUrl },
        },
    },
}) => {
    const ogImage = post.socialShareImage
        ? `${siteUrl}${post.socialShareImage.localFile.childImageSharp.metaImg.images.fallback.src}`
        : undefined;

    return (
        <>
            <Seo
                title={post.title}
                description={post.description ?? ''}
                url={`${siteUrl}/${post.slug}`}
                image={ogImage}
            />
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    'mainEntityOfPage': {
                        '@type': 'WebPage',
                        '@id': `${siteUrl}/${post.slug}`,
                    },
                    'headline': post.title,
                    'description': post.description ?? '',
                    'image': ogImage,
                    'author': 'Estuary',
                    'publisher': {
                        '@type': 'Organization',
                        'name': 'Estuary',
                        'logo': {
                            '@type': 'ImageObject',
                            'url': `${siteUrl}${logoUrl}`,
                        },
                    },
                    'datePublished': post.machineReadablePublishDate,
                    'dateModified': post.machineReadableUpdateDate,
                })}
            </script>
        </>
    );
};

export default CompanyUpdatePostTemplate;

export const pageQuery = graphql`
    query CompanyUpdatePostById($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        post: strapiCompanyUpdatePost(id: { eq: $id }) {
            title
            publishedAt(formatString: "MMMM D, YYYY")
            updatedAt(formatString: "MMMM D, YYYY")
            machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
            machineReadableUpdateDate: updatedAt(formatString: "YYYY-MM-DD")
            description
            slug
            body {
                data {
                    body
                    childHtmlRehype {
                        html
                        tableOfContents
                    }
                    childMarkdownRemark {
                        fields {
                            readingTime {
                                text
                            }
                        }
                    }
                }
            }
            hero {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            # aspectRatio: 2
                            formats: [AUTO, WEBP, AVIF]
                        )
                        metaImg: gatsbyImageData(layout: FIXED, width: 500)
                    }
                }
            }
            socialShareImage {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            # aspectRatio: 2
                            formats: [AUTO, WEBP, AVIF]
                        )
                        metaImg: gatsbyImageData(layout: FIXED, width: 500)
                    }
                }
            }
        }
    }
`;
