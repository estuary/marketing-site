import { StaticImage } from 'gatsby-plugin-image';
import ContactUsForm from '../../ContactUsForm';
import { section } from './styles.module.less';

const ContactUs = () => (
    <section id="contact-us/form-section/partners-page" className={section}>
        <div>
            <StaticImage
                src="../../../images/partners-page/project-partnership.png"
                alt="Estuary referral incentive for partner program referrals."
                quality={100}
                placeholder="blurred"
            />
        </div>
        <div>
            <ContactUsForm />
        </div>
    </section>
);

export default ContactUs;
