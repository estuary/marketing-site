import clsx from 'clsx';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import LinkFilled from '../LinksAndButtons/LinkFilled';
import {
    container,
    darkBackgroundColor,
    imageWrapper,
} from './styles.module.less';

interface SuccessStoryBannerProps {
    theme?: 'dark' | 'light';
    pageId: string;
}

const SuccessStoryBanner = ({
    theme = 'light',
    pageId,
}: SuccessStoryBannerProps) => {
    const { successStory } = useStaticQuery(graphql`
        query GetBannerSuccessStory {
            successStory: strapiCaseStudy(id: { eq: "headset" }) {
                slug: Slug
                title: Title
                description: Description
                logo: Logo {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, quality: 100)
                        }
                    }
                }
            }
        }
    `);

    return (
        <div
            className={clsx(
                container,
                theme === 'dark' ? darkBackgroundColor : null
            )}
        >
            <div className={imageWrapper}>
                <GatsbyImage
                    alt={`${successStory.title} logo`}
                    image={
                        successStory.logo.localFile.childImageSharp
                            .gatsbyImageData
                    }
                />
            </div>
            <p>{successStory.description?.data || ''}.</p>
            <LinkFilled
                id={`success-story-banner/${pageId}`}
                href={`/success-stories/${successStory.slug}`}
                target="_blank"
            >
                Read Success Story
            </LinkFilled>
        </div>
    );
};

export default SuccessStoryBanner;
