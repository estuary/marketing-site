import { StaticImage } from 'gatsby-plugin-image';
import NewsletterSignupForm from '../../NewsletterSignupForm';
import Container from '../../Container';
import { formFields, iconWrapper, imageWrapper } from './styles.module.less';

const DontMissAThing = () => {
    return (
        <section>
            <Container isReverseColumnOnMobile>
                <div className={imageWrapper}>
                    <StaticImage
                        placeholder="none"
                        alt="Stay informed with our newsletter"
                        src="../../../images/product-page/section-thirteen/news.png"
                    />
                </div>
                <div className={formFields}>
                    <div className={iconWrapper}>
                        <StaticImage
                            placeholder="none"
                            alt="Email icon"
                            src="../../../svgs/product-page/section-thirteen/email-outlined.svg"
                        />
                    </div>
                    <h2>Don&apos;t miss a thing</h2>
                    <label htmlFor="newsletter-signup">
                        Join our newsletter to get best practices, events, and
                        news.
                    </label>
                    <NewsletterSignupForm inputPlaceholder="Enter your email" />
                    <p>
                        By subscribing I agree with{' '}
                        <a href="/terms/">Terms and Conditions</a>
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default DontMissAThing;
