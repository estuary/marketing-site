import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import Hero from '../../components/PartnersPage/Hero';
import WhyPartnerWithEstuary from '../../components/PartnersPage/WhyPartnerWithEstuary';
import Benefits from '../../components/PartnersPage/Benefits';
import JoinPartnerProgram from '../../components/PartnersPage/JoinPartnerProgram';
import SIPartners from '../../components/PartnersPage/SIPartners';
import ResourcesAndGettingStarted from '../../components/PartnersPage/ResourcesAndGettingStarted';
import ReferralIncentive from '../../components/PartnersPage/ReferralIncentive';
import ContactUs from '../../components/PartnersPage/ContactUs';

const Partners = () => {
    return (
        <Layout>
            <Hero />
            <WhyPartnerWithEstuary />
            <Benefits />
            <JoinPartnerProgram />
            <SIPartners />
            <ResourcesAndGettingStarted />
            <ReferralIncentive />
            <ContactUs />
        </Layout>
    );
};

export const Head = () => {
    const { metaImg } = useStaticQuery(graphql`
        query {
            metaImg: file(relativePath: { eq: "partners-page/handshake.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FIXED
                        width: 1200
                        height: 630
                        transformOptions: { fit: CONTAIN }
                        backgroundColor: "#fff"
                    )
                }
            }
        }
    `);

    return (
        <Seo
            title="Estuary Partner Program: Drive Growth with Real-Time Integration"
            description="Join the Estuary Partner Program to boost your data integration capabilities. Benefit from real-time solutions, collaborative marketing, referral rewards, and hands-on support."
            image={metaImg.childImageSharp.gatsbyImageData.images.fallback.src}
        />
    );
};

export default Partners;
