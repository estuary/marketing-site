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
            productDemoBackground: file(
                relativePath: { eq: "product-demo-background.png" }
            ) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1180) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
            steps07: file(relativePath: { eq: "welcome-bg.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1180) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
            steps123: file(relativePath: { eq: "flow-images/step1-bg.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1180) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
            steps45: file(relativePath: { eq: "flow-images/step4-bg.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1180) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
            step6: file(relativePath: { eq: "flow-images/step6-bg.png" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1180) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    const mainContentWrapperImageFluid =
        images.productDemoBackground.childImageSharp.fluid;
    const steps07ImageFluid = images.steps07.childImageSharp.fluid;
    const steps123ImageFluid = images.steps123.childImageSharp.fluid;
    const steps45ImageFluid = images.steps45.childImageSharp.fluid;
    const step6ImageFluid = images.step6.childImageSharp.fluid;

    const stepsImageFluid = [0, 7].includes(activePage)
        ? steps07ImageFluid
        : [1, 2, 3].includes(activePage)
          ? steps123ImageFluid
          : [4, 5].includes(activePage)
            ? steps45ImageFluid
            : step6ImageFluid;

    const commonBackgroundImageProps = {
        fadeIn: false,
        critical: true,
    };

    return (
        <main className="why-estuary">
            <Navigation activePage={activePage} setActivePage={setActivePage} />
            <BackgroundImage
                fluid={mainContentWrapperImageFluid}
                className="main-content-wrap"
                {...commonBackgroundImageProps}
            >
                <BackgroundImage
                    fluid={stepsImageFluid}
                    className="mac-bg"
                    style={{ backgroundSize: '100%' }}
                    {...commonBackgroundImageProps}
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
