import { StaticImage } from 'gatsby-plugin-image';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import { docsPageUrl } from '../../../../shared';
import Advantages from '../../Advantages';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';

const AutomateDataops = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Advantages
                title={
                    <>
                        AUTOMATE DATAOPS
                    </>
                }
                subtitle="
                            ✅ Automated Schema Inference and Evolution
                            ✅ Fully-featured CLI
                            ✅ Declarative pipelines with YAML
                            ✅ Detailed logging and monitoring
                ."
                image={
                    <StaticImage
                        quality={100}
                        placeholder="none"
                        alt="Schema evolution options"
                        src="../../../images/schema-evolution-options.png"
                    />
                }
                ctaButtons={
                    <OutboundLinkFilled href={docsPageUrl} target="_blank">
                        Register Now for Free
                    </OutboundLinkFilled>
                }
                isImageOnTheLeft
            />
        </section>
    );
};

export default AutomateDataops;
