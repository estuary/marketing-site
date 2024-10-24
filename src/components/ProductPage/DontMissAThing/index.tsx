import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import NewsletterSignupForm from '../../NewsletterSignupForm';
import {
    FormFields,
    FormLabel,
    FormWrapper,
    IconWrapper,
    ImageWrapper,
    TermsAndConditions,
    Title,
} from './styles';

const DontMissAThing = () => {
    return (
        <DefaultWrapperDarkBlue>
            <FormWrapper>
                <ImageWrapper>
                    <StaticImage
                        placeholder="none"
                        alt="Subscribe to our newsletter"
                        src="../../../images/product-page/section-thirteen/news.png"
                    />
                </ImageWrapper>
                <FormFields>
                    <IconWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Email icon"
                            src="../../../svgs/product-page/section-thirteen/email-outlined.svg"
                        />
                    </IconWrapper>
                    <Title>DON&apos;T MISS A THING</Title>
                    <FormLabel htmlFor="newsletter-signup">
                        Join our newsletter to get best practices, events, and
                        news.
                    </FormLabel>
                    <NewsletterSignupForm inputPlaceholder="Enter your email" />
                    <TermsAndConditions>
                        By subscribing I agree with{' '}
                        <a href="/terms" target="_blank">
                            Terms and Conditions
                        </a>
                    </TermsAndConditions>
                </FormFields>
            </FormWrapper>
        </DefaultWrapperDarkBlue>
    );
};

export default DontMissAThing;
