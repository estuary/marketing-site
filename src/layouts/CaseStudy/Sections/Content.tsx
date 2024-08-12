import React from 'react';

import { ProcessedPost } from '../../../components/BlogPostProcessor';

const CaseStudyContent = ({ content }) => {
    return (
        <div className="side-content">
            <ProcessedPost body={content.data.childHtmlRehype.html} />
        </div>
    );
};

export default CaseStudyContent;
