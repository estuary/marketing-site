import { dashboardRegisterUrl } from '../../../shared';
import { RenderToc } from '../BlogPostToc';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';
import { container, tableOfContentsWrapper } from './styles.module.less';

interface ArticleSidebarProps {
    tableOfContents: any;
}

const ArticleSidebar = ({ tableOfContents }: ArticleSidebarProps) => {
    return (
        <div className={container}>
            {tableOfContents.length > 0 ? (
                <div className={tableOfContentsWrapper}>
                    <RenderToc items={tableOfContents} />
                </div>
            ) : null}
            <OutboundLinkFilled href={dashboardRegisterUrl}>
                Start Building For Free
            </OutboundLinkFilled>
        </div>
    );
};

export default ArticleSidebar;
