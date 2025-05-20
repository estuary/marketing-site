import { body, dynamicHtml } from '../styles.module.less';
import { ProcessedPost } from '../../../components/BlogPostProcessor';

const SuccessStoryBody = ({ content }) => {
    return (
        <section>
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
