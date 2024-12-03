import React from 'react';
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
}

const ArticleSidebar = ({
    article,
    tableOfContents,
    shareArticleSectionTitle,
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
            <SidebarCta />
        </div>
    );
};

export default ArticleSidebar;
