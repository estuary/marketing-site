import React from 'react';

import Seo from '../../../components/seo';

import logoUrl from '../../../images/estuary.png';

const CaseStudyHead = ({
    data: {
        caseStudy,
        site: {
            siteMetadata: { siteUrl },
        },
    },
}) => {
    return (
        <>
            <Seo
                title={caseStudy.metaTitle}
                description={caseStudy.metaDescription}
                url={`${siteUrl}/success-stories/${caseStudy.Slug}`}
                image={
                    caseStudy.Logo
                        ? `${siteUrl}${caseStudy.Logo.localFile.childImageSharp.meta_img.gatsbyImageData}`
                        : undefined
                }
            />
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    'mainEntityOfPage': {
                        '@type': 'WebPage',
                        '@id': `${siteUrl}/success-stories/${caseStudy.Slug}`,
                    },
                    'headline': caseStudy.Title,
                    'description': caseStudy.Description ?? '',
                    'image':
                        caseStudy.Logo &&
                        `${siteUrl}${caseStudy.Logo.localFile.childImageSharp.meta_img.src}`,
                    'publisher': {
                        '@type': 'Organization',
                        'name': 'Estuary',
                        'logo': {
                            '@type': 'ImageObject',
                            'url': `${siteUrl}${logoUrl}`,
                        },
                    },
                    'datePublished': caseStudy.machineReadablePublishDate,
                })}
            </script>
        </>
    );
};

export default CaseStudyHead;
