import PipelinesTable from '../../PipelinesTable';
import Container from '../../Container';
import LinkFilled from '../../LinksAndButtons/LinkFilled';
import { tableWrapper, title } from './styles.module.less';

const HowEstuaryFlowCompares = () => {
    return (
        <section>
            <Container isVertical>
                <h2 className={title}>
                    How <span>Estuary Flow</span> compares
                </h2>
                <div className={tableWrapper}>
                    <h3>Feature Comparison</h3>
                    <PipelinesTable />
                </div>
                <LinkFilled
                    id="view-comparisons-button/product-page"
                    href="/etl-tools/estuary-vs-fivetran/"
                    target="_blank"
                    aria-label="Estuary Flow Comparison versus Fivetran"
                >
                    View Comparisons
                </LinkFilled>
            </Container>
        </section>
    );
};

export default HowEstuaryFlowCompares;
