import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { textWrapper } from '../styles.module.less';
import Container from '../../Container';
import {
    container,
    badgesWrapper,
    rightColumn,
    sectionStyle,
} from './styles.module.less';
import ConnectorsMasonry from './ConnectorsMasonry';

const SecureDataMovement = () => {
    return (
        <section className={sectionStyle}>
            <Container
                className={clsx(textWrapper, container)}
                isReverseColumnOnMobile
            >
                <h2>
                    <span>Secure data movement between</span> any source{' '}
                    <span>and</span> destination
                </h2>
                <div className={rightColumn}>
                    <div className={badgesWrapper}>
                        <StaticImage
                            src="../../../images/trusted-partner-badges/ai-data-cloud-products-snowflake-partner.png"
                            alt="AI data-cloud products partner"
                            placeholder="blurred"
                            quality={100}
                            width={120}
                            height={120}
                        />
                        <StaticImage
                            src="../../../images/trusted-partner-badges/databricks-technology-partner-validated.png"
                            alt="AI data-cloud products partner"
                            placeholder="blurred"
                            quality={100}
                            width={120}
                            height={120}
                        />
                    </div>
                    <p>
                        Easily connect, synchronize and activate your data
                        whether it&apos;s for AI, operations, data warehouses,
                        or beyond.
                    </p>
                </div>
            </Container>
            <ConnectorsMasonry />
        </section>
    );
};

export default SecureDataMovement;
