import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import {
    SectionOne,
    SectionTwo,
    SectionThree,
} from '../../components/EtlToolsPage';
import Seo from '../../components/seo';
import { Vendor } from '../../../shared';

interface EtlToolsProps {
    data: {
        vendors: {
            nodes: Vendor[];
        };
    };
}

const EtlTools = ({
    data: {
        vendors: { nodes: vendors },
    },
}: EtlToolsProps) => {
    return (
        <Layout>
            <SectionOne vendors={vendors} />
            <SectionTwo />
            <SectionThree vendors={vendors} />
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
    query GetAllComparisons {
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
