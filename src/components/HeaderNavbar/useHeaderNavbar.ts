import { graphql, useStaticQuery } from "gatsby"

const useHeaderNavbar = () => {
  const queryResults = useStaticQuery(graphql`
    query GetNavData {
      allStrapiProductComparisonPage {
        nodes {
          Slug
          their_name
        }
      }
      allStrapiCaseStudy {
        nodes {
          Slug
          Title
        }
      }
      allStrapiNavbar {
        nodes {
          promobar_label
          promobar_link
          navbar_links {
            Name
            Link
            navbar_link_sections {
              Title
              MobileShowTitle
              MobileShowElement
              Items {
                Name
                Description
                Link
                Icon {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        layout: FIXED
                        width: 20
                        height: 20
                        placeholder: NONE
                      )
                    }
                  }
                }
              }
              Image {
                ButtonLabel
                ButtonLink
                Image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        layout: FIXED
                        width: 300
                        height:200
                        placeholder: NONE
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return {
    caseStudyData: queryResults.allStrapiCaseStudy.nodes,
    comparisonPageData: queryResults.allStrapiProductComparisonPage.nodes,
    navbarData: queryResults.allStrapiNavbar.nodes[0] || {},
  }
}

export default useHeaderNavbar