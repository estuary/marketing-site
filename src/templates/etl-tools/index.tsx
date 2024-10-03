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
            <SectionOne vendors={vendors} xVendor={xVendor} yVendor={yVendor} />
            <SectionTwo
                xVendor={xVendor}
                yVendor={yVendor}
                estuaryVendor={estuaryVendor}
            />
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
            useCases: UseCases {
                odsReplication: ODS_Replication {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                historicalAnalytics: Historial_Analytics
                databaseReplication: Database_Replication
                dataScienceMl: Data_Science_ML {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
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
                adminApi: Admin_API {
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
                workflow: Workflow {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
            }
            deployment: Deployment {
                options: Options
                abilities: Abilities {
                    perfMinLatency: Perf_Min_Latency
                    reliability: Reliability
                    scalability: Scalability
                }
                security: Security {
                    dataSourceAuth: Data_Source_Auth
                    encryption: Encryption
                }
            }
            support: Support {
                support: Support {
                    cellTitle
                    subText {
                        data {
                            subText
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
                        gatsbyImageData
                    }
                }
            }
            slugKey
            useCases: UseCases {
                odsReplication: ODS_Replication {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                historicalAnalytics: Historial_Analytics
                databaseReplication: Database_Replication
                dataScienceMl: Data_Science_ML {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
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
                adminApi: Admin_API {
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
                workflow: Workflow {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
            }
            deployment: Deployment {
                options: Options
                abilities: Abilities {
                    perfMinLatency: Perf_Min_Latency
                    reliability: Reliability
                    scalability: Scalability
                }
                security: Security {
                    dataSourceAuth: Data_Source_Auth
                    encryption: Encryption
                }
            }
            support: Support {
                support: Support {
                    cellTitle
                    subText {
                        data {
                            subText
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
        estuaryVendor: strapiComparison(
            id: { eq: "d829928c-c473-5421-ac0a-f03c45b14993" }
        ) {
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
            useCases: UseCases {
                odsReplication: ODS_Replication {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
                historicalAnalytics: Historial_Analytics
                databaseReplication: Database_Replication
                dataScienceMl: Data_Science_ML {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
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
                adminApi: Admin_API {
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
                workflow: Workflow {
                    icon: Icon
                    subText: Sub_Text {
                        data {
                            subText: Sub_Text
                        }
                    }
                }
            }
            deployment: Deployment {
                options: Options
                abilities: Abilities {
                    perfMinLatency: Perf_Min_Latency
                    reliability: Reliability
                    scalability: Scalability
                }
                security: Security {
                    dataSourceAuth: Data_Source_Auth
                    encryption: Encryption
                }
            }
            support: Support {
                support: Support {
                    cellTitle
                    subText {
                        data {
                            subText
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
