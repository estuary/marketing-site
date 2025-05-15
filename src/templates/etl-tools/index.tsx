import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import { Vendor } from '../../../shared';
import Hero from '../../components/EtlToolsXvsYPage/Hero';
import Comparison from '../../components/EtlToolsXvsYPage/Comparison';
import GettingStartedSection from '../../components/GettingStartedSection';
import Breadcrumbs from '../../components/Breadcrumbs';
import VendorComparisonHead from './Head';

interface EtlToolsProps {
    data: {
        xVendor: Vendor;
        yVendor: Vendor;
        estuaryVendor: Vendor;
        vendors: {
            nodes: Vendor[];
        };
    };
}

const EtlTools = ({
    data: {
        xVendor,
        yVendor,
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
                        href: '/etl-tools',
                    },
                    {
                        title: `${xVendor.name} vs ${yVendor.name}`,
                    },
                ]}
            />
            <Hero vendors={vendors} xVendor={xVendor} yVendor={yVendor} />
            <Comparison
                xVendor={xVendor}
                yVendor={yVendor}
                estuaryVendor={estuaryVendor}
                allVendors={vendors.map((vendor) => ({
                    id: vendor.id,
                    name: vendor.name,
                    slugKey: vendor.slugKey,
                }))}
            />
            <GettingStartedSection />
        </Layout>
    );
};

export default EtlTools;

export const Head = VendorComparisonHead;

