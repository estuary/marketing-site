import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import { ProcessedPost } from '../../../components/BlogPostProcessor';

const Topic = ({ Title, Description, Icon }) => {
    return (
        <div className="topic">
            <div className="icon">
                <GatsbyImage
                    alt={Title}
                    image={Icon.localFile.childImageSharp.gatsbyImageData}
                    loading="lazy"
                />
            </div>
            <div className="content">
                <p className="title">{Title}</p>
                <p className="description">{Description}</p>
            </div>
        </div>
    );
};

const CaseStudyAbout = ({ Title, Description, Topics }) => {
    return (
        <div className="about">
            <p className="title">{Title}</p>
            <div className="topics">
                {Topics.map((topic, index) => (
                    <Topic key={index} {...topic} />
                ))}
            </div>
            <div className="description">
                <ProcessedPost body={Description.data.childHtmlRehype.html} />
            </div>
        </div>
    );
};

export default CaseStudyAbout;
