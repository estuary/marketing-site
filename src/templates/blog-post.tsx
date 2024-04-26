import { graphql } from 'gatsby';
import * as React from 'react';
import StickyBox from 'react-sticky-box';
import { OutboundLink } from '../components/OutboundLink';

import dayjs from 'dayjs';
import reltime from 'dayjs/plugin/relativeTime';

import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useEffect, useState } from 'react';
import { PopularArticles } from '../components/BlogPopularArticles';
import BlogPostPopupModal from '../components/BlogPostPopupModal';
import { ProcessedPost } from '../components/BlogPostProcessor';
import { RenderToc } from '../components/BlogPostToc';
import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';
import logoUrl from '../images/combination-mark__multi-blue.png';

dayjs.extend(reltime);

const BlogPostTemplate = ({ data: { post }, pageContext }) => {
    const postTags = post?.tags?.filter((tag) => tag.type === 'tag');

    /* const authorImage = post?.authors[0]?.picture && getImage(post.authors[0].picture.localFile.childImageSharp.gatsbyImageData)

    const authorSocialLink = post?.authors[0]?.link */

    const [windowWidth, setWindowWidth] = useState(typeof window === 'undefined' ? 1500 : window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const copyLinkToClipboard = () => {
        const currentUrl = window.location.href;
        navigator.clipboard
            .writeText(currentUrl)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy link: ', err);
            });
    };

    useEffect(() => {
        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const tocBodyRight = (
        <div>
            <RenderToc items={post.body.data.childHtmlRehype.tableOfContents} />
            <div className="sidebar-right">
                <div className="banner">
                    <span>
                        Build <span>Pipeline</span>
                    </span>
                </div>
                <h3>
                    Start streaming your data <span>for free</span>
                </h3>
                <OutboundLink href="https://dashboard.estuary.dev/register" className="pipeline-link">
                    Build pipeline
                </OutboundLink>
            </div>
        </div>
    );

    const buildPipelineAndPricingButtons = (
        <div className="build-pipeline-and-pricing-buttons">
            <OutboundLink href="https://dashboard.estuary.dev/register" className="pipeline-link">
                Build a pipeline
            </OutboundLink>
            <OutboundLink href="https://estuary.dev/pricing" className="pricing-link">
                More on our Pricing
            </OutboundLink>
        </div>
    );

    return (
        <Layout headerTheme="light">
            <article className="blog-post" itemScope itemType="http://schema.org/Article">
                <section className="blog-post-header">
                    <div className="header-info">
                        <div className="post-info">
                            <div className="tags-wrapper">
                                {postTags.map((tag) => (
                                    <span key={tag.name} className="blogs-post-card-tags">
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                            <div className="date-and-read-wrapper">
                                <div className="icon-info-wrapper">
                                    <CalendarTodayOutlined className="icon" />
                                    <span className="blog-post-date">{post.publishedAt}</span>
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
                        <h2>
                            {post.description}
                        </h2>
                        <Bio authors={post.authors} />
                    </div>
                    {post.hero ? (
                        <GatsbyImage
                            alt={post.title}
                            className="hero-image"
                            image={post.hero.localFile.childImageSharp.gatsbyImageData}
                            loading="eager"
                        />
                    ) : null}
                </section>
                {post.body && (
                    <section className="blog-post-content">
                        <div className="main-content">
                            <ProcessedPost body={post.body.data.childHtmlRehype.html} />

                            <div className="build-pipeline-banner">
                                <h3>
                                    Start streaming your data <span>for free</span>
                                </h3>
                                <OutboundLink href="https://dashboard.estuary.dev/register" className="pipeline-link">
                                    Build a Pipeline
                                </OutboundLink>
                            </div>
                        </div>

                        {windowWidth > 1150 ? (
                            <StickyBox offsetTop={120} className="post-sidebar">
                                {tocBodyRight}
                            </StickyBox>
                        ) : (
                            <div className="post-sidebar">{tocBodyRight}</div>
                        )}
                    </section>
                )}
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
                    <PopularArticles />
                </section>
                <section className="big-build-pipeline-banner-section">
                    <div className="big-build-pipeline-banner-container">
                        <div className="left-column-container">
                            <h5>Streaming Pipelines.</h5>
                            <h5>Simple to deploy.</h5>
                            <h5>Simply priced.</h5>
                            {windowWidth > 767 && buildPipelineAndPricingButtons}
                        </div>
                        <div className="right-column-container">
                            <div>
                                <DoneIcon htmlColor="#5072eb" fontSize="large" />
                                <span>$1/GB of data moved + $.14/connector/hour;</span>
                            </div>
                            <div>
                                <DoneIcon htmlColor="#5072eb" fontSize="large" />
                                <span>50% less than competing ETL/ELT solutions;</span>
                            </div>
                            <div>
                                <DoneIcon htmlColor="#5072eb" fontSize="large" />
                                <span>{'<'}100ms latency on streaming sinks/sources.</span>
                            </div>
                        </div>
                        {windowWidth <= 767 && buildPipelineAndPricingButtons}
                    </div>
                </section>
            </article>
            <BlogPostPopupModal
                buttonLabel={'Contact Us'}
                buttonClass={'section-one-demo-button'}
                buttonId="pricing-hero-hubspot"
            />
        </Layout >
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
            url: `${siteUrl}/${author.picture.localFile.childImageSharp.fixed.src}`,
        },
    }));

    const postTags = post.tags.filter((tag) => tag.type === 'tag').map((t) => t.name);
    return (
        <>
            <Seo
                title={post.title}
                description={post.description ?? ''}
                url={`${siteUrl}/${post.slug}`}
                image={post.hero && `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.src}`}
            />
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    mainEntityOfPage: {
                        '@type': 'WebPage',
                        '@id': `${siteUrl}/${post.slug}`,
                    },
                    headline: post.title,
                    description: post.description ?? '',
                    image: post.hero && `${siteUrl}${post.hero.localFile.childImageSharp.meta_img.src}`,
                    author: post.authors.length > 1 ? mappedAuthors : mappedAuthors[0],
                    keywords: postTags,
                    publisher: {
                        '@type': 'Organization',
                        name: 'Estuary',
                        logo: {
                            '@type': 'ImageObject',
                            url: `${siteUrl}${logoUrl}`,
                        },
                    },
                    datePublished: post.machineReadablePublishDate,
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
      machineReadablePublishDate: publishedAt(formatString: "YYYY-MM-DD")
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
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 100)
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
