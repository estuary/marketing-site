import SecurityCertificates from '../../SecurityCertificates';

const AlwaysSecure = () => {
    return (
        <section>
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
