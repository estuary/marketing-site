import { body, dynamicHtml } from '../styles.module.less';
import { ProcessedHtml } from '../../../components/BlogPostProcessor';

const SuccessStoryBody = ({ content }) => {
    return (
        <section>
            <div className={body}>
                <ProcessedHtml
                    body={content.data.childHtmlRehype.html}
                    className={dynamicHtml}
                />
            </div>
        </section>
    );
};

export default SuccessStoryBody;
