import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { textWrapper } from '../styles.module.less';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import FiveStarsIcon from '../../../svgs/five-stars.svg';
import {
    container,
    badgesWrapper,
    addBadge,
    rightColumn,
    starsWrapper,
} from './styles.module.less';
import ConnectorsMasonry from './ConnectorsMasonry';

const InnovateFaster = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <Container
                className={clsx(textWrapper, container)}
                isReverseColumnOnMobile
            >
                <h2>
                    <span>SECURE DATA MOVEMENT BETWEEN</span> ANY SOURCE{' '}
                    <span>AND</span> DESTINATION
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
                        <div className={addBadge}>
                            <span>+</span>
                        </div>
                        <div className={starsWrapper}>
                            <FiveStarsIcon color="#4EFFF2" />
                            <p>And more trusted partners</p>
                        </div>
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

export default InnovateFaster;
