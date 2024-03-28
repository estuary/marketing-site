import { graphql } from 'gatsby';
import * as React from 'react';
import StickyBox from 'react-sticky-box';
import { OutboundLink } from '../components/OutboundLink';

import dayjs from 'dayjs';
import reltime from 'dayjs/plugin/relativeTime';

import AccessTime from '@mui/icons-material/AccessTime';
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useEffect, useState } from 'react';
import { PopularArticles } from '../components/BlogPopularArticles';
import { ProcessedPost } from '../components/BlogPostProcessor';
import { RenderToc } from '../components/BlogPostToc';
import Bio from '../components/bio';
import Layout from '../components/layout';
import EmailIcon from '../svgs/email-outline.svg';
import FacebookIcon from '../svgs/facebook-outline.svg';
import LinkIcon from '../svgs/link-icon.svg';
import SlackIcon from '../svgs/slack-outline-2.svg';
import TwitterXIcon from '../svgs/twitter-x-outline.svg';

dayjs.extend(reltime);

const BlogPostTemplate = ({ data: { post }, pageContext }) => {
    const postTags = post.tags.filter((tag) => tag.type === 'tag');

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

    const sharingButtonsSection = (
        <div className="sharing-buttons-list-wrapper">
            <span>Share this article</span>
            <ul>
                <OutboundLink className="sharing-button" onClick={copyLinkToClipboard}>
                    <LinkIcon />
                </OutboundLink>
                <OutboundLink className="sharing-button" href="https://estuary-dev.slack.com" target="_blank">
                    <SlackIcon />
                </OutboundLink>
                <OutboundLink className="sharing-button" href="https://twitter.com/EstuaryDev" target="_blank">
                    <TwitterXIcon />
                </OutboundLink>
                {/* TODO: add Estuary's facebook URL */}
                <OutboundLink className="sharing-button" target="_blank">
                    <FacebookIcon />
                </OutboundLink>
                {/* TODO: add the correct Estuary's email */}
                <OutboundLink className="sharing-button" href="mailto:david@estuary.dev">
                    <EmailIcon />
                </OutboundLink>
            </ul>
        </div>
    )

    const tocBodyLeft = (
        <>
            {windowWidth > 1150 && sharingButtonsSection}
            <RenderToc items={post.body.data.childHtmlRehype.tableOfContents} />
        </>
    );

    const tocBodyRight = (
        <div className="sidebar-right">
            <div className="banner">
                <span>
                    Build <span>Pipeline</span>
                </span>
            </div>
            <h3>Start streaming your data <span>for free</span></h3>
            <OutboundLink href="https://dashboard.estuary.dev/register" className="pipeline-link">
                Build pipeline
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
                                    <span className="blogs-post-card-tags">{tag.name}</span>
                                ))}
                            </div>
                            <div className="date-and-read-wrapper">
                                <div className="icon-info-wrapper">
                                    <CalendarTodayOutlined className="icon" />
                                    <span className="blog-post-date">{post.publishedAt}</span>
                                </div>

                                <div className="icon-info-wrapper">
                                    <AccessTime className="icon" />
                                    <span className="blog-post-date">
                                        {/* TODO: Add post reading time from Strapi */}
                                        10 min
                                    </span>
                                </div>
                            </div>
                        </div>
                        <h1>{post.title}</h1>
                        <h2>
                            {/* TODO: Add post description to Strapi */}
                            {post.description}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed.
                        </h2>
                        {/* TODO: Add post author to Strapi */}
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
                    {windowWidth <= 1150 && sharingButtonsSection}
                </section>
                {post.body && (
                    <section className="blog-post-content">
                        {windowWidth > 1150 ? (
                            <StickyBox offsetTop={120} className="post-sidebar">
                                {tocBodyLeft}
                            </StickyBox>
                        ) : (
                            <div className="post-sidebar">
                                {tocBodyLeft}
                            </div>
                        )}

                        <div>
                            <ProcessedPost body={post.body.data.childHtmlRehype.html} />

                            <div className="build-pipeline-banner">
                                <h3>Start streaming your data <span>for free</span></h3>
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
                            <div className="post-sidebar">
                                {tocBodyRight}
                            </div>
                        )}
                    </section>
                )}
                <section className="popular-articles">
                    <PopularArticles />
                </section>
            </article>
        </Layout>
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
