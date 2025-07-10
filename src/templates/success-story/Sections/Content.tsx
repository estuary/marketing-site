import {
    sideContentStyle,
    description,
    about,
    topics,
    sideContentStyleHtml,
    contentContainer,
} from '../styles.module.less';
import { ProcessedHtml } from '../../../components/HtmlProcessor';
import Container from '../../../components/Container';
import Topic from '../Topic';

const Content = ({ content, Title, Description, Topics }) => {
    return (
        <section>
            <Container className={contentContainer}>
                <div className={sideContentStyle}>
                    <ProcessedHtml
                        body={content.data.childHtmlRehype.html}
                        className={sideContentStyleHtml}
                    />
                </div>
                <div className={about}>
                    <h2>{Title}</h2>
                    <div className={topics}>
                        {Topics.map((topic, index) => (
                            <Topic key={index} {...topic} />
                        ))}
                    </div>
                    <div className={description}>
                        <ProcessedHtml
                            body={Description.data.childHtmlRehype.html}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Content;
