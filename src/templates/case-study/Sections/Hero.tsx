import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const CaseStudyHero = ({ title, description, image }) => {
    return (
        <header className="above-the-fold">
            <div className="content">
                <h2>{title}</h2>
                <h1>{description}</h1>
            </div>
            <div className="logo">
                <GatsbyImage alt={title} image={image} loading="eager" />
            </div>
        </header>
    );
};

export default CaseStudyHero;
