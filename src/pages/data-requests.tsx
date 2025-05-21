import Layout from '../components/Layout';
import Seo from '../components/seo';
import { globalMaxWidth } from '../globalStyles/sections.module.less';

// - COMPLIANCE WARNING -
// DO NOT INCLUDE TRACKING ON THIS PAGE
// DO NOT CHANGE THIS PATH WITHOUT CHECKING WITH OTHERS
//      path is checked in `gatsby-ssr`
//      path is checked in Tag Manager
const DataRequestPage = () => {
    return (
        <Layout showReleaseBanner={false}>
            <div className={globalMaxWidth}>
                <p>
                    To exercise your data-protection rights, please complete our{' '}
                    <a
                        href="https://forms.gle/uhKXUE7AnJsM3fc96"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Data Request Form
                    </a>{' '}
                    or email{' '}
                    <a
                        href="mailto:privacy@estuary.dev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        privacy@estuary.dev
                    </a>
                    .
                </p>

                <p>
                    Please do not send sensitive documents (e.g., passport scans
                    or other identification) via email. If verification is
                    required, we will provide a secure upload link.
                </p>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Estuary data-protection rights" />;

export default DataRequestPage;
