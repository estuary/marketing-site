import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import NewsletterSignupForm from '../../NewsletterSignupForm';
import Container from '../../Container';
import { formFields, iconWrapper, imageWrapper } from './styles.module.less';

const DontMissAThing = () => {
    return (
        <DefaultWrapperDarkBlue>
            <Container isReverseColumnOnMobile>
                <div className={imageWrapper}>
                    <StaticImage
                        placeholder="none"
                        alt="Subscribe to our newsletter"
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
                    <h2>DON&apos;T MISS A THING</h2>
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
        </DefaultWrapperDarkBlue>
    );
};

export default DontMissAThing;
