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
                    PIPELINES AS <span>FAST</span> AS KAFKA,{' '}
                    <span className={lineBreak} />
                    <span>EASY</span> AS MANAGED ELT/ETL,{' '}
                    <span className={lineBreak} />
                    <span>CHEAPER</span> THAN BUILDING IT.
                </h2>
                <div className={tableWrapper}>
                    <h3>Feature Comparison</h3>
                    <PipelinesTable />
                    <LinkFilled href="/etl-tools/estuary-vs-fivetran/">
                        Detailed Comparison
                    </LinkFilled>
                </div>
            </Container>
        </section>
    );
};

export default Pipelines;
