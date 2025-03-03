import Seo from '../../../components/seo';
import logoUrl from '../../../images/estuary.png';

const SuccessStoryHead = ({
    data: {
        successStory,
        site: {
            siteMetadata: { siteUrl },
        },
    },
}) => {
    return (
        <>
            <Seo
                title={successStory.metaTitle}
                description={successStory.metaDescription}
                url={`${siteUrl}/success-stories/${successStory.Slug}`}
                image={
                    successStory.Logo
                        ? `${siteUrl}${successStory.Logo.localFile.childImageSharp.metaImg.images.fallback.src}`
                        : undefined
                }
            />
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    'mainEntityOfPage': {
                        '@type': 'WebPage',
                        '@id': `${siteUrl}/success-stories/${successStory.Slug}`,
                    },
                    'headline': successStory.Title,
                    'description': successStory.Description ?? '',
                    'image':
                        successStory.Logo &&
                        `${siteUrl}${successStory.Logo.localFile.childImageSharp.metaImg.images.fallback.src}`,
                    'publisher': {
                        '@type': 'Organization',
                        'name': 'Estuary',
                        'logo': {
                            '@type': 'ImageObject',
                            'url': `${siteUrl}${logoUrl}`,
                        },
                    },
                    'datePublished': successStory.machineReadablePublishDate,
                })}
            </script>
        </>
    );
};

export default SuccessStoryHead;
