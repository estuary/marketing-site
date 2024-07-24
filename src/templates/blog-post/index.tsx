import { graphql } from 'gatsby';
import * as React from 'react';

import dayjs from 'dayjs';
import reltime from 'dayjs/plugin/relativeTime';

import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { GatsbyImage } from 'gatsby-plugin-image';
import BuildPipeLineBannerBackground from '../../components/BackgroundImages/BuildPipelineWrapper';
import SwoopingLinesBackground from '../../components/BackgroundImages/LightSwoopingLinesRightDirectionBackground';
import { PopularArticles } from '../../components/BlogPopularArticles';
import BlogPostPopupModal from '../../components/BlogPostPopupModal';
import { ProcessedPost } from '../../components/BlogPostProcessor';
import { RenderToc } from '../../components/BlogPostToc';
import Breadcrumbs from '../../components/Breadcrumbs';
import { OutboundLink } from '../../components/OutboundLink';
import Bio from '../../components/bio';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import logoUrl from '../../images/combination-mark__multi-blue.png';
import { costPerGB } from '../../utils';
import ShareArticle from './ShareArticle';

dayjs.extend(reltime);

const BlogPostTemplate = ({ data: { post } }) => {
    const postTags = post?.tags?.filter((tag) => tag.type === 'tag');

    /* const authorImage = post?.authors[0]?.picture && getImage(post.authors[0].picture.localFile.childImageSharp.gatsbyImageData)

    const authorSocialLink = post?.authors[0]?.link */

    const hasBeenUpdated = post?.updatedAt
        ? post?.publishedAt !== post?.updatedAt
        : false;

    return (
        <Layout>
            <div className="blog-post-breadcrumbs-wrapper">
                <Breadcrumbs
                    breadcrumbs={[
                        {
                            title: 'Home',
                            href: '/',
                        },
                        {
                            title: 'Blog',
                            href: '/blog',
                        },
                        {
                            title: post.title,
                        },
                    ]}
                />
            </div>
            <article
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
            >
                <SwoopingLinesBackground>
                    <div className="blog-post-header-wrapper">
                        <div className="header-info">
                            <div className="post-info">
                                <div className="tags-wrapper">
                                    {postTags.map((tag) => (
                                        <span
                                            key={tag.name}
                                            className="blogs-post-card-tags"
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                                <div className="date-and-read-wrapper">
                                    <div className="icon-info-wrapper">
                                        <CalendarTodayOutlined className="icon" />
                                        <span className="blog-post-date">
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

                                    {/* TODO: Add post reading time */}
                                    {/* <div className="icon-info-wrapper">
                                    <AccessTime className="icon" />
                                    <span className="blog-post-date">
                                        10 min
                                    </span>
                                </div> */}
                                </div>
                            </div>
                            <h1>{post.title}</h1>
                            <h2>{post.description}</h2>
                            <Bio authors={post.authors} />
                        </div>
                        {post.hero ? (
                            <GatsbyImage
                                alt={post.title}
                                className="hero-image"
                                image={
                                    post.hero.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                loading="eager"
                            />
                        ) : null}
                        <div className="share-article-mobile">
                            <ShareArticle
                                article={{
                                    title: post.title,
                                    slug: post.slug,
                                }}
                            />
                        </div>
                    </div>
                </SwoopingLinesBackground>

                {post.body ? (
                    <section className="blog-post-content">
                        <div className="blog-post-content-wrapper">
                            <div className="main-content">
                                <ProcessedPost
                                    body={post.body.data.childHtmlRehype.html}
                                />

                                <div className="build-pipeline-banner-wrapper">
                                    <BuildPipeLineBannerBackground>
                                        <div className="build-pipeline-banner">
                                            <h3>
                                                Start streaming your data{' '}
                                                <span>for free</span>
                                            </h3>
                                            <OutboundLink
                                                href="https://dashboard.estuary.dev/register"
                                                className="pipeline-link"
                                            >
                                                Build a Pipeline
                                            </OutboundLink>
                                        </div>
                                    </BuildPipeLineBannerBackground>
                                </div>
                            </div>

                            <div className="post-sidebar">
                                <div className="share-article-desktop">
                                    <ShareArticle
                                        article={{
                                            title: post.title,
                                            slug: post.slug,
                                        }}
                                    />
                                </div>
                                <RenderToc
                                    items={
                                        post.body.data.childHtmlRehype
                                            .tableOfContents
                                    }
                                />
                                <div className="sidebar-right">
                                    <div className="banner">
                                        <span>
                                            Build a <span>Pipeline</span>
                                        </span>
                                    </div>
                                    <h3>
                                        Start streaming your data{' '}
                                        <span>for free</span>
                                    </h3>
                                    <OutboundLink
                                        href="https://dashboard.estuary.dev/register"
                                        className="pipeline-link"
                                    >
                                        Build a Pipeline
                                    </OutboundLink>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                {/* <section className="next-steps-and-about-author-section">
                    <div className="next-steps">
                        <h3>Next steps</h3>
                        <NextStepsLink href="">Read about Lorem ipsum dolor sit amet, consectetur</NextStepsLink>
                        <NextStepsLink href="">Learn about Lorem ipsum dolor sit amet</NextStepsLink>
                        <NextStepsLink href="">Lorem ipsum dolor sit amet</NextStepsLink>
                    </div>
                    <div className="about-author">
                        <h3>About the author</h3>
                        <div className="author-info">
                            <div className="author-main-info-container">
                                <div className="author-avatar-container">
                                    <Avatar
                                        image={authorImage}
                                        alt="Author's Avatar"
                                        name={post.authors[0].name}
                                    />
                                </div>
                                <div className="author-name-and-role">
                                    <span className="author-name">{post.authors[0].name}</span>
                                    <span className="author-role">CEO</span>
                                </div>
                            </div>
                            {authorSocialLink &&
                                <div className="social-icon-buttons-container">
                                    <Divider orientation="vertical" variant="middle" flexItem className="author-info-divider" />
                                    {authorSocialLink?.includes("linkedin.com") &&
                                        <OutboundLink href={authorSocialLink} target="_blank">
                                            <LinkedinIcon color="#47506D" />
                                        </OutboundLink>
                                    }
                                    {authorSocialLink?.includes("twitter.com") &&
                                        <OutboundLink href={authorSocialLink} target="_blank">
                                            <TwitterXIcon />
                                        </OutboundLink>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </section> */}
                <section className="popular-articles">
                    <div className="popular-articles-wrapper">
                        <PopularArticles />
                    </div>
                </section>
                <section className="big-build-pipeline-banner-section">
                    <BuildPipeLineBannerBackground>
                        <div className="big-build-pipeline-banner-container_layout">
                            <div className="left-column-container">
                                <h5>Streaming Pipelines.</h5>
                                <h5>Simple to Deploy.</h5>
                                <h5>Simply Priced.</h5>
                            </div>
                            <div className="right-column-container">
                                <div>
                                    <DoneIcon
                                        htmlColor="#5072eb"
                                        fontSize="large"
                                    />
                                    <span>
                                        {costPerGB} of data moved +
                                        $.14/connector/hour;
                                    </span>
                                </div>
                                <div>
                                    <DoneIcon
                                        htmlColor="#5072eb"
                                        fontSize="large"
                                    />
                                    <span>
                                        50% less than competing ETL/ELT
                                        solutions;
                                    </span>
                                </div>
                                <div>
                                    <DoneIcon
                                        htmlColor="#5072eb"
                                        fontSize="large"
                                    />
                                    <span>
                                        {'<'}100ms latency on streaming
                                        sinks/sources.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="build-pipeline-and-pricing-buttons">
                            <OutboundLink
                                href="https://dashboard.estuary.dev/register"
                                className="pipeline-link"
                            >
                                Build a Pipeline
                            </OutboundLink>
                            <OutboundLink
                                href="https://estuary.dev/pricing"
                                className="pricing-link"
                            >
                                See Pricing
                            </OutboundLink>
                        </div>
                    </BuildPipeLineBannerBackground>
                </section>
            </article>
            <BlogPostPopupModal />
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
    const mappedAuthors = post.authors.map((author) => ({
        name: author.name,
        url: author.link,
        image: author.picture && {
            '@type': 'ImageObject',
            'url': `${siteUrl}/${author.picture.localFile.childImageSharp.fixed.src}`,
        },
    }));

    const postTags = post.tags
        .filter((tag) => tag.type === 'tag')
        .map((t) => t.name);
    return (
        <>
            <Seo
                title={post.title}
                description={post.description ?? ''}
                url={`${siteUrl}/${post.slug}`}
                image={
                    post.hero
                        ? `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.src}`
                        : undefined
                }
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
                    'image':
                        post.hero &&
                        `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.src}`,
                    'author':
                        post.authors.length > 1
                            ? mappedAuthors
                            : mappedAuthors[0],
                    'keywords': postTags,
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

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($id: String!) {
        site {
            siteMetadata {
                siteUrl
            }
        }
        post: strapiBlogPost(id: { eq: $id }) {
            title: Title
            publishedAt(formatString: "MMMM D, YYYY")
            updatedAt(formatString: "MMMM D, YYYY")
            machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
            machineReadableUpdateDate: updatedAt(formatString: "YYYY-MM-DD")
            description: Description
            slug: Slug
            body: Body {
                data {
                    Body
                    childHtmlRehype {
                        html
                        tableOfContents
                    }
                }
            }
            authors {
                name: Name
                picture: Picture {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                placeholder: BLURRED
                                quality: 100
                            )
                            fixed(width: 60) {
                                src
                            }
                        }
                    }
                }
                link: Link
            }
            hero: Hero {
                localFile {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                            # aspectRatio: 2
                            formats: [AUTO, WEBP, AVIF]
                        )
                        meta_img: fixed(width: 500) {
                            src
                        }
                        # Further below in this doc you can learn how to use these response images
                    }
                }
            }
            tags: tags {
                name: Name
                type: Type
            }
        }
    }
`;
