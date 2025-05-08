import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import { ReactNode } from 'react';
import Container from '../Container';
import {
    container,
    badgesWrapper,
    rightColumn,
    sectionStyle,
    darkSection,
    darkContainer,
} from './styles.module.less';
import ConnectorsMasonry from './ConnectorsMasonry';

interface ConnectorsMasonrySectionProps {
    title: ReactNode;
    description: ReactNode;
    isDarkTheme?: boolean;
}

const ConnectorsMasonrySection = ({
    title,
    description,
    isDarkTheme = false,
}: ConnectorsMasonrySectionProps) => {
    return (
        <section
            className={clsx(sectionStyle, isDarkTheme ? darkSection : null)}
        >
            <Container
                className={clsx(container, isDarkTheme ? darkContainer : null)}
                isReverseColumnOnMobile
            >
                <h2>{title}</h2>
                <div className={rightColumn}>
                    <div className={badgesWrapper}>
                        <StaticImage
                            src="../../images/trusted-partner-badges/ai-data-cloud-products-snowflake-partner.png"
                            alt="AI data-cloud products partner"
                            placeholder="blurred"
                            quality={100}
                            width={120}
                            height={120}
                        />
                        <StaticImage
                            src="../../images/trusted-partner-badges/databricks-technology-partner-validated.png"
                            alt="AI data-cloud products partner"
                            placeholder="blurred"
                            quality={100}
                            width={120}
                            height={120}
                        />
                    </div>
                    <p>{description}</p>
                </div>
            </Container>
            <ConnectorsMasonry isDarkTheme={isDarkTheme} />
        </section>
    );
};

export default ConnectorsMasonrySection;
