import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import DeploymentOptions from '../../DeploymentOptions';

const optionsDescription = {
    public: 'Our standard option, fully managed for quick, hassle-free setup',
    private: 'Enhanced security by hosting Estuary within a private network',
    byoc: 'Deploy Estuary on your cloud infrastructure for complete control',
};

const keyFeatures = {
    public: [
        'Managed by Estuary',
        'Easy setup and zero configuration',
        'EU or US data processing regions',
    ],
    private: [
        'Private network data control',
        'Maximum security',
        'Compliance-ready',
    ],
    byoc: [
        'Full infrastructure control and customization',
        'Potential cost savings for cloud resources',
        'Total flexibility',
    ],
};

const DeploymentModes = () => (
    <section className={defaultWrapperGrey}>
        <DeploymentOptions
            title={
                <>
                    <span>Deployment modes</span> for every environment
                </>
            }
            buttonTitle="See Details"
            optionsDescription={optionsDescription}
            keyFeatures={keyFeatures}
            pageId="home-page"
        />
    </section>
);

export default DeploymentModes;
