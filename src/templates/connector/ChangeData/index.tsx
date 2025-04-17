import DoneIcon from '@mui/icons-material/Done';
import { useMediaQuery } from '@mui/material';
import { ConnectorType } from '../../../../shared';
import ConnectorsLink from '../../../components/ConnectorsLink';
import Container from '../../../components/Container';
import OutboundLink from '../../../components/LinksAndButtons/OutboundLink';
import Cards from './components/Cards';
import {
    wrapper,
    containerImage,
    containerContent,
    observation,
    description,
    lineBreak,
} from './styles.module.less';

type ChangeDataProps = {
    connector: {
        id?: string;
        title?: string;
        type?: ConnectorType;
    };
};

const ChangeData = ({ connector: { id, title, type } }: ChangeDataProps) => {
    const isColumn = useMediaQuery('(max-width:1485px)');

    return (
        <section className={wrapper}>
            <Container>
                <div className={containerImage}>
                    <Cards />
                </div>
                <div className={containerContent}>
                    <h2>
                        <span>Real-time</span>
                        <span className={lineBreak} />
                        high throughput
                    </h2>
                    <p className={description}>
                        Point a connector and replicate changes{' '}
                        {type === 'capture' ? 'from' : 'to'} {title} in
                        &#60;100ms. Leverage high-availability, high-throughput
                        Change Data Capture.
                        <span className={lineBreak} />
                        Or choose from 100s of batch and real-time connectors to
                        move and transform data using ELT and ETL.
                    </p>
                    <ul>
                        <li>
                            <DoneIcon
                                htmlColor="var(--blue)"
                                fontSize="medium"
                            />
                            <span>
                                Ensure your {title} insights always reflect the
                                latest data by connecting your databases to{' '}
                                {title} with change data capture.
                            </span>
                        </li>
                        <li>
                            <DoneIcon
                                htmlColor="var(--blue)"
                                fontSize="medium"
                            />
                            <span>
                                Or connect critical SaaS apps to {title} with
                                real-time data pipelines.
                            </span>
                        </li>
                    </ul>
                    <ConnectorsLink
                        defaultDestinationId={id}
                        defaultSourceId={id}
                        connectorType={type}
                        direction={isColumn ? 'column' : 'row'}
                    />
                    <p className={observation}>
                        <span>Don&apos;t see a connector?</span>
                        <OutboundLink
                            id="request-connector-link/connector-page"
                            href="https://github.com/estuary/connectors/issues/new?assignees=&labels=new+connector&projects=&template=request-new-connector-form.yaml&title=Request+a+connector+to+%5Bcapture+from+%7C+materialize+to%5D+%5Byour+favorite+system%5D"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Request and our team will get back to you in 24
                            hours
                        </OutboundLink>
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default ChangeData;
