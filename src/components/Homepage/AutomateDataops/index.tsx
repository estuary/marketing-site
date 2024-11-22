import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import { docsPageUrl } from '../../../../shared';
import Advantages from '../../Advantages';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';

const AutomateDataops = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Advantages
                icon={<SingleDataflowIcon color="#5072EB" />}
                title={
                    <>
                        AUTOMATE <span>DATAOPS</span>
                    </>
                }
                subtitle="Use schema inference, evolution, and automation along
                        with a complete CLI and API to implement true agile
                        DataOps that can handle constant change without breaking
                        pipelines."
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
                        See the Docs
                    </OutboundLinkFilled>
                }
                isImageOnTheLeft
            />
        </section>
    );
};

export default AutomateDataops;
