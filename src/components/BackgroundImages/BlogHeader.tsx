import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

const BlogHeaderBackground = (props: React.BaseHTMLAttributes<HTMLDivElement>) => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "blog-post-background-image.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    // @ts-ignore
    <BackgroundImage
      Tag="div"
      fadeIn={false}
      critical
      className="blog-post-header"
      fluid={data.background.childImageSharp.fluid}
      backgroundColor="#f9fafc"
      {...{ ...props, children: undefined }}
    >
      {props.children}
    </BackgroundImage>
  );
};

export default BlogHeaderBackground;
