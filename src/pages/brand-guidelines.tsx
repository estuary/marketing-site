import Layout from '../components/Layout';
import Seo from '../components/seo';
import EstuaryLogoUsage from '../components/BrandGuidelinesPage/EstuaryLogoUsage';
import Hero from '../components/BrandGuidelinesPage/Hero';
import EstuaryColorPalette from '../components/BrandGuidelinesPage/EstuaryColorPalette';

const BrandGuidelinesPage = () => {
    return (
        <Layout>
            <Hero />
            <EstuaryLogoUsage />
            <EstuaryColorPalette />
        </Layout>
    );
};

export const Head = () => {
    return (
        <Seo
            title="Estuary Brand Guidelines"
            description="Discover Estuary's visual identity system, including official logo usage, brand color palette, typography, and company boilerplate messaging. Download assets and maintain brand consistency."
        />
    );
};

export default BrandGuidelinesPage;
