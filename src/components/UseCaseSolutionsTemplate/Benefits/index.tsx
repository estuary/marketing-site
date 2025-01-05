import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { BenefitsSectionContent } from '../../../templates/use-case-solutions';
import Container from '../../Container';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Card from '../Card';
import { wrapper } from './styles.module.less';

interface BenefitsProps {
    data: BenefitsSectionContent;
}

const NON_ALPHANUMERIC_EXCEPT_DOT_REGEX = /[^a-z0-9.]+/g;

const Benefits = ({ data }: BenefitsProps) => {
    const images = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    relativeDirectory: {
                        eq: "use-case-solutions-template/benefits"
                    }
                }
            ) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData(
                                width: 800
                                placeholder: BLURRED
                                quality: 100
                            )
                        }
                    }
                }
            }
        }
    `);

    const imageMap = React.useMemo(() => {
        const map: Record<string, any> = {};
        images.allFile.edges.forEach(({ node }) => {
            const imageData = getImage(node.childImageSharp);
            if (imageData?.images.fallback?.src) {
                const imageName = imageData.images.fallback.src
                    .split('/')
                    .pop();
                if (imageName) {
                    map[imageName] = imageData;
                }
            }
        });
        return map;
    }, [images]);

    return (
        <section className={defaultWrapperGrey}>
            <Container className={wrapper} isVertical>
                <div>
                    <h2>
                        <span>{data.title.highlightedText}</span>{' '}
                        {data.title.normalText}
                    </h2>
                    <p>{data.description}</p>
                </div>
                <ul>
                    {data.benefitItems.map((benefit) => {
                        const imageTitle = `${benefit.toLowerCase().replaceAll(NON_ALPHANUMERIC_EXCEPT_DOT_REGEX, '-')}png`;
                        const imageData = imageMap[imageTitle];

                        return (
                            <li key={imageTitle}>
                                <Card
                                    tag="Benefits"
                                    text={benefit}
                                    image={
                                        imageData ? (
                                            <GatsbyImage
                                                image={imageData}
                                                alt={`Benefit - ${benefit}`}
                                            />
                                        ) : null
                                    }
                                />
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
};

export default Benefits;
