import Seo from '../../../components/seo';
import { SolutionTemplateProps } from '../shared';

const SolutionTemplatePageHead = ({
    data: {
        solution,
        site: {
            siteMetadata: { siteUrl },
        },
    },
}: SolutionTemplateProps) => {
    const ogImage = solution.metadata.image
        ? `${siteUrl}${solution.metadata.image.localFile.childImageSharp?.gatsbyImageData.images.fallback?.src}`
        : undefined;

    return (
        <Seo
            title={solution.metadata.title}
            description={solution.metadata.description}
            image={ogImage}
        />
    );
};

export default SolutionTemplatePageHead;
