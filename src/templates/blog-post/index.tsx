import { graphql } from 'gatsby';
import * as React from 'react';

import dayjs from 'dayjs';
import reltime from 'dayjs/plugin/relativeTime';

import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Divider } from '@mui/material';
import SwoopingLinesBackground from '../../components/BackgroundImages/LightSwoopingLinesRightDirectionBackground';
import StraightLinesBackground from '../../components/BackgroundImages/StraightLinesBackground';
import { PopularArticles } from '../../components/BlogPopularArticles';
import BlogPostPopupModal from '../../components/BlogPostPopupModal';
import { ProcessedPost } from '../../components/BlogPostProcessor';
import { RenderToc } from '../../components/BlogPostToc';
import Breadcrumbs from '../../components/Breadcrumbs';
import {
    OutboundLink,
    OutboundLinkFilled,
    OutboundLinkOutlined,
} from '../../components/OutboundLink';
import Bio from '../../components/Bio';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import logoUrl from '../../images/combination-mark__multi-blue.png';
import { costPerGB } from '../../utils';
import ReadingTimeIcon from '../../svgs/time.svg';
import { dashboardRegisterUrl } from '../../../shared';
import Avatar from '../../components/Avatar';
import LinkedinIcon from '../../svgs/share-social-icons/linkedin-outlined.svg';
import TwitterXIcon from '../../svgs/share-social-icons/twitter-x-outlined.svg';
import ShareArticle from './ShareArticle';
import {
    blogPost,
    blogPostHeaderWrapper,
    headerInfo,
    postInfo,
    tagsWrapper,
    blogsPostCardTags,
    dateAndReadWrapper,
    iconInfoWrapper,
    blogPostDate,
    heroImage,
    shareArticleMobile,
    blogPostContent,
    blogPostContentWrapper,
    mainContent,
    background,
    bigBuildPipelineBannerContainer,
    buildPipelineBanner,
    postSidebar,
    shareArticleDesktop,
    sidebarRight,
    banner,
    popularArticlesWrapper,
    bigBuildPipelineBannerSection,
    bigBuildPipelineBannerContainerLayout,
    leftColumnContainer,
    rightColumnContainer,
    buildPipelineAndPricingButtons,
    pricingLink,
    blogPostBreadcrumbsWrapper,
    nextStepsAndAboutAuthorSection,
    aboutAuthor,
    authorInfo,
    authorMainInfoContainer,
    authorAvatarContainer,
    authorNameAndRole,
    authorName,
    authorRole,
    authorInfoDivider,
    socialIconButtonsContainer,
} from './styles.module.less';

dayjs.extend(reltime);

const iconColor = '#47506D';

