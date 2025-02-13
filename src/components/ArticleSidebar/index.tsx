import { RenderToc } from '../BlogPostToc';
import SidebarCta from '../SidebarCta';
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
            <SidebarCta ctaButtonid={ctaButtonid} />
        </div>
    );
};

export default ArticleSidebar;
