import React from 'react';
import { webinarsUrl } from '../../../../shared';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import { OutboundLinkFilled, OutboundLinkOutlined } from '../../OutboundLink';
import { buttonsWrapper, container, title } from './styles.module.less';

const SectionTen = () => {
    return (
        <section className={defaultWrapperGrey}>
            <div className={container}>
                <h2 className={title}>
                    <span>SEE HOW</span> ESTUARY CAN WORK FOR YOU AND YOUR DATA
                </h2>
                <div className={buttonsWrapper}>
                    <OutboundLinkFilled //TODO: move the styles of this button to LESS
                        href="https://dashboard.estuary.dev/register"
                        target="_blank"
                    >
                        Try Now
                    </OutboundLinkFilled>
                    <OutboundLinkOutlined //TODO: move the styles of this button to LESS
                        target="_blank"
                        href={webinarsUrl}
                    >
                        Let Us Show You
                    </OutboundLinkOutlined>
                </div>
            </div>
        </section>
    );
};

export default SectionTen;
