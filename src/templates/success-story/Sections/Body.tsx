import React from 'react';
import { body, bodyWrapper, dynamicHtml } from '../styles.module.less';
import { ProcessedPost } from '../../../components/BlogPostProcessor';

const SuccessStoryBody = ({ content }) => {
    return (
        <section className={bodyWrapper}>
            <div className={body}>
                <ProcessedPost
                    body={content.data.childHtmlRehype.html}
                    className={dynamicHtml}
                />
            </div>
        </section>
    );
};

export default SuccessStoryBody;
