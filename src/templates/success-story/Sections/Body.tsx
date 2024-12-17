import React from 'react';
import { body, dynamicHtml } from '../styles.module.less';
import { ProcessedPost } from '../../../components/BlogPostProcessor';

const SuccessStoryBody = ({ content }) => {
    return (
        <section className={body}>
            <ProcessedPost
                body={content.data.childHtmlRehype.html}
                className={dynamicHtml}
            />
        </section>
    );
};

export default SuccessStoryBody;
