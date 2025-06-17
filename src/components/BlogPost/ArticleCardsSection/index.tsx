import { FC } from 'react';
import { container } from './styles.module.less';

interface ArticleCardsSectionProps {
    sectionTitle: string;
}

const ArticleCardsSection: FC<ArticleCardsSectionProps> = ({
    sectionTitle,
    children,
}) => {
    return (
        <section>
            <div className={container}>
                <h2>{sectionTitle}</h2>
                {children}
            </div>
        </section>
    );
};

export default ArticleCardsSection;
