import Container from '../../../Container';
import { defaultWrapperGrey } from '../../../../globalStyles/wrappers.module.less';
import { sectionText } from '../../styles.module.less';
import { TestimonialSectionContent } from '../../../../templates/solutions/shared';
import LinkOutlined from '../../../LinksAndButtons/LinkOutlined';
import {
    quoteBox,
    quoteTextMargin,
    additionalQuoteTextMargin,
} from './styles.module.less';

interface TestimonialProps {
    data: TestimonialSectionContent;
}

const Testimonial = ({ data }: TestimonialProps) => {
    return (
        <section className={defaultWrapperGrey}>
            <Container className={sectionText}>
                <div className={quoteBox}>
                    <div>
                        <h3>{data.quote.company}</h3>
                        <p
                            className={
                                !!data.quote.company
                                    ? additionalQuoteTextMargin
                                    : quoteTextMargin
                            }
                        >
                            {data.quote.text}
                        </p>
                        {data.quote.company ? (
                            <LinkOutlined
                                href={data.quote.successStoryUrl}
                                variant="secondary"
                            >
                                Success Story
                            </LinkOutlined>
                        ) : null}
                    </div>
                </div>
                <div>
                    <h2>
                        <span>{data.title.highlightedText}</span>{' '}
                        {data.title.normalText}
                    </h2>
                    <p>{data.description}</p>
                </div>
            </Container>
        </section>
    );
};

export default Testimonial;
