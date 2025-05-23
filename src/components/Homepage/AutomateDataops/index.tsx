import { StaticImage } from 'gatsby-plugin-image';
import { docsPageUrl } from '../../../../shared';
import Advantages from '../../Advantages';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';

const AutomateDataops = () => {
    return (
        <section>
            <Advantages
                title={<>Automate DataOps</>}
                image={
                    <StaticImage
                        quality={100}
                        placeholder="none"
                        alt="Schema evolution options"
                        src="../../../images/schema-evolution-options.png"
                    />
                }
                ctaButtons={
                    <OutboundLinkFilled
                        id="register-now-for-free-button/home-page"
                        href={docsPageUrl}
                        target="_blank"
                    >
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
                        title: 'Detailed logging and monitoring',
                    },
                ]}
                isImageOnTheLeft
            />
        </section>
    );
};

export default AutomateDataops;
