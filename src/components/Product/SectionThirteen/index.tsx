import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { ButtonFilled } from '../../../globalStyles';
import { DefaultWrapperDarkBlue } from '../../../styles/wrappers';
import {
    Form,
    FormFields,
    IconWrapper,
    ImageWrapper,
    Input,
    InputAndButton,
    InputIconWrapper,
    Subtitle,
    TermsAndConditions,
    Title,
} from './styles';

const SectionThirteen = () => {
    return (
        <DefaultWrapperDarkBlue>
            <Form id="newsletter-signup">
                <ImageWrapper>
                    <StaticImage
                        placeholder="none"
                        alt="Subscribe to our newsletter"
                        src="../../../images/product-page/section-thirteen/news.png"
                        layout="constrained"
                    />
                </ImageWrapper>
                <FormFields>
                    <IconWrapper>
                        <StaticImage
                            placeholder="none"
                            alt="Email icon"
                            src="../../../svgs/product-page/section-thirteen/email-outlined.svg"
                            layout="constrained"
                        />
                    </IconWrapper>
                    <Title>DON&apos;T MISS A THING</Title>
                    <Subtitle>
                        Join our newsletter to get best practices, events, and
                        news.
                    </Subtitle>
                    <InputAndButton>
                        <InputIconWrapper>
                            <StaticImage
                                placeholder="none"
                                alt="Email icon"
                                src="../../../svgs/product-page/section-thirteen/email-outlined.svg"
                                layout="constrained"
                            />
                        </InputIconWrapper>
                        <Input
                            placeholder="Enter your email"
                            type="email"
                            required
                        />
                        <ButtonFilled type="submit">Submit</ButtonFilled>
                    </InputAndButton>
                    <TermsAndConditions>
                        By subscribing I agree with{' '}
                        <a href="/terms" target="_blank">
                            Terms and Conditions
                        </a>
                    </TermsAndConditions>
                </FormFields>
            </Form>
        </DefaultWrapperDarkBlue>
    );
};

export default SectionThirteen;
