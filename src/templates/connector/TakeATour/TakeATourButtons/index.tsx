import { webinarsUrl } from '../../../../../shared';
import LinkFilled from '../../../../components/LinksAndButtons/LinkFilled';
import OutboundLinkOutlined from '../../../../components/LinksAndButtons/OutboundLinkOutlined';
import { takeATourButton } from '../styles.module.less';

const TakeATourButtons = () => {
    return (
        <>
            <LinkFilled
                className={takeATourButton}
                target="_blank"
                href="/why/"
            >
                Self-Guided Tour [1 min]
            </LinkFilled>
            <OutboundLinkOutlined
                className={takeATourButton}
                target="_blank"
                href={webinarsUrl}
                variant="secondary"
            >
                Product Demo [30 min]
            </OutboundLinkOutlined>
        </>
    );
};

export default TakeATourButtons;
