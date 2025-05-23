import Container from '../../Container';
import LinkFilled from '../../LinksAndButtons/LinkFilled';
import { Connectors } from '../shared';
import RelatedIntegrationLinks from './RelatedIntegrationLinks';
import { container } from './styles.module.less';

const RelatedIntegrations = ({
    sourceConnector,
    destConnector,
}: Connectors) => {
    return (
        <section>
            <Container isVertical className={container}>
                <h2>
                    Related integrations with{' '}
                    <span>{sourceConnector.title}</span>
                </h2>
                <RelatedIntegrationLinks
                    sourceConnector={sourceConnector}
                    destConnector={destConnector}
                />
                <LinkFilled
                    id="explore-all-integrations/related-integrations-section/integration-page"
                    href="/integrations/"
                    target="_blank"
                >
                    Explore all Integrations
                </LinkFilled>
            </Container>
        </section>
    );
};

export default RelatedIntegrations;
