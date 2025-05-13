import Layout from '../components/Layout';
import Seo from '../components/seo';
import EstuaryLogoUsage from '../components/BrandGuidelinesPage/EstuaryLogoUsage';
import Hero from '../components/BrandGuidelinesPage/Hero';
import EstuaryColorPalette from '../components/BrandGuidelinesPage/EstuaryColorPalette';
import EstuaryTypography from '../components/BrandGuidelinesPage/EstuaryTypography';
import CompanyBoilerplate from '../components/BrandGuidelinesPage/CompanyBoilerplate';

const BrandGuidelinesPage = () => {
    return (
        <Layout>
            <Hero />
            <EstuaryLogoUsage />
            <EstuaryColorPalette />
            <EstuaryTypography />
            <CompanyBoilerplate />
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