export const pageQuery = graphql`
    query GetComparisons(
        $xVendorId: String!
        $yVendorId: String!
        $estuaryVendorId: String!
    ) {
        xVendor: strapiComparison(id: { eq: $xVendorId }) {
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
            useCases: UseCases {
                databaseReplication: Database_Replication
                dataMigration: Data_Migration {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                dataIntegration: Data_Integration {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                aiPipelines: AI_Pipelines {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                apacheIcebergSupport: Apache_Iceberg_Support {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                operationalAnalytics: Operational_Analytics {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                streamProcessing: Stream_Processing {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
            }
            connectors: Connectors {
                count: Count
                streaming: Streaming
                thirdParty: Third_Party {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                customSdk: Custom_SDK {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                requestAConnector: Request_a_Connector {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
            }
            features: Features {
                batchingStreaming: Batching_Streaming
                deliveryGuarantee: Delivery_Guarantee
                loadWhiteMethod: Load_Write_Method
                dataOps: Data_Ops {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                eltTransforms: ELT_Transforms {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                etlTransforms: ETL_Transforms {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                schemaInference: Schema_Inference {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                storeReplay: Store_Replay {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                timeTravel: Time_Travel {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                snapshots: Snapshots {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                easeOfUse {
                    cellTitle
                    subText {
                        data {
                            subText
                        }
                    }
                }
                deploymentOptions
                support {
                    cellTitle
                    subText {
                        data {
                            subText
                        }
                    }
                }
            }
            deployment: Deployment {
                abilities: Abilities {
                    perfMinLatency: Perf_Min_Latency
                    reliability: Reliability
                    scalability: Scalability
                }
                security: Security {
                    socTwo {
                        icon: Icon
                        subText: Sub_Text {
                            data {
                                subText: Sub_Text
                            }
                        }
                    }
                    dataSourceAuth: Data_Source_Auth
                    encryption: Encryption
                    hipaaCompliance {
                        icon: Icon
                        subText: Sub_Text {
                            data {
                                subText: Sub_Text
                            }
                        }
                    }
                }
            }
            cost: Cost {
                vendor: Vendor {
                    numberOfDollarSigns {
                        array: strapi_json_value
                    }
                    subText {
                        data {
                            subText
                        }
                    }
                }
                dataEngineering: Data_Engineering {
                    numberOfDollarSigns {
                        array: strapi_json_value
                    }
                    subText {
                        data {
                            subText
                        }
                    }
                }
                admin: Admin {
                    numberOfDollarSigns {
                        array: strapi_json_value
                    }
                    subText {
                        data {
                            subText
                        }
                    }
                }
            }
            introductoryDetails {
                introduction: Introduction {
                    data {
                        introduction: Introduction
                    }
                }
                pros: Pros {
                    data {
                        pros: Pros
                    }
                }
                cons: Cons {
                    data {
                        cons: Cons
                    }
                }
                pricing: Pricing {
                    data {
                        pricing: Pricing
                    }
                }
            }
        }
        yVendor: strapiComparison(id: { eq: $yVendorId }) {
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
            useCases: UseCases {
                databaseReplication: Database_Replication
                dataMigration: Data_Migration {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                dataIntegration: Data_Integration {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                aiPipelines: AI_Pipelines {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                apacheIcebergSupport: Apache_Iceberg_Support {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                operationalAnalytics: Operational_Analytics {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                streamProcessing: Stream_Processing {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
            }
            connectors: Connectors {
                count: Count
                streaming: Streaming
                thirdParty: Third_Party {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                customSdk: Custom_SDK {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                requestAConnector: Request_a_Connector {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
            }
            features: Features {
                batchingStreaming: Batching_Streaming
                deliveryGuarantee: Delivery_Guarantee
                loadWhiteMethod: Load_Write_Method
                dataOps: Data_Ops {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                eltTransforms: ELT_Transforms {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                etlTransforms: ETL_Transforms {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                schemaInference: Schema_Inference {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                storeReplay: Store_Replay {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                timeTravel: Time_Travel {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                snapshots: Snapshots {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                easeOfUse {
                    cellTitle
                    subText {
                        data {
                            subText
                        }
                    }
                }
                deploymentOptions
                support {
                    cellTitle
                    subText {
                        data {
                            subText
                        }
                    }
                }
            }
            deployment: Deployment {
                abilities: Abilities {
                    perfMinLatency: Perf_Min_Latency
                    reliability: Reliability
                    scalability: Scalability
                }
                security: Security {
                    socTwo {
                        icon: Icon
                        subText: Sub_Text {
                            data {
                                subText: Sub_Text
                            }
                        }
                    }
                    dataSourceAuth: Data_Source_Auth
                    encryption: Encryption
                    hipaaCompliance {
                        icon: Icon
                        subText: Sub_Text {
                            data {
                                subText: Sub_Text
                            }
                        }
                    }
                }
            }
            cost: Cost {
                vendor: Vendor {
                    numberOfDollarSigns {
                        array: strapi_json_value
                    }
                    subText {
                        data {
                            subText
                        }
                    }
                }
                dataEngineering: Data_Engineering {
                    numberOfDollarSigns {
                        array: strapi_json_value
                    }
                    subText {
                        data {
                            subText
                        }
                    }
                }
                admin: Admin {
                    numberOfDollarSigns {
                        array: strapi_json_value
                    }
                    subText {
                        data {
                            subText
                        }
                    }
                }
            }
            introductoryDetails {
                introduction: Introduction {
                    data {
                        introduction: Introduction
                    }
                }
                pros: Pros {
                    data {
                        pros: Pros
                    }
                }
                cons: Cons {
                    data {
                        cons: Cons
                    }
                }
                pricing: Pricing {
                    data {
                        pricing: Pricing
                    }
                }
            }
        }
        estuaryVendor: strapiComparison(id: { eq: $estuaryVendorId }) {
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
            useCases: UseCases {
                databaseReplication: Database_Replication
                dataMigration: Data_Migration {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                dataIntegration: Data_Integration {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                aiPipelines: AI_Pipelines {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                apacheIcebergSupport: Apache_Iceberg_Support {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                operationalAnalytics: Operational_Analytics {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                streamProcessing: Stream_Processing {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
            }
            connectors: Connectors {
                count: Count
                streaming: Streaming
                thirdParty: Third_Party {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                customSdk: Custom_SDK {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                requestAConnector: Request_a_Connector {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
            }
            features: Features {
                batchingStreaming: Batching_Streaming
                deliveryGuarantee: Delivery_Guarantee
                loadWhiteMethod: Load_Write_Method
                dataOps: Data_Ops {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                eltTransforms: ELT_Transforms {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                etlTransforms: ETL_Transforms {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                schemaInference: Schema_Inference {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                storeReplay: Store_Replay {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                timeTravel: Time_Travel {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                snapshots: Snapshots {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                easeOfUse {
                    cellTitle
                    subText {
                        data {
                            subText
                        }
                    }
                }
                deploymentOptions
                support {
                    cellTitle
                    subText {
                        data {
                            subText
                        }
                    }
                }
            }
            deployment: Deployment {
                abilities: Abilities {
                    perfMinLatency: Perf_Min_Latency
                    reliability: Reliability
                    scalability: Scalability
                }
                security: Security {
                    socTwo {
                        icon: Icon
                        subText: Sub_Text {
                            data {
                                subText: Sub_Text
                            }
                        }
                    }
                    dataSourceAuth: Data_Source_Auth
                    encryption: Encryption
                    hipaaCompliance {
                        icon: Icon
                        subText: Sub_Text {
                            data {
                                subText: Sub_Text
                            }
                        }
                    }
                }
            }
            cost: Cost {
                vendor: Vendor {
                    numberOfDollarSigns {
                        array: strapi_json_value
                    }
                    subText {
                        data {
                            subText
                        }
                    }
                }
                dataEngineering: Data_Engineering {
                    numberOfDollarSigns {
                        array: strapi_json_value
                    }
                    subText {
                        data {
                            subText
                        }
                    }
                }
                admin: Admin {
                    numberOfDollarSigns {
                        array: strapi_json_value
                    }
                    subText {
                        data {
                            subText
                        }
                    }
                }
            }
            introductoryDetails {
                introduction: Introduction {
                    data {
                        introduction: Introduction
                    }
                }
                pros: Pros {
                    data {
                        pros: Pros
                    }
                }
                cons: Cons {
                    data {
                        cons: Cons
                    }
                }
                pricing: Pricing {
                    data {
                        pricing: Pricing
                    }
                }
            }
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
