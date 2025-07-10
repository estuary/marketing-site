import { FC } from 'react';
import Layout from '../../../components/Layout';
import Hero from '../../../components/Solutions/Sections/Hero';
import { TemplatePageProps } from '../shared';

interface SolutionPageLayoutProps {
    solution: TemplatePageProps;
}

const SolutionPageLayout: FC<SolutionPageLayoutProps> = ({
    solution,
    children,
}) => {
    return (
        <Layout>
            <Hero
                title={solution.hero.title}
                description={solution.hero.description}
                image={solution.hero.image}
                videoUrl={solution.hero.videoUrl}
                primaryButton={solution.hero.primaryButton}
                secondaryButton={solution.hero.secondaryButton}
            />
            {children}
        </Layout>
    );
};

export default SolutionPageLayout;
