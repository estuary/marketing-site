import { GatsbyImage } from 'gatsby-plugin-image';
import Container from '../../../Container';
import { defaultWrapperGrey } from '../../../../globalStyles/wrappers.module.less';
import { sectionText } from '../../styles.module.less';
import { TestimonialSectionContent } from '../../../../templates/solutions/shared';
import LinkOutlined from '../../../LinksAndButtons/LinkOutlined';
import { getSlugifiedText } from '../../../../../shared';
import {
    quoteBox,
    quoteTextMargin,
    additionalQuoteTextMargin,
    quoteContentWrapper,
} from './styles.module.less';

interface TestimonialProps {
    data: TestimonialSectionContent;
}

const Testimonial = ({ data }: TestimonialProps) => {
    return (
        <section className={defaultWrapperGrey}>
            <Container className={sectionText}>
                <div className={quoteBox}>
                    <div className={quoteContentWrapper}>
                        {data.quote.companyLogo ? (
                            <GatsbyImage
                                image={
                                    data.quote.companyLogo?.localFile
                                        ?.childImageSharp?.gatsbyImageData
                                }
                                alt={data.quote.companyLogo.alternativeText}
                            />
                        ) : null}
                        {data.quote.companyName ? (
                            <h3>{data.quote.companyName}</h3>
                        ) : null}
                        <p
                            className={
                                !!data.quote.companyName
                                    ? additionalQuoteTextMargin
                                    : quoteTextMargin
                            }
                        >
                            {data.quote.text}
                        </p>
                        {data.quote.companyName ? (
                            <LinkOutlined
                                id={`${getSlugifiedText(data.quote.companyName)}-success-story-button-solution-page`}
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
                        <span>{data.sectionTitle.highlightedText}</span>{' '}
                        {data.sectionTitle.normalText}
                    </h2>
                    <p>{data.description}</p>
                </div>
            </Container>
        </section>
    );
};

export default Testimonial;
