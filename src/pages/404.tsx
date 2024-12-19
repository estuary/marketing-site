import Layout from '../components/Layout';
import Seo from '../components/seo';
import { globalMaxWidth } from '../globalStyles/sections.module.less';

const NotFoundPage = () => {
    return (
        <Layout>
            <div className={globalMaxWidth}>
                <h1>404: Not Found</h1>
                <p>
                    You just hit a route that doesn&#39;t exist... the sadness.
                </p>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
