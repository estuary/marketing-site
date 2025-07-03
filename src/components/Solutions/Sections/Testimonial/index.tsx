import { GatsbyImage } from 'gatsby-plugin-image';
import Container from '../../../Container';
import { sectionText } from '../../styles.module.less';
import { TestimonialSectionContent } from '../../../../templates/solutions/shared';
import LinkOutlined from '../../../LinksAndButtons/LinkOutlined';
import { getSlugifiedText } from '../../../../../shared';
import SectionTitle from '../../SectionTitle';
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
        <section>
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
                        {data.quote.companyName &&
                        data.quote.successStoryUrl ? (
                            <LinkOutlined
                                id={`${getSlugifiedText(data.quote.companyName)}-success-story-button/solution-page`}
                                href={data.quote.successStoryUrl}
                                variant="secondary"
                            >
                                Success Story
                            </LinkOutlined>
                        ) : null}
                    </div>
                </div>
                <div>
                    <SectionTitle sectionTitle={data.sectionTitle} />
                    <p>{data.description}</p>
                </div>
            </Container>
        </section>
    );
};

export default Testimonial;
