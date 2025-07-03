import Seo from '../../../components/seo';
import { SolutionTemplateProps } from '../shared';

const SolutionTemplatePageHead = ({
    data: {
        solution,
        // site: {
        //     siteMetadata: { siteUrl },
        // },
    },
}: SolutionTemplateProps) => {
    const ogImage = solution.metadata.image
        ? `https://estuary-marketing--pr884-brenosalv-feature-86-p0p5v3c4.web.app${solution.metadata.image.localFile.childImageSharp?.gatsbyImageData.images.fallback?.src}`
        : undefined;
    console.log(ogImage);
    return (
        <Seo
            title={solution.metadata.title}
            description={solution.metadata.description}
            image={ogImage}
        />
    );
};

export default SolutionTemplatePageHead;
