import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import { Vendor } from '../../../shared';
import SectionOne from '../../components/EtlToolsXvsYPage/SectionOne';

interface EtlToolsProps {
    data: {
        xVendor: Vendor;
        yVendor: Vendor;
        vendors: {
            nodes: Vendor[];
        };
    };
    pageContext: {
        xVendorId: string;
        yVendorId: string;
    };
}

const EtlTools = ({
    data: {
        xVendor,
        yVendor,
        vendors: { nodes: vendors },
    },
}: EtlToolsProps) => {
    return (
        <Layout>
            <SectionOne vendors={vendors} xVendor={xVendor} yVendor={yVendor} />
        </Layout>
    );
};

export const Head = () => {
    return (
        <Seo
            title="Best ETL, ELT, & CDC Tools Comparison"
            description="Find and compare the leading ETL, ELT, & CDC tools of 2024. Compare features, pricing, and performance to find the right solution for your data integration needs."
        />
    );
};

export default EtlTools;

export const pageQuery = graphql`
    query GetComparisons($xVendorId: String!, $yVendorId: String!) {
        xVendor: strapiComparison(id: { eq: $xVendorId }) {
            id
            name: Vendor_Name
            logo {
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            slugKey
        }
        yVendor: strapiComparison(id: { eq: $yVendorId }) {
            id
            name: Vendor_Name
            logo {
                localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            slugKey
        }
        vendors: allStrapiComparison(
            sort: { fields: Vendor_Name, order: ASC }
        ) {
            nodes {
                id
                name: Vendor_Name
                logo {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                slugKey
            }
        }
    }
`;
