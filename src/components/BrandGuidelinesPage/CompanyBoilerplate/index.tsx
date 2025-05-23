import { StaticImage } from 'gatsby-plugin-image';
import Container from '../../Container';
import { sectionTitle } from '../styles.module.less';
import {
    container,
    innerContainer,
    imageWrapper,
    valuePropositionList,
} from './styles.module.less';
import ValueProposition from './ValueProposition';

const CompanyBoilerplate = () => (
    <section>
        <Container isVertical className={container}>
            <h2 className={sectionTitle}>Value Proposition</h2>
            <Container className={innerContainer}>
                <div className={imageWrapper}>
                    <StaticImage
                        src="../../../images/brand-guidelines-page/company-boilerplate-section-image.png"
                        alt="Estuary Flow connects and unifies data systems for real-time and batch integration"
                        quality={100}
                        placeholder="blurred"
                    />
                </div>
                <div className={valuePropositionList}>
                    <ValueProposition
                        title="One sentence"
                        text={
                            <p>
                                Estuary Flow unifies real-time and batch data
                                integration, eliminating data silos and
                                complexity at enterprise scale.
                            </p>
                        }
                    />
                    <ValueProposition
                        title="Short form"
                        text={
                            <p>
                                Estuary is the enterprise-grade platform that
                                simplifies and unifies your data pipelines,
                                providing frictionless integration of streaming,
                                batch, and historical data, ensuring
                                reliability, scalability, and operational
                                efficiency, all without writing a single line of
                                code.
                            </p>
                        }
                    />
                    <ValueProposition
                        title="Long Form"
                        text={
                            <>
                                <p>
                                    Estuary empowers enterprises to bridge the
                                    gap between batch and real-time data,
                                    consolidating complex integration pipelines
                                    into one reliable platform. Designed
                                    specifically for data architects, engineers,
                                    and enterprise leaders, Estuary eliminates
                                    the need for disparate data tools, providing
                                    a unified solution for streaming, batch, and
                                    historical data processing.
                                </p>
                                <p>
                                    With petabyte-scale capabilities, built-in
                                    schema evolution, automated deduplication,
                                    and an intuitive no-code interface, Estuary
                                    ensures data consistency, reduces
                                    operational complexity, and accelerates your
                                    organization&apos;s analytics, AI, and
                                    business decisions — all while maintaining
                                    enterprise-grade security, governance, and
                                    scalability.
                                </p>
                            </>
                        }
                    />
                </div>
            </Container>
        </Container>
    </section>
);

export default CompanyBoilerplate;
