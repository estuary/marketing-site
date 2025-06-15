import Container from '../../components/Container';
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
        <Layout hasLightSections hasLightHeroSection>
            <section>
                <Container className={container} isVertical>
                    <div>
                        <h1>
                            Getting started with <span>Estuary Flow</span> in a
                            minute
                        </h1>
                        <p>
                            See how easy it is to move real-time data with just
                            a few clicks.
                        </p>
                    </div>
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
                </Container>
            </section>
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
