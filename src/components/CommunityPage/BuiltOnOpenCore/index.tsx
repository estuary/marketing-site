import clsx from 'clsx';
import { iconWrapper } from '../styles.module.less';
import ColoredGithubLogo from '../../../svgs/colored-github-logo.svg';
import OutboundLinkFilled from '../../LinksAndButtons/OutboundLinkFilled';
import { estuaryFlowGithubUrl } from '../../../../shared';
import { container, wrapper, lightIconWrapper } from './styles.module.less';

const iconSize = 20;

const BuiltOnOpenCore = () => {
    return (
        <section className={wrapper}>
            <div className={container}>
                <div className={clsx(iconWrapper, lightIconWrapper)}>
                    <ColoredGithubLogo color="var(--dark-blue)" />
                </div>
                <h2>
                    Built on <span>Open Core</span>
                </h2>
                <p>
                    Estuary Flow is open core. Check out the codebase, follow
                    development, or get involved.
                </p>
                <OutboundLinkFilled href={estuaryFlowGithubUrl} target="_blank">
                    <ColoredGithubLogo
                        color="var(--white)"
                        width={iconSize}
                        height={iconSize}
                    />{' '}
                    Explore Estuary Flow on GitHub
                </OutboundLinkFilled>
            </div>
        </section>
    );
};

export default BuiltOnOpenCore;
