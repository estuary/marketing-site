import { ReactNode } from 'react';
import { container } from './styles.module.less';

interface ArticleCardsSectionProps {
    sectionTitle: string;
    articleCards: ReactNode;
}

const ArticleCardsSection = ({
    sectionTitle,
    articleCards,
}: ArticleCardsSectionProps) => {
    return (
        <section>
            <div className={container}>
                <h2>{sectionTitle}</h2>
                {articleCards}
            </div>
        </section>
    );
};

export default ArticleCardsSection;
