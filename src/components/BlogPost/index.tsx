import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import { GatsbyImage } from 'gatsby-plugin-image';
import DoneIcon from '@mui/icons-material/Done';
import { Divider, useTheme } from '@mui/material';
import { Link } from 'gatsby';
import { Fragment } from 'react';
import clsx from 'clsx';
import SwoopingLinesBackground from '../BackgroundImages/LightSwoopingLinesRightDirectionBackground';
import Bio from '../Bio';
import ReadingTimeIcon from '../../svgs/time.svg';
import Container from '../Container';
import HeroSectionDetails from '../HeroSectionDetails';
import { ProcessedHtml } from '../HtmlProcessor';
import BlogBanner from '../BlogBanner';
import ArticleSidebar from '../ArticleSidebar';
import {
    dashboardRegisterUrl,
    getAuthorPathBySlug,
    getSlugifiedText,
} from '../../../shared';
import Avatar from '../../components/Avatar';
import SocialLinks from '../../components/SocialLinks';
import OutboundLinkFilled from '../../components/LinksAndButtons/OutboundLinkFilled';
import OutboundLinkOutlined from '../../components/LinksAndButtons/OutboundLinkOutlined';
import StraightLinesBackground from '../../components/BackgroundImages/StraightLinesBackground';
import { PopularArticles } from '../../components/BlogPopularArticles';
import { costPerGB } from '../../utils';
import ShareArticle from '../ShareArticle';
import RelatedArticles from '../RelatedArticles';
import LinkFilled from '../LinksAndButtons/LinkFilled';
import {
    article,
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
    blogPostContentWrapper,
    blogPostContentWrapperFullWidth,
    leftSidebar,
    leftSidebarHeader,
    leftSidebarImgWrapper,
    mainContent,
    bigBuildPipelineBannerContainer,
    bigBuildPipelineBannerWrapper,
    bigBuildPipelineBannerContainerLayout,
    straightLinesBackgroundWrapper,
    leftColumnContainer,
    rightColumnContainer,
    buildPipelineAndPricingButtons,
    pricingLink,
    nextStepsAndAboutAuthorSection,
    aboutAuthor,
    authorInfo,
    authorMainInfoContainer,
    authorAvatarContainer,
    authorNameAndRole,
    authorName,
    authorRole,
} from './styles.module.less';
import Faqs from './Faqs';
import ArticleCardsSection from './ArticleCardsSection';

interface BlogPostProps {
    post: any;
    hasPopularArticlesSection?: boolean;
    hasBodyCtaBanner?: boolean;
}

