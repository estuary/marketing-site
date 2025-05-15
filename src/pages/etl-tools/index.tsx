import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import { Vendor } from '../../../shared';
import Hero from '../../components/EtlToolsPage/Hero';
import LearnMoreArticles from '../../components/EtlToolsPage/LearnMoreArticles';
import ListOfComparisons from '../../components/EtlToolsPage/ListOfComparisons';
import Breadcrumbs from '../../components/Breadcrumbs';

interface EtlToolsProps {
    data: {
        estuaryVendor: Vendor;
        vendors: {
            nodes: Vendor[];
        };
    };
}

const EtlTools = ({
    data: {
        estuaryVendor,
        vendors: { nodes: vendors },
    },
}: EtlToolsProps) => {
    return (
        <Layout>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        title: 'Home',
                        href: '/',
                    },
                    {
                        title: 'Product',
                        href: '/product',
                    },
                    {
                        title: 'All comparisons',
                    },
                ]}
            />
            <Hero vendors={vendors} />
            <LearnMoreArticles />
            <ListOfComparisons
                vendors={vendors}
                estuaryVendor={estuaryVendor}
            />
        </Layout>
    );
};

export const Head = () => {
    return (
        <Seo
            title="ETL, ELT, AND CDC Tools Comparison Center"
            description="Learn how different ETL, ELT, and CDC vendors compare across nearly 40 different criteria and 9 different types of data integration projects."
        />
    );
};

export default EtlTools;

export const pageQuery = graphql`
    query GetAllComparisons {
        estuaryVendor: strapiComparison(
            id: { eq: "d829928c-c473-5421-ac0a-f03c45b14993" }
        ) {
            id
        }
        vendors: allStrapiComparison(sort: { Vendor_Name: ASC }) {
            nodes {
                id
                name: Vendor_Name
                logo {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED)
                        }
                    }
                }
                slugKey
            }
        }
    }
`;
