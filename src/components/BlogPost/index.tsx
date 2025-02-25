import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import DoneIcon from '@mui/icons-material/Done';
import { Divider, useTheme } from '@mui/material';
import { Link } from 'gatsby';
import SwoopingLinesBackground from '../BackgroundImages/LightSwoopingLinesRightDirectionBackground';
import Bio from '../Bio';
import ReadingTimeIcon from '../../svgs/time.svg';
import Container from '../Container';
import HeroSectionDetails from '../HeroSectionDetails';
import ShareArticle from '../ShareArticle';
import { ProcessedPost } from '../BlogPostProcessor';
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
    blogPostContent,
    blogPostContentWrapper,
    mainContent,
    bigBuildPipelineBannerContainer,
    popularArticlesWrapper,
    bigBuildPipelineBannerSection,
    bigBuildPipelineBannerWrapper,
    bigBuildPipelineBannerContainerLayout,
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

    return (
        <article
            className={article}
            itemScope
            itemType="http://schema.org/Article"
        >
            <SwoopingLinesBackground>
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
                        {post.authors ? <Bio authors={post.authors} /> : null}
                    </div>
                    {post.hero ? (
                        <GatsbyImage
                            alt={post.hero.alternativeText}
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
                <section className={blogPostContent}>
                    <div className={blogPostContentWrapper}>
                        <div className={mainContent}>
                            <ProcessedPost
                                body={post.body.data.childHtmlRehype.html}
                            />
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
                                post.body.data.childHtmlRehype.tableOfContents
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
                                        <Link
                                            id={`${getSlugifiedText(author.name)}/about-section/blog-post-page`}
                                            to={getAuthorPathBySlug(
                                                author?.slug
                                            )}
                                            className={authorMainInfoContainer}
                                        >
                                            <div
                                                className={
                                                    authorAvatarContainer
                                                }
                                            >
                                                <Avatar
                                                    image={authorImage}
                                                    alt={`Picture of ${author?.name}`}
                                                    name={author.name}
                                                    loading="lazy"
                                                    size={60}
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
                                </>
                            );
                        })}
                    </div>
                </section>
            ) : null}
            {hasPopularArticlesSection ? (
                <section className={popularArticlesWrapper}>
                    <h2>Popular Articles</h2>
                    <PopularArticles />
                </section>
            ) : null}
            <section className={bigBuildPipelineBannerSection}>
                <div className={bigBuildPipelineBannerWrapper}>
                    <StraightLinesBackground
                        className={bigBuildPipelineBannerContainer}
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
