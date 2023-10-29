import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage} from "gatsby-plugin-image"



const CaseStudyConnectGo = () => {

    const post = {
        "title": "Connect&GO refreshes visitor data in Snowflake every 15 seconds, while saving 30% on ELT costs",
        "hero": {
            "localFile": {
                "childImageSharp": {
                    "gatsbyImageData": {
                        "layout": "constrained",
                        "placeholder": {
                            "fallback": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAE/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABTSaY1qgkf//EABgQAQEAAwAAAAAAAAAAAAAAAAIBAAMQ/9oACAEBAAEFArspIdojw9//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAEDAQE/AXKMP//EABURAQEAAAAAAAAAAAAAAAAAAAAS/9oACAECAQE/AbU//8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIAICFRgf/aAAgBAQAGPwI4HYrbFf/EABoQAQACAwEAAAAAAAAAAAAAAAEAERAhMWH/2gAIAQEAAT8hZhK5HIzYhyadkAbAt8l4/9oADAMBAAIAAwAAABA03//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAEDAQE/EID/AP/EABURAQEAAAAAAAAAAAAAAAAAABEA/9oACAECAQE/EGTv/8QAHRABAAIBBQEAAAAAAAAAAAAAAQARITFBUWFxsf/aAAgBAQABPxCzdQAadeHqFiit4PsDV30xHmhQ/ZZS62MFQcT/2Q=="
                        },
                        "images": {
                            "fallback": {
                                "src": "/static/f7b092e6aed0dee23f297e72156b7ae9/fd74c/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.jpg",
                                "srcSet": "/static/f7b092e6aed0dee23f297e72156b7ae9/78171/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.jpg 100w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/58e86/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.jpg 200w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/fd74c/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.jpg 400w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/4b382/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.jpg 800w",
                                "sizes": "(min-width: 400px) 400px, 100vw"
                            },
                            "sources": [
                                {
                                    "srcSet": "/static/f7b092e6aed0dee23f297e72156b7ae9/de940/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.avif 100w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/5a451/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.avif 200w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/a5f3a/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.avif 400w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/f3206/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.avif 800w",
                                    "type": "image/avif",
                                    "sizes": "(min-width: 400px) 400px, 100vw"
                                },
                                {
                                    "srcSet": "/static/f7b092e6aed0dee23f297e72156b7ae9/83e39/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.webp 100w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/53a86/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.webp 200w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/dad47/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.webp 400w,\n/static/f7b092e6aed0dee23f297e72156b7ae9/e64c7/e498f3_katerina_pavlyuchkova_FQYCJ_Sq_ER_0_unsplash_scaled_1_3bc08225bc.webp 800w",
                                    "type": "image/webp",
                                    "sizes": "(min-width: 400px) 400px, 100vw"
                                }
                            ]
                        },
                        "width": 400,
                        "height": 235
                    }
                }
            }
        }
    
    }

    return (
        <Layout headerTheme="light">
            <article className="case-study-post-root">
                <header>
                    <h2 className="case-study-header">Case Study</h2>
                    <div className="case-study-logo">
                        {post.hero ? (
                            <GatsbyImage
                                alt={post.title}
                                image={
                                    post.hero.localFile.childImageSharp
                                        .gatsbyImageData
                                }
                                loading="eager"
                            />
                        ) : null}
                    </div>
                    <h2 className="case-study-title">{post.title}</h2>
                </header>
            </article>
        </Layout>
    )
}

export default CaseStudyConnectGo