import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import { sectionTitle } from '../styles.module.less';
import { container } from './styles.module.less';
import Card from './Card';

const linkIdPrefix = 'download-estuary-logo-';
const linkIdSuffix = '-link/estuary-logo-section/brand-guidelines-page';
const imgFileFormat = '.png';

export default function EstuaryLogoUsage() {
    const data = useStaticQuery(graphql`
        query EstuaryLogos {
            colorOnLight: file(
                relativePath: {
                    eq: "brand-guidelines-page/estuary-logos/estuary-logo-color-on-light.png"
                }
            ) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
                publicURL
            }
            colorOnDark: file(
                relativePath: {
                    eq: "brand-guidelines-page/estuary-logos/estuary-logo-color-on-dark.png"
                }
            ) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
                publicURL
            }
            monoOnLight: file(
                relativePath: {
                    eq: "brand-guidelines-page/estuary-logos/estuary-logo-mono-on-light.png"
                }
            ) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
                publicURL
            }
            monoOnDark: file(
                relativePath: {
                    eq: "brand-guidelines-page/estuary-logos/estuary-logo-mono-on-dark.png"
                }
            ) {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
                publicURL
            }
        }
    `);

    const cards = [
        {
            key: 'color-on-light',
            image: (
                <GatsbyImage
                    image={data.colorOnLight.childImageSharp.gatsbyImageData}
                    alt="Estuary logo on light"
                />
            ),
            title: 'Color on light',
            description: 'Use the full-color version for light backgrounds.',
            publicURL: data.colorOnLight.publicURL,
        },
        {
            key: 'color-on-dark',
            image: (
                <GatsbyImage
                    image={data.colorOnDark.childImageSharp.gatsbyImageData}
                    alt="Estuary logo on dark"
                />
            ),
            title: 'Color on dark',
            description: 'Use the full-color version for dark backgrounds.',
            publicURL: data.colorOnDark.publicURL,
        },
        {
            key: 'mono-on-light',
            image: (
                <GatsbyImage
                    image={data.monoOnLight.childImageSharp.gatsbyImageData}
                    alt="Mono logo on light"
                />
            ),
            title: 'Mono on light',
            description: 'Use the one-color version for light backgrounds.',
            publicURL: data.monoOnLight.publicURL,
        },
        {
            key: 'mono-on-dark',
            image: (
                <GatsbyImage
                    image={data.monoOnDark.childImageSharp.gatsbyImageData}
                    alt="Mono logo on dark"
                />
            ),
            title: 'Mono on dark',
            description: 'Use the one-color version for dark backgrounds.',
            publicURL: data.monoOnDark.publicURL,
        },
    ];

    return (
        <section>
            <Container isVertical className={container}>
                <h2 className={sectionTitle}>
                    <span>Estuary</span> logo usage
                </h2>
                <ul>
                    {cards.map(
                        ({ key, image, title, description, publicURL }) => (
                            <Card
                                key={key}
                                image={image}
                                title={title}
                                description={description}
                                link={{
                                    id: `${linkIdPrefix}${key}${linkIdSuffix}`,
                                    fileName: `${key}${imgFileFormat}`,
                                    imagePath: publicURL,
                                }}
                            />
                        )
                    )}
                </ul>
            </Container>
        </section>
    );
}