const BlogPost = ({
    post,
    hasPopularArticlesSection = false,
    hasBodyCtaBanner = false,
}: BlogPostProps) => {
    const theme = useTheme();

    const hasBeenUpdated = post?.updatedAt
        ? post?.publishedAt !== post?.updatedAt
        : false;

    const postTags = post?.tags?.filter((tag) => tag.type === 'tag');

    const hasAtLeastOneBio = post?.authors?.some(
        (author) => author?.bio?.data?.bio
    );

    const shareArticleSectionTitle = `Share this ${hasPopularArticlesSection ? 'article' : 'update'}`;

    const bodyToc = post.body.data.childHtmlRehype.tableOfContents;

    const hasFaq = post?.faq?.length > 0;

    return (
        <article
            className={article}
            itemScope
            itemType="http://schema.org/Article"
        >
            <SwoopingLinesBackground loading="eager">
                <Container className={blogPostHeaderWrapper}>
                    <div className={headerInfo}>
                        <div className={postInfo}>
                            {postTags ? (
                                <div className={tagsWrapper}>
                                    {postTags.map((tag, index) => (
                                        <span
                                            key={`${tag.name}_${index}`}
                                            className={blogsPostCardTags}
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>
                            ) : null}
                            <div className={dateAndReadWrapper}>
                                <div className={iconInfoWrapper}>
                                    <ReadingTimeIcon color="var(--grey)" />
                                    <span className={blogPostDate}>
                                        {
                                            post.body.data.childMarkdownRemark
                                                .fields.readingTime.text
                                        }
                                    </span>
                                </div>
                                <div className={iconInfoWrapper}>
                                    <CalendarTodayOutlined fontSize="small" />
                                    <span className={blogPostDate}>
                                        <span>
                                            {hasBeenUpdated
                                                ? `Last updated: ${post.updatedAt}`
                                                : post.publishedAt}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <HeroSectionDetails
                            title={post.title}
                            description={post.description}
                        />
                        {post.authors ? <Bio authors={post.authors} /> : null}
                    </div>
                    {post.hero ? (
                        <GatsbyImage
                            alt={
                                post.hero.alternativeText ||
                                'Blog post hero image'
                            }
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
                            sectionTitle={shareArticleSectionTitle}
                        />
                    </div>
                </Container>
            </SwoopingLinesBackground>
            {post.body ? (
                <section>
                    <div
                        className={clsx(
                            blogPostContentWrapper,
                            post?.relatedSuccessStories
                                ? blogPostContentWrapperFullWidth
                                : null
                        )}
                    >
                        {post?.relatedSuccessStories ? (
                            <div className={leftSidebar}>
                                <div className={leftSidebarHeader}>
                                    <div className={leftSidebarImgWrapper}>
                                        <GatsbyImage
                                            alt={`${post.relatedSuccessStories.logo.alternativeText} success story logo`}
                                            image={
                                                post.relatedSuccessStories.logo
                                                    .localFile.childImageSharp
                                                    .gatsbyImageData
                                            }
                                        />
                                    </div>
                                    <span>
                                        {post.relatedSuccessStories.title}
                                    </span>
                                </div>
                                <hr />
                                <p>{post.relatedSuccessStories.description}.</p>
                                <LinkFilled
                                    href={`/success-stories/${post.relatedSuccessStories.slug}`}
                                    target="_blank"
                                >
                                    Read Success Story
                                </LinkFilled>
                            </div>
                        ) : null}
                        <div className={mainContent}>
                            <ProcessedHtml
                                body={post.body.data.childHtmlRehype.html}
                            />
                            {hasFaq ? <Faqs faqs={post.faq} /> : null}
                            {hasBodyCtaBanner ? (
                                <BlogBanner
                                    title={
                                        <h3>
                                            Start streaming your data{' '}
                                            <span>for free</span>
                                        </h3>
                                    }
                                    button={{
                                        id: 'build-a-pipeline-button/banner/blog-post-page',
                                        title: 'Build a Pipeline',
                                        href: dashboardRegisterUrl,
                                    }}
                                />
                            ) : null}
                        </div>
                        <ArticleSidebar
                            ctaButtonid="build-a-pipeline-button/sidebar/blog-post-page"
                            article={{
                                title: post.title,
                                slug: post.slug,
                            }}
                            tableOfContents={
                                hasFaq
                                    ? [
                                          ...bodyToc,
                                          {
                                              id: 'blog-post-hardcoded-faq',
                                              heading: 'FAQs',
                                          },
                                      ]
                                    : bodyToc
                            }
                            shareArticleSectionTitle={shareArticleSectionTitle}
                        />
                    </div>
                </section>
            ) : null}
            {post?.authors?.length >= 1 ? (
                <section className={nextStepsAndAboutAuthorSection}>
                    {/* <div className={nextSteps}>
                        <h3>Next steps</h3>
                        <NextStepsLink href="">Read about Lorem ipsum dolor sit amet, consectetur</NextStepsLink>
                        <NextStepsLink href="">Learn about Lorem ipsum dolor sit amet</NextStepsLink>
                        <NextStepsLink href="">Lorem ipsum dolor sit amet</NextStepsLink>
                        </div> */}

                    <div className={aboutAuthor}>
                        <h2>
                            {post?.authors.length === 1
                                ? hasAtLeastOneBio
                                    ? 'About the author'
                                    : 'Author'
                                : hasAtLeastOneBio
                                  ? 'About the authors'
                                  : 'Authors'}
                        </h2>
                        {post?.authors?.map((author, index) => {
                            const authorBio = author?.bio.data.bio;

                            const authorSocialLinks = author?.socials;

                            return (
                                <Fragment key={`${author.id}-${index}`}>
                                    <div className={authorInfo}>
                                        <Link
                                            id={`${getSlugifiedText(author.name)}/about-section/blog-post-page`}
                                            to={getAuthorPathBySlug(
                                                author?.slug
                                            )}
                                            className={authorMainInfoContainer}
                                        >
                                            {author.picture?.localFile
                                                ?.childImageSharp
                                                ?.gatsbyImageData ? (
                                                <div
                                                    className={
                                                        authorAvatarContainer
                                                    }
                                                >
                                                    <Avatar
                                                        image={
                                                            author.picture
                                                                .localFile
                                                                .childImageSharp
                                                                .gatsbyImageData
                                                        }
                                                        alt={`Picture of ${author?.name}`}
                                                        name={author.name}
                                                        loading="lazy"
                                                        size={60}
                                                    />
                                                </div>
                                            ) : null}
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
                                        </Link>
                                        {authorSocialLinks ? (
                                            <>
                                                <Divider
                                                    orientation="vertical"
                                                    variant="middle"
                                                    flexItem
                                                    sx={{
                                                        minHeight: '57px',
                                                        width: '1px',
                                                        borderColor:
                                                            'var(--border-color)',
                                                        margin: '0 30px 0 20px',
                                                        [theme.breakpoints.down(
                                                            520
                                                        )]: {
                                                            display: 'none',
                                                        },
                                                    }}
                                                />
                                                <SocialLinks
                                                    socialLinks={
                                                        authorSocialLinks
                                                    }
                                                />
                                            </>
                                        ) : null}
                                    </div>
                                    {authorBio ? (
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: author.bio.data.bio,
                                            }}
                                        />
                                    ) : null}
                                </Fragment>
                            );
                        })}
                    </div>
                </section>
            ) : null}
            {post?.relatedPosts?.length > 0 ? (
                <ArticleCardsSection sectionTitle="Related Articles">
                    <RelatedArticles
                        relatedPosts={post.relatedPosts.slice(0, 3)}
                    />
                </ArticleCardsSection>
            ) : null}
            {hasPopularArticlesSection ? (
                <ArticleCardsSection sectionTitle="Popular Articles">
                    <PopularArticles />
                </ArticleCardsSection>
            ) : null}
            <section>
                <div className={bigBuildPipelineBannerWrapper}>
                    <StraightLinesBackground
                        className={bigBuildPipelineBannerContainer}
                        wrapperClassName={straightLinesBackgroundWrapper}
                    >
                        <div className={bigBuildPipelineBannerContainerLayout}>
                            <div className={leftColumnContainer}>
                                <h5>Streaming Pipelines.</h5>
                                <h5>Simple to Deploy.</h5>
                                <h5>Simply Priced.</h5>
                            </div>
                            <div className={rightColumnContainer}>
                                <div>
                                    <DoneIcon
                                        htmlColor="var(--blue)"
                                        fontSize="large"
                                    />
                                    <span>
                                        {costPerGB} of data moved +
                                        $.14/connector/hour;
                                    </span>
                                </div>
                                <div>
                                    <DoneIcon
                                        htmlColor="var(--blue)"
                                        fontSize="large"
                                    />
                                    <span>
                                        50% less than competing ETL/ELT
                                        solutions;
                                    </span>
                                </div>
                                <div>
                                    <DoneIcon
                                        htmlColor="var(--blue)"
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
                            <OutboundLinkFilled
                                id="build-a-pipeline-button/streaming-pipelines-section/blog-post-page"
                                href={dashboardRegisterUrl}
                            >
                                Build a Pipeline
                            </OutboundLinkFilled>
                            <OutboundLinkOutlined
                                id="see-pricing-button/streaming-pipelines-section/blog-post-page"
                                href="https://estuary.dev/pricing/"
                                className={pricingLink}
                            >
                                See Pricing
                            </OutboundLinkOutlined>
                        </div>
                    </StraightLinesBackground>
                </div>
            </section>
        </article>
    );
};

export default BlogPost;
