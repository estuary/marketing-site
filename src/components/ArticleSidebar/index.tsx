import { dashboardRegisterUrl } from '../../../shared';
import { RenderToc } from '../BlogPostToc';
import OutboundLinkFilled from '../LinksAndButtons/OutboundLinkFilled';
import ShareArticle from '../ShareArticle';
import {
    container,
    shareArticleDesktop,
    tableOfContentsWrapper,
} from './styles.module.less';

interface ArticleSidebarProps {
    article: {
        title: string;
        slug: string;
    };
    tableOfContents: any;
    shareArticleSectionTitle?: string;
    ctaButtonid: string;
}

const ArticleSidebar = ({
    article,
    tableOfContents,
    shareArticleSectionTitle,
    ctaButtonid,
}: ArticleSidebarProps) => {
    return (
        <div className={container}>
            <div className={shareArticleDesktop}>
                <ShareArticle
                    article={article}
                    sectionTitle={shareArticleSectionTitle}
                />
            </div>
            {tableOfContents.length > 0 ? (
                <div className={tableOfContentsWrapper}>
                    <RenderToc items={tableOfContents} />
                </div>
            ) : null}
            <OutboundLinkFilled
                id={ctaButtonid}
                href={dashboardRegisterUrl}
                target="_blank"
            >
                Start Building For Free
            </OutboundLinkFilled>
        </div>
    );
};

export default ArticleSidebar;
