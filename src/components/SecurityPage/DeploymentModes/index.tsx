import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import DeploymentOptions from '../../DeploymentOptions';

const optionsDescription = {
    public: 'A fully managed SaaS option for fast, low-maintenance setup. Ideal for small to mid-sized organizations with standard security needs.',
    private:
        'Run Estuary Flow in your own secure environment, maintaining control while meeting strict compliance requirements. Suited for enterprises handling sensitive data.',
    byoc: 'Deploy Estuary Flow in your cloud, offering maximum customization and control over infrastructure and data residency. Best for organizations with established cloud setups looking for flexibility and cost efficiency.',
};

const DeploymentModes = () => (
    <section className={defaultWrapperGrey}>
        <DeploymentOptions
            title={
                <>
                    <span>DEPLOYMENT MODES</span> THAT FIT ANY ENVIRONMENT
                </>
            }
            optionsDescription={optionsDescription}
            buttonTitle="Learn more"
        />
    </section>
);

export default DeploymentModes;
