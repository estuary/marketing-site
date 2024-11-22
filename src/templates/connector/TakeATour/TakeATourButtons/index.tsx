import React from 'react';
import { webinarsUrl } from '../../../../../shared';
import LinkFilled from '../../../../components/LinksAndButtons/LinkFilled';
import OutboundLinkOutlined from '../../../../components/LinksAndButtons/OutboundLinkOutlined';

const TakeATourButtons = () => {
    return (
        <>
            <LinkFilled
                className="take-a-tour-button"
                target="_blank"
                href="/why/"
            >
                Self-Guided Tour [1 min]
            </LinkFilled>
            <OutboundLinkOutlined
                className="take-a-tour-button"
                target="_blank"
                href={webinarsUrl}
            >
                Product Demo [30 min]
            </OutboundLinkOutlined>
        </>
    );
};

export default TakeATourButtons;
