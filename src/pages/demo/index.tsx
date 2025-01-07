import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import { container } from './styles.module.less';

export const Head = () => <Seo title="Automate Data Streaming" />;

const sandBoxProps = [
    'allow-scripts',
    'allow-same-origin',
    'allow-popups',
].join(' ');

const Demo = () => {
    return (
        <Layout>
            <div className={container}>
                <iframe
                    allow="clipboard-write"
                    allowFullScreen
                    frameBorder="0"
                    loading="lazy"
                    sandbox={sandBoxProps}
                    src="https://demo.arcade.software/WkrVMY9VKYWmhaJmC9Ib?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
                    title="Estuary Flow Demo"
                />
            </div>
        </Layout>
    );
};

export default Demo;
