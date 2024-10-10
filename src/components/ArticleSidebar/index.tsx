import React from 'react';
import ShareArticle from '../../templates/blog-post/ShareArticle';
import { RenderToc } from '../BlogPostToc';
import SidebarCta from '../SidebarCta';
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
}

const ArticleSidebar = ({ article, tableOfContents }: ArticleSidebarProps) => {
    return (
        <div className={container}>
            <div className={shareArticleDesktop}>
                <ShareArticle article={article} />
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
