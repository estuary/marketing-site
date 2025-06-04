import HubSpotFormWrapper from '../HubSpot/FormWrapper';
import OutboundLink from '../LinksAndButtons/OutboundLink';
import { contactUsFormHelpText, redirectLink } from './styles.module.less';

const Form = () => {
    return (
        <>
            <HubSpotFormWrapper formId="698e6716-f38b-4bd5-9105-df9ba220e29b" />
            <p className={contactUsFormHelpText}>
                If you don&apos;t see the form, please{' '}
                <OutboundLink
                    href="https://share.hsforms.com/1aY5nFvOLS9WRBd-boiDimw553hf"
                    target="__blank"
                    className={redirectLink}
                >
                    click here
                </OutboundLink>{' '}
                to open it in a new tab.
            </p>
        </>
    );
};

export default Form;
