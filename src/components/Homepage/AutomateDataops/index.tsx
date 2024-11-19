import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import SingleDataflowIcon from '../../../svgs/metric-single-dataflow.svg';
import { docsPageUrl } from '../../../../shared';
import Container from '../../Container';
import { OutboundLinkFilled } from '../../OutboundLink';
import {
    iconWrapper,
    leftColumn,
    rightColumn,
    wrapper,
} from './styles.module.less';

const AutomateDataops = () => {
    return (
        <section className={wrapper}>
            <Container isReverseColumnOnMobile>
                <div className={leftColumn}>
                    <StaticImage
                        quality={100}
                        placeholder="none"
                        alt="Schema evolution options"
                        src="../../../images/schema-evolution-options.png"
                    />
                </div>
                <div className={rightColumn}>
                    <div className={iconWrapper}>
                        <SingleDataflowIcon color="#5072EB" />
                    </div>
                    <h2>
                        <span>AUTOMATE </span>
                        <span>DATAOPS</span>
                    </h2>
                    <p>
                        Use schema inference, evolution, and automation along
                        with a complete CLI and API to implement true agile
                        DataOps that can handle constant change without breaking
                        pipelines.
                    </p>
                    <OutboundLinkFilled href={docsPageUrl} target="_blank">
                        See the Docs
                    </OutboundLinkFilled>
                </div>
            </Container>
        </section>
    );
};

export default AutomateDataops;
