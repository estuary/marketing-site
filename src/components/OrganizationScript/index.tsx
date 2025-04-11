import { graphql, useStaticQuery } from 'gatsby';
import logoUrl from '../../images/estuary.png';
import { estuaryAddress, estuaryLinkedinUrl } from '../../../shared';

const OrganizationScript = () => {
    const { site } = useStaticQuery(graphql`
        query SeoData {
            site {
                siteMetadata {
                    siteName
                    siteUrl
                }
            }
        }
    `);

    return (
        <script type="application/ld+json">
            {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                '@id': 'https://estuary.dev/#organization',
                'name': 'Estuary',
                'alternateName': 'Estuary Flow',
                'site_name': site.siteMetadata?.siteName,
                'url': 'https://estuary.dev/',
                'description':
                    'Estuary is a real-time data operations (DataOps) platform that simplifies data pipelines. Capture data from any source, transform it with low-latency processing, and materialize it back into your systems for immediate action. Estuary enables data integration, stream processing, and change data capture in a unified platform.',
                'logo': site.siteMetadata?.siteUrl + logoUrl,
                'image': site.siteMetadata?.siteUrl + logoUrl,
                'sameAs': [
                    'https://twitter.com/EstuaryDev',
                    estuaryLinkedinUrl,
                    'https://www.youtube.com/channel/UCJ9JIjh7uaUdjcFR6xTkJXQ',
                    'https://www.crunchbase.com/organization/estuary',
                ],
                'address': estuaryAddress,
                'knowsAbout': [
                    'https://en.wikipedia.org/wiki/Data_integration',
                    'https://en.wikipedia.org/wiki/Extract,_transform,_load',
                    'https://en.wikipedia.org/wiki/Data_pipeline',
                    'https://en.wikipedia.org/wiki/Real-time_data',
                    'https://en.wikipedia.org/wiki/Data_warehouse',
                    'https://en.wikipedia.org/wiki/Change_data_capture',
                ],
                'numberOfEmployees': '11-50',
                'founders': [
                    {
                        '@type': 'Person',
                        'name': 'David Yaffe',
                        'jobTitle': 'Co-founder',
                        'description':
                            'David Yaffe is a co-founder and the CEO of Estuary. He previously served as the COO of LiveRamp and the co-founder / CEO of Arbor which was sold to LiveRamp in 2016. He has an extensive background in product management, serving as head of product for Doubleclick Bid Manager and Invite Media.',
                        'sameAs': [
                            'https://www.linkedin.com/in/davidyaffe',
                            'https://www.crunchbase.com/person/david-yaffe',
                            'https://twitter.com/dyaffe',
                            'https://www.producthunt.com/@dyaffe',
                        ],
                    },
                ],
            })}
        </script>
    );
};

export default OrganizationScript;
