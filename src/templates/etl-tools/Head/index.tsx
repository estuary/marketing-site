import { graphql, useStaticQuery } from 'gatsby';
import Seo from '../../../components/seo';

const VendorComparisonHead = ({ data: { xVendor, yVendor } }) => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(relativePath: { eq: "vendor-comparison.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 1200, height: 630)
                }
            }
        }
    `);

    return (
        <Seo
            title={`${xVendor.name} vs ${yVendor.name}: Data Integration Tools Compared`}
            description={`Compare ${xVendor.name} vs ${yVendor.name}. Discover their key differences, ETL/ELT features, and pricing to choose the right data integration platform.`}
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default VendorComparisonHead;
