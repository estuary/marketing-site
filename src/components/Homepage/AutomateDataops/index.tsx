import { StaticImage } from 'gatsby-plugin-image';
import { docsPageUrl } from '../../../../shared';
import Advantages from '../../Advantages';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';

const AutomateDataops = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Advantages
                title={<>AUTOMATE DATAOPS</>}
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
                advantages={[
                    {
                        title: 'Automated Schema Inference and Evolution',
                    },
                    {
                        title: 'Fully-featured CLI',
                    },
                    {
                        title: 'Declarative pipelines with YAML',
                    },
                    {
                        title: 'Detailed logging and monitoring',
                    },
                ]}
                isImageOnTheLeft
            />
        </section>
    );
};

export default AutomateDataops;
