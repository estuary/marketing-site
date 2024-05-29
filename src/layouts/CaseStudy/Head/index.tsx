import React from 'react';

import Seo from '../../../components/seo';

import logoUrl from '../../../images/combination-mark__multi-blue.png';

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
                title={caseStudy.Title}
                description={caseStudy.Description ?? ''}
                url={`${siteUrl}/customers/${caseStudy.Slug}`}
                image={
                    caseStudy.Logo
                        ? `${siteUrl}${caseStudy.Logo.localFile.childImageSharp.meta_img.src}`
                        : null
                }
            />
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    'mainEntityOfPage': {
                        '@type': 'WebPage',
                        '@id': `${siteUrl}/customers/${caseStudy.Slug}`,
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
