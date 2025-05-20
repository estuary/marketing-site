import { StaticImage } from 'gatsby-plugin-image';
import Advantages from '../../Advantages';
import { sectionSevenAdvantages } from '../advantages';
import { docsPageUrl } from '../../../../shared';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';

const ModernDataops = () => {
    return (
        <section>
            <Advantages
                isDarkTheme
                isImageOnTheLeft
                icon={
                    <StaticImage
                        placeholder="none"
                        alt="Boost Efficiency with flowctl: Automate DataOps, Integrate Tooling, and Streamline Schema Evolution"
                        src="../../../svgs/product-page/section-seven/use-modern-dataops.svg"
                    />
                }
                title={
                    <>
                        Use modern <span>DataOps</span>
                    </>
                }
                subtitle="Rely on built-in data pipeline best practices, integrate tooling, and automate DataOps to improve productivity and reduce downtime."
                image={
                    <StaticImage
                        placeholder="none"
                        alt="Schema evolution options"
                        src="../../../images/schema-evolution-options.png"
                        quality={100}
                    />
                }
                advantages={sectionSevenAdvantages}
                ctaButtons={
                    <OutboundLinkFilled
                        id="see-the-docs-button/product-page"
                        href={docsPageUrl}
                        target="_blank"
                    >
                        See The Docs
                    </OutboundLinkFilled>
                }
            />
        </section>
    );
};

export default ModernDataops;
