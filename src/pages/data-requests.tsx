import Layout from '../components/Layout';
import Seo from '../components/seo';
import { globalMaxWidth } from '../globalStyles/sections.module.less';

// - COMPLIANCE WARNING -
// DO NOT INCLUDE TRACKING ON THIS PAGE
// DO NOT CHANGE THIS PATH WITHOUT CHECKING WITH OTHERS
//      path is checked in `gatsby-ssr`
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

// - COMPLIANCE WARNING -
// You will need to talk with Compliance before changing the title
// It should match as closely as possible to GDPR language and is very specific
export const Head = () => <Seo title="Data Subject Access Request" />;

export default DataRequestPage;
