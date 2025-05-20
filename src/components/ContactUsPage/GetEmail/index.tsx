import NewsletterSignupForm from '../../NewsletterSignupForm';
import { dashboardRegisterUrl } from '../../../../shared';
import { container, title } from './styles.module.less';

const GetEmail = () => {
    return (
        <section>
            <div className={container}>
                <h2 className={title}>
                    Bring Real-Time Data from Any Source into your Warehouse
                </h2>
                <NewsletterSignupForm
                    inputPlaceholder="name@company.com"
                    buttonTitle="GET STARTED FOR FREE"
                    redirectUrl={dashboardRegisterUrl}
                />
            </div>
        </section>
    );
};

export default GetEmail;
