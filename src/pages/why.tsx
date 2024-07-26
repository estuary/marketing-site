import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import * as React from 'react';
import { Navigation, Step } from '../components/Why';
import Seo from '../components/seo';

export const Head = () => <Seo title="Automate Data Streaming" />;

const WhyEstuary = () => {
    const [activePage, setActivePage] = React.useState(0);

    const images = useStaticQuery(graphql`
        query {
            steps: allFile(
                filter: {
                    relativePath: {
                        in: [
                            "welcome-bg.png"
                            "flow-images/step1-bg.png"
                            "flow-images/step4-bg.png"
                            "flow-images/step6-bg.png"
                            "product-demo-background.png"
                        ]
                    }
                }
            ) {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            fluid(quality: 90, maxWidth: 1180) {
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                }
            }
        }
    `);

    const imageMap = {
        'welcome-bg.png': images.steps.edges.find(
            (edge) => edge.node.relativePath === 'welcome-bg.png'
        ).node.childImageSharp.fluid,
        'flow-images/step1-bg.png': images.steps.edges.find(
            (edge) => edge.node.relativePath === 'flow-images/step1-bg.png'
        ).node.childImageSharp.fluid,
        'flow-images/step4-bg.png': images.steps.edges.find(
            (edge) => edge.node.relativePath === 'flow-images/step4-bg.png'
        ).node.childImageSharp.fluid,
        'flow-images/step6-bg.png': images.steps.edges.find(
            (edge) => edge.node.relativePath === 'flow-images/step6-bg.png'
        ).node.childImageSharp.fluid,
        'product-demo-background.png': images.steps.edges.find(
            (edge) => edge.node.relativePath === 'product-demo-background.png'
        ).node.childImageSharp.fluid,
    };

    const mainContentWrapperImageFluid =
        imageMap['product-demo-background.png'];

    const stepsImageFluid = [0, 7].includes(activePage)
        ? imageMap['welcome-bg.png']
        : [1, 2, 3].includes(activePage)
          ? imageMap['flow-images/step1-bg.png']
          : [4, 5].includes(activePage)
            ? imageMap['flow-images/step4-bg.png']
            : imageMap['flow-images/step6-bg.png'];

    return (
        <main className="why-estuary">
            <Navigation activePage={activePage} setActivePage={setActivePage} />
            <BackgroundImage
                fluid={mainContentWrapperImageFluid}
                fadeIn={false}
                critical={true}
                className="main-content-wrap"
            >
                <BackgroundImage
                    fluid={stepsImageFluid}
                    fadeIn={false}
                    critical={true}
                    className="mac-bg"
                    style={{ backgroundSize: '100%' }}
                >
                    <Step
                        activePage={activePage}
                        setActivePage={setActivePage}
                    />
                </BackgroundImage>
                <div className="steps-controls">
                    <button
                        className="prev-step"
                        onClick={() =>
                            setActivePage(Math.max(activePage - 1, 0))
                        }
                        disabled={activePage === 0}
                    >
                        <span>Previous</span>
                    </button>
                    <button
                        className="next-step"
                        onClick={() =>
                            setActivePage(Math.min(activePage + 1, 7))
                        }
                        disabled={activePage === 7}
                    >
                        <span>Next</span>
                    </button>
                </div>
            </BackgroundImage>
        </main>
    );
};

export default WhyEstuary;
