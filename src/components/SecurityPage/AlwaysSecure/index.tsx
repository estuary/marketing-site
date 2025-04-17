import SecurityCertificates from '../../SecurityCertificates';
import { defaultWrapperDarkBlue } from '../../../globalStyles/wrappers.module.less';

const AlwaysSecure = () => {
    return (
        <section className={defaultWrapperDarkBlue}>
            <SecurityCertificates
                isDarkTheme
                title={
                    <>
                        Your data is <span>always secure</span>
                    </>
                }
                subtitle="Estuary is built from the ground up to be as secure as possible."
            />
        </section>
    );
};

export default AlwaysSecure;