const BlogPostTemplate = ({ data: { post } }) => {
    const postTags = post?.tags?.filter((tag) => tag.type === 'tag');

    const hasBeenUpdated = post?.updatedAt
        ? post?.publishedAt !== post?.updatedAt
        : false;

    const hasAtLeastOneBio = post?.authors.some(
        (author) => author?.bio?.data?.bio
    );
    const tableOfContents = post.body.data.childHtmlRehype.tableOfContents;

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
                className={blogPost}
                itemScope
                itemType="http://schema.org/Article"
            >
                <SwoopingLinesBackground>
                    <div className={blogPostHeaderWrapper}>
                        <div className={headerInfo}>
                            <div className={postInfo}>
                                <div className={tagsWrapper}>
                                    {postTags.map((tag) => (
                                        <span
                                            key={tag.name}
                                            className={blogsPostCardTags}
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
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
                            <h1>{post.title}</h1>
                            <h2>{post.description}</h2>
                            <Bio authors={post.authors} />
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
                    </div>
                </SwoopingLinesBackground>

                {post.body ? (
                    <section className={blogPostContent}>
                        <div className={blogPostContentWrapper}>
                            <div className={mainContent}>
                                <ProcessedPost
                                    body={post.body.data.childHtmlRehype.html}
                                />

                                <StraightLinesBackground className={background}>
                                    <div
                                        className={
                                            bigBuildPipelineBannerContainer
                                        }
                                    >
                                        <div className={buildPipelineBanner}>
                                            <h3>
                                                Start streaming your data{' '}
                                                <span>for free</span>
                                            </h3>
                                            <OutboundLinkFilled
                                                href={dashboardRegisterUrl}
                                                target="_blank"
                                            >
                                                Build a Pipeline
                                            </OutboundLinkFilled>
                                        </div>
                                    </div>
                                </StraightLinesBackground>
                            </div>

                            <div className={postSidebar}>
                                <div className={shareArticleDesktop}>
                                    <ShareArticle
                                        article={{
                                            title: post.title,
                                            slug: post.slug,
                                        }}
                                    />
                                </div>
                                {tableOfContents.length > 0 ? (
                                    <RenderToc items={tableOfContents} />
                                ) : null}
                                <div className={sidebarRight}>
                                    <div className={banner}>
                                        <span>
                                            Build a <span>Pipeline</span>
                                        </span>
                                    </div>
                                    <h3>
                                        Start streaming your data{' '}
                                        <span>for free</span>
                                    </h3>
                                    <OutboundLinkFilled
                                        href={dashboardRegisterUrl}
                                    >
                                        Build a Pipeline
                                    </OutboundLinkFilled>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
                <section className={nextStepsAndAboutAuthorSection}>
                    {/* <div className={nextSteps}>
                        <h3>Next steps</h3>
                        <NextStepsLink href="">Read about Lorem ipsum dolor sit amet, consectetur</NextStepsLink>
                        <NextStepsLink href="">Learn about Lorem ipsum dolor sit amet</NextStepsLink>
                        <NextStepsLink href="">Lorem ipsum dolor sit amet</NextStepsLink>
                        </div> */}

                    <div className={aboutAuthor}>
                        <h3>
                            {post?.authors.length === 1
                                ? hasAtLeastOneBio
                                    ? 'About the author'
                                    : 'Author'
                                : hasAtLeastOneBio
                                  ? 'About the authors'
                                  : 'Authors'}
                        </h3>
                        {post?.authors?.map((author, index) => {
                            const authorImage =
                                author?.picture &&
                                getImage(
                                    author.picture.localFile.childImageSharp
                                        .gatsbyImageData
                                );

                            const authorBio = author?.bio.data.bio;

                            const authorSocialLinks = author?.socials;

                            return (
                                <>
                                    <div key={index} className={authorInfo}>
                                        <div
                                            className={authorMainInfoContainer}
                                        >
                                            <div
                                                className={
                                                    authorAvatarContainer
                                                }
                                            >
                                                <Avatar
                                                    image={authorImage}
                                                    alt="Author's Avatar"
                                                    name={author.name}
                                                    loading="lazy"
                                                    width="60px"
                                                />
                                            </div>
                                            <div className={authorNameAndRole}>
                                                {author?.name ? (
                                                    <span
                                                        className={authorName}
                                                    >
                                                        {author.name}
                                                    </span>
                                                ) : null}
                                                {author?.role ? (
                                                    <span
                                                        className={authorRole}
                                                    >
                                                        {author.role}
                                                    </span>
                                                ) : null}
                                            </div>
                                        </div>
                                        {authorSocialLinks ? (
                                            <div
                                                className={
                                                    socialIconButtonsContainer
                                                }
                                            >
                                                <Divider
                                                    orientation="vertical"
                                                    variant="middle"
                                                    flexItem
                                                    className={
                                                        authorInfoDivider
                                                    }
                                                />
                                                {authorSocialLinks?.linked_in ? (
                                                    <OutboundLink
                                                        href={
                                                            authorSocialLinks.linked_in
                                                        }
                                                        target="_blank"
                                                    >
                                                        <LinkedinIcon
                                                            color={iconColor}
                                                        />
                                                    </OutboundLink>
                                                ) : null}
                                                {authorSocialLinks?.twitter ? (
                                                    <OutboundLink
                                                        href={
                                                            authorSocialLinks.twitter
                                                        }
                                                        target="_blank"
                                                    >
                                                        <TwitterXIcon />
                                                    </OutboundLink>
                                                ) : null}
                                                {/* {authorSocialLinks?.other ? (
                                                    <OutboundLink
                                                        href={authorSocialLinks.other}
                                                        target="_blank"
                                                    >
                                                        <WebsiteIcon
                                                            htmlColor={iconColor}
                                                        />
                                                    </OutboundLink>
                                                ) : null} */}
                                            </div>
                                        ) : null}
                                    </div>
                                    {authorBio ? (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: author.bio.data.bio,
                                            }}
                                            // TODO: Remove the margin top of this paragraph. Do this after the global css file split to avoid conflicts.
                                        />
                                    ) : null}
                                </>
                            );
                        })}
                    </div>
                </section>
                <section className={popularArticlesWrapper}>
                    <PopularArticles />
                </section>
                <section className={bigBuildPipelineBannerSection}>
                    <StraightLinesBackground className={background}>
                        <div className={bigBuildPipelineBannerContainer}>
                            <div
                                className={
                                    bigBuildPipelineBannerContainerLayout
                                }
                            >
                                <div className={leftColumnContainer}>
                                    <h5>Streaming Pipelines.</h5>
                                    <h5>Simple to Deploy.</h5>
                                    <h5>Simply Priced.</h5>
                                </div>
                                <div className={rightColumnContainer}>
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
                            <div className={buildPipelineAndPricingButtons}>
                                <OutboundLinkFilled href={dashboardRegisterUrl}>
                                    Build a Pipeline
                                </OutboundLinkFilled>
                                <OutboundLinkOutlined
                                    href="https://estuary.dev/pricing"
                                    className={pricingLink}
                                    theme="dark"
                                >
                                    See Pricing
                                </OutboundLinkOutlined>
                            </div>
                        </div>
                    </StraightLinesBackground>
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
            'url': `${siteUrl}/${author.picture.localFile.childImageSharp.fixedImg.gatsbyImageData}`,
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
                        ? `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.gatsbyImageData}`
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
                        `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.gatsbyImageData}`,
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
                    childMarkdownRemark {
                        fields {
                            readingTime {
                                text
                            }
                        }
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
                            fixedImg: gatsbyImageData(layout: FIXED, width: 60)
                        }
                    }
                }
                role
                bio {
                    data {
                        bio
                    }
                }
                socials: Socials {
                    linked_in
                    twitter
                    other
                }
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
                        meta_img: gatsbyImageData(layout: FIXED, width: 500)
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
