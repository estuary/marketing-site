import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { container, backgroundImage } from './styles.module.less';

interface WhyPageStepsBackgroundProps
    extends React.BaseHTMLAttributes<HTMLDivElement> {
    activePage: number;
}

const WhyPageStepsBackground = ({
    children,
    className,
    activePage,
}: WhyPageStepsBackgroundProps) => {
    const images = useStaticQuery(graphql`
        query {
            steps07: file(relativePath: { eq: "welcome-bg.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        quality: 90
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        layout: FULL_WIDTH
                        width: 1180
                    )
                }
            }
            steps123: file(relativePath: { eq: "flow-images/step1-bg.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        quality: 90
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        layout: FULL_WIDTH
                        width: 1180
                    )
                }
            }
            steps45: file(relativePath: { eq: "flow-images/step4-bg.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        quality: 90
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        layout: FULL_WIDTH
                        width: 1180
                    )
                }
            }
            step6: file(relativePath: { eq: "flow-images/step6-bg.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        quality: 90
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        layout: FULL_WIDTH
                        width: 1180
                    )
                }
            }
        }
    `);

    const steps07Image = getImage(images.steps07.childImageSharp);
    const steps123Image = getImage(images.steps123.childImageSharp);
    const steps45Image = getImage(images.steps45.childImageSharp);
    const step6Image = getImage(images.step6.childImageSharp);

    const stepsImage = [0, 7].includes(activePage)
        ? steps07Image
        : [1, 2, 3].includes(activePage)
          ? steps123Image
          : [4, 5].includes(activePage)
            ? steps45Image
            : step6Image;

    return (
        <div className={container}>
            {stepsImage ? (
                <GatsbyImage
                    alt=""
                    image={stepsImage}
                    className={clsx(backgroundImage)}
                />
            ) : null}
            <div className={className}>{children}</div>
        </div>
    );
};

export default WhyPageStepsBackground;
