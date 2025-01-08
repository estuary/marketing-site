import Layout from '../../components/Layout';
import Seo from '../../components/seo';
import { container } from './styles.module.less';

const sandBoxProps = [
    'allow-scripts',
    'allow-same-origin',
    'allow-popups',
].join(' ');

const Demo = () => {
    return (
        <Layout>
            <div className={container}>
                <div>
                    <iframe
                        allow="clipboard-write"
                        allowFullScreen
                        frameBorder="0"
                        sandbox={sandBoxProps}
                        src="https://demo.arcade.software/WkrVMY9VKYWmhaJmC9Ib?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
                        title="Estuary Flow Demo"
                    />
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Estuary Flow Demo: Automate Data Streaming in Minutes"
        description="Explore Estuary Flow’s demo to see how easily you can automate both real-time and batch data integration, manage pipelines, and stream data to your destination in minutes."
    />
);

export default Demo;
