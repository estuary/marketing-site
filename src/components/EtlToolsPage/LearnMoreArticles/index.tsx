import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { container } from '../styles.module.less';
import Container from '../../Container';
import { cardsWrapper } from './styles.module.less';
import Card from './Card';

const slugPrefix = '/blog';

const LearnMoreArticles = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical className={container}>
                <h2>Learn more about ETL, ELT, and CDC alternatives</h2>
                <div className={cardsWrapper}>
                    <Card
                        linkId="read-link-1-comparisons/all-comparisons-page"
                        title="The Data Engineer's Guide to ELT Alternatives"
                        buttonHref={`${slugPrefix}/ELT-alternatives-guide/`}
                    />
                    <Card
                        linkId="read-link-2-comparisons/all-comparisons-page"
                        title="The Data Engineer's Guide to ETL Alternatives"
                        buttonHref={`${slugPrefix}/ETL-alternatives-guide/`}
                    />
                    <Card
                        linkId="read-link-3-comparisons/all-comparisons-page"
                        title="The Data Engineer's Guide to CDC for Analytics, Ops, and AI Pipelines"
                        buttonHref={`${slugPrefix}/CDC-comparison-guide/`}
                    />
                </div>
            </Container>
        </section>
    );
};

export default LearnMoreArticles;
