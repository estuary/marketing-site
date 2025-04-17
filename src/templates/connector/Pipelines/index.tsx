import PipelinesTable from '../../../components/PipelinesTable';
import Container from '../../../components/Container';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import LinkFilled from '../../../components/LinksAndButtons/LinkFilled';
import { lineBreak, tableWrapper, sectionTitle } from './styles.module.less';

const Pipelines = () => {
    return (
        <section className={defaultWrapperDark}>
            <Container isVertical>
                <h2 className={sectionTitle}>
                    Pipelines as <span>fast</span> as Kafka,{' '}
                    <span className={lineBreak} />
                    <span>easy</span> as managed ELT/ETL,{' '}
                    <span className={lineBreak} />
                    <span>cheaper</span> than building it.
                </h2>
                <div className={tableWrapper}>
                    <h3>Feature Comparison</h3>
                    <PipelinesTable />
                    <LinkFilled
                        id="detailed-comparison-button/connector-page"
                        href="/etl-tools/estuary-vs-fivetran/"
                    >
                        Detailed Comparison
                    </LinkFilled>
                </div>
            </Container>
        </section>
    );
};

export default Pipelines;
