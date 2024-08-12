import React from 'react';

import { ProcessedPost } from '../../../components/BlogPostProcessor';

const CaseStudyBody = ({ content }) => {
    return (
        <div className="body">
            <ProcessedPost body={content.data.childHtmlRehype.html} />
        </div>
    );
};

export default CaseStudyBody;
