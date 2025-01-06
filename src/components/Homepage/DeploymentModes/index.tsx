import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import DeploymentOptions from '../../DeploymentOptions';

const optionsDescription = {
    public: "Estuary Flow's standard SaaS option, fully managed for quick, hassle-free setup.",
    private:
        'Offers enhanced security by hosting Estuary Flow within a private network, combining SaaS ease with more control.',
    byoc: 'Deploy Estuary Flow on your cloud infrastructure for complete control.',
};

const keyFeatures = {
    public: [
        'Managed by Estuary',
        'Easy setup and minimal configuration',
        'Multiple data processing regions',
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
                    <span>DEPLOYMENT MODES</span> FOR EVERY ENVIRONMENT
                </>
            }
            buttonTitle="See Details"
            optionsDescription={optionsDescription}
            keyFeatures={keyFeatures}
        />
    </section>
);

export default DeploymentModes;
