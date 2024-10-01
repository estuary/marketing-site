import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import { Vendor } from '../../../shared';
import {
    SectionOne,
    SectionThree,
    SectionTwo,
} from '../../components/EtlToolsXvsYPage';

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
            <SectionTwo xVendor={xVendor} yVendor={yVendor} />
            <SectionThree />
        </Layout>
    );
};

export const Head = () => {
    return (
        <Seo
            title="Data Integration Tools Compared"
            description="Compare X vs Y. Discover their key differences, ETL/ELT features, and pricing to choose the right data integration platform."
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
